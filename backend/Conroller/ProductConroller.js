const Product = require('../Model/productModel');
const asynErrorHandler = require('../middlewares/asynErrorHandler');
const ErrorHandler = require('../utils/errorHandler');



// Filtered products 
exports.FilteredProducts = asynErrorHandler(async (req, res, next) => {
     const {category, brand, ratings, minprice, maxprice} = req.query
         console.log(req.query)
         console.log(category, ratings);
         

     const Filter = {};
     if(category) Filter.category = {$in: category.split(',')};
     if(brand) Filter.brand = {$in: brand.split(',')};
     if(ratings) Filter.ratings = {$gte: Number(ratings)};

//  if(minprice && maxprice)Filter.price = {$gte: Number(minprice), $lte:Number(maxprice)}
     if(minprice) Filter.price = {...Filter.price , $gte: Number(minprice)}

     if(maxprice) Filter.price = {...Filter.price, $lte:Number(maxprice)}

    const products = await Product.find(Filter)
     res.status(201).json({products})
})


// Get all product
exports.getAllproducts = asynErrorHandler(async (req, res, next) => {

       const product = await Product.find();
       
       res.status(201).json({
         success:true,
         product
       })
})


// get product -- Admin
exports.getAdminProduct = asynErrorHandler(async (req, res, next) => {
       const product = await Product.find();

       res.status(201).json({
          success:true,
          product
       })

})


//Create Products -- -Admin 
exports.createProduct = asynErrorHandler(async (req, res, next) => {
       req.body.user = req.user.id;
       
       const product = await Product.create(req.body);
       res.status(201).json({
          success:true,
          product
       })
})


