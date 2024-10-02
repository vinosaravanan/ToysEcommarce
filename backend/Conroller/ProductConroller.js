const Product = require('../Model/productModel');
const asynErrorHandler = require('../middlewares/asynErrorHandler');
const ErrorHandler = require('../utils/errorHandler');


//Search Products 
exports.SearchProducts = async(req, res, next) => {

     const { search } = req.query;
     try {
         const products = await Product.find({
             $or: [
                 { name: { $regex: search, $options: 'i' } },
                 { category: { $regex: search, $options: 'i' } },
                 { brand: { $regex: search, $options: 'i' } },
                 { description: { $regex: search, $options: 'i' } }
             ]
         }).limit(6);
         
         res.json({ products });
     } catch (error) {
         res.status(500).json({ message: 'Server error' });
     }

}

// Filtered products 
exports.FilteredProducts = asynErrorHandler(async (req, res, next) => {
     const {category, brand, ratings, minprice, maxprice} = req.query;

         console.log(req.query)
      
         

     const Filter = {};

     if(category) Filter.category = {$in: category.split(',')};

     if(brand) Filter.brand = {$in: brand.split(',')};

     if(ratings) Filter.ratings = {$gte: Number(ratings)};

     if(minprice) Filter.price = {...Filter.price , $gte: Number(minprice)}

     if(maxprice) Filter.price = {...Filter.price, $lte:Number(maxprice)}


    const products = await Product.find(Filter).limit(9); //// add limit quary for pagenation 
     res.status(201).json({
       success:true,
       products
  })
})

/// Pagination
exports.PaginationProducts = asynErrorHandler( async (req, res, next) => {
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 9
        const skip = (page -1) * limit;
        
        console.log(page, limit, skip);
        

        const products = await Product.find().skip(skip).limit(limit)
        const totalProducts = await Product.countDocuments();


        res.status(201).json({
              products,
              totalProducts,
              totalpages:Math.ceil(totalProducts / limit),
              currentpage: page
        })

})

// Get all product
exports.getAllproducts = asynErrorHandler(async (req, res, next) => {

       const product = await Product.find().limit(9); //// add limit quary for pagenation
       
       res.status(201).json({
         success:true,
         product
       })
})


// Get Product Details By id
exports.getproductsDetails = asynErrorHandler(async (req, res, next) => {
        const product = await Product.findById(req.params.id)
         
         if (! product) {
              return new ErrorHandler("product Not Found", 404)
         }

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


