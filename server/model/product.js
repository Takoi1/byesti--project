<<<<<<< HEAD
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
=======
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
>>>>>>> 3d113f3ceca4c0f7f0f3edfb40f75f361d5f85e7
    default: false
  },
  
  image: String,
  tags: [String]
});



module.exports = {
  Product: mongoose.model('Product', productSchema),
};
