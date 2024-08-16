const express = require('express');
const { isAuthenticatedUser,authorizeRoles } = require('../middlewares/auth');
const { createProduct, getAdminProduct, getAllproducts, FilteredProducts } = require('../Conroller/ProductConroller');



const productRouter = express.Router();

productRouter.route('/products').get(getAllproducts)
productRouter.route('/filterproducts').get(FilteredProducts)


productRouter.route('/admin/products').get(isAuthenticatedUser, authorizeRoles('admin'), getAdminProduct)
productRouter.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), createProduct)




module.exports = productRouter;

