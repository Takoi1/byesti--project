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



module.exports = {
  Product: mongoose.model('Product', productSchema),
};
