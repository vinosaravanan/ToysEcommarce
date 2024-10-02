const express = require('express');
const { isAuthenticatedUser,authorizeRoles } = require('../middlewares/auth');

const { createProduct, 
        getAdminProduct, 
        getAllproducts, 
        FilteredProducts, 
        PaginationProducts, 
        getproductsDetails, 
        SearchProducts } = require('../Conroller/ProductConroller');



const productRouter = express.Router();

productRouter.route('/products').get(getAllproducts)
productRouter.route('/product/:id').get(getproductsDetails)

productRouter.route('/filterproducts').get(FilteredProducts)
productRouter.route('/pagination').get(PaginationProducts)
productRouter.route('/searchproducts').get(SearchProducts)

productRouter.route('/admin/products').get(isAuthenticatedUser, authorizeRoles('admin'), getAdminProduct)
productRouter.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), createProduct)




module.exports = productRouter;

