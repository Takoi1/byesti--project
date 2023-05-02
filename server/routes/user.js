const express = require("express")
const { signup,signin } = require("../controllers/user")
const {getAll,getOne,deleteAll,deleteOne,updateOne,createOne} = require("../controllers/crudController")
const user = require("../model/user")
const { Product, Cart ,CartItem} = require("../model/product")


const router = express.Router()

router.post("/signup",signup)
router.post("/signin",signin)
router.get("/getAll",getAll(user))
router.get("/getone/:id", getOne(user))
router.delete("/deleteone/:id", deleteOne(user))
router.delete("/deleteAll", deleteAll(user))
router.post("/addUser",createOne(user))
router.put("/updateUser",updateOne(user))

addProduct = async function(productId, quantity) {
    const cartItem = new CartItem({
      product: productId,
      quantity: quantity
    });
  
    this.items.push(cartItem);
    await this.save();
  };
router.post('/cart/:productId', async (req, res, next) => {
    try {
      const { productId } = req.params;
      const { quantity } = req.body;
  
      // Check if the product exists
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).send('Product not found');
      }
  
      // Create a new cart item with the product ID and quantity
      const cart = await Cart.findOne({ user: req.body._id });
      if (!cart) {
        // Create a new cart if one doesn't exist for the user
        const newCart = new Cart({ user: req.body._id });
        await newCart.save();
        await newCart.addProduct(productId, quantity);
        return res.send(newCart);
      } else {
        // Add the product to the existing cart
        await cart.addProduct(productId, quantity);
        return res.send(cart);
      }
    } catch (err) {
      next(err);
    }
  });
  
module.exports = router