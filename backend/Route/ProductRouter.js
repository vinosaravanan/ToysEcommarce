const express = require('express');
const { isAuthenticatedUser,authorizeRoles } = require('../middlewares/auth');
const { createProduct, getAdminProduct, getAllproducts, FilteredProducts, PaginationProducts } = require('../Conroller/ProductConroller');



const productRouter = express.Router();

productRouter.route('/products').get(getAllproducts)
productRouter.route('/filterproducts').get(FilteredProducts)
productRouter.route('/pagination').get(PaginationProducts)


productRouter.route('/admin/products').get(isAuthenticatedUser, authorizeRoles('admin'), getAdminProduct)
productRouter.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), createProduct)




module.exports = productRouter;

