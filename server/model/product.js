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
<<<<<<< HEAD
   },
    image: {
    type:String
},
tags: {
    type:Array
}
})
module.exports = Product;
=======
  },
  
  image: String,
  tags: [String]
});

// const Product = mongoose.model('Product', productSchema)


module.exports = Product;
>>>>>>> 6a1078ad2f3a4ecae4acb6fb58c49350c5153107
