const mongoose = require('mongoose')
const Product = mongoose.model('Product',{

    
    reference: {
        type:String
    },    
    marque: {
        type:String
    }, 
    date: {
        type:Date
    },
    quantite: {
        type:Number
    },
    price: {
        type:Number
    },
    marque_voiture: {
        type:String 
    },  
    status: {
    type:Boolean,
    default: false
   },
    image: {
    type:String
},
tags: {
    type:Array
}
})
module.exports = Product;