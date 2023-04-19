const mongoose = require('mongoose');
const { CartItem} = require("../model/product")
const productSchema = new mongoose.Schema({
  reference: String,
  marque: String,
  date: Date,
  quantite: Number,
  price: Number,
  marque_voiture: String,
  status: {
    type: Boolean,
    default: false
  },
  image: String,
  tags: [String]
});

const cartItemSchema = new mongoose.Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1.']
    }
  });
  

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  items: [cartItemSchema]

  
});
cartSchema.methods.addProduct = async function(productId, quantity) {
    const cartItem  = new CartItem({
      product: productId,
      quantity: quantity
    });
  
    this.items.push(cartItem);
    await this.save();
  };
const Cart = mongoose.model('Cart', cartSchema);
module.exports = mongoose.model('CartItem', cartItemSchema);

module.exports = {
  Product: mongoose.model('Product', productSchema),
  Cart: Cart
};
