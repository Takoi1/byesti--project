const mongoose = require('mongoose')
const Product = mongoose.model('Product',{

    
    reference: {
        type:String,
        required: true
    },  
    nom: {
        type:String,
        required: true
    },   
    marque: {
        type:String,
        required: true
    }, 
    date: {
        type:Date
    },
    quantite: {
        type:Number,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    marque_voiture: {
        type:String ,
        required: true
    },  
    status: {
    type:Boolean,
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
