const express = require('express');
const userRouter = express.Router();
const{ isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth');
const {registerUser, LoginUser, logoutUser, getUserDetails, getAllUsers, getSingleUser, UpdateUserRole, DeleteUser} = require('../Conroller/UserConroller')


userRouter.route('/register').post(registerUser)
userRouter.route('/login').post(LoginUser)
userRouter.route('/logout').get(logoutUser)

userRouter.route('/me').get(isAuthenticatedUser, getUserDetails)

userRouter.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), getAllUsers)

userRouter.route('/admin/users/:id')
                 .get(isAuthenticatedUser, authorizeRoles('admin'), getSingleUser)
                 .put(isAuthenticatedUser, authorizeRoles('admin'), UpdateUserRole)
                 .delete(isAuthenticatedUser, authorizeRoles('admin'),DeleteUser)

module.exports = userRouter