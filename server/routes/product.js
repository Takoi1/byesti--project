const express = require("express")
const Product = require("../model/product")
const multer  = require('multer')
const router = express.Router();
filename = '';
const mystorage = multer.diskStorage({

    destination:'./uploads',
    filename: (req, file , redirect)=>{
        let date = Date.now();
        let fl= date + '.' + file.mimetype.split('/')[1];
        redirect(null, fl);
        filename = fl;
    }
})
const upload = multer({storage:mystorage})


// router.post("/create", upload.any("image"), (req, res) => {
//     try {
//       let data = req.body;
//       let product = new Product(data);
//       product.date = new Date();
//       product.image = filename;
//       product.tags = data.tags?.split(",");
//       product
//         .save()
//         .then((savedProduct) => {
//           filename = "";
//           res.status(200).send(savedProduct);
//         })
//         .catch((err) => {
//           res.status(400).send(err);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   });



router.get('/all', (req,res)=>{
    Product.find({})
    .then(
        (result)=>{
            res.status(200).send(result);
        } )
    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
})
router.delete('/delete/:id', (req,res)=>{
    id = req.params.id;

   Product.findOneAndDelete({_id: id})
   .then(
    (deletedProduct)=>{
        res.status(200).send(deletedProduct);
        }
   )
   .catch(
    (err)=>{
        res.status(400).send(err)
    }
   )

})
router.put('/update/:id', upload.any('image') , (req,res)=>{
     id = req.params.id;
     data= req.body;
     data.tags = data.tags.split(",");

    if (filename.length > 0){
        data.image = filename;
    }
 
    Product.findByIdAndUpdate({_id: id},data)
    .then(
        (product)=>{
        filename= '';
        res.status(200).send(product);
    })
    .catch(
        (err)=>{
        res.status(400).send(err);
    }
    )
})


module.exports = router