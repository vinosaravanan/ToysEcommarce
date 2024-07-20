const jwt = require('jsonwebtoken');
const User = require('../Model/UserModel');
const ErrorHandler = require('../utils/errorHandler');
const asynErrorHandler = require('../middlewares/asynErrorHandler');
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Types


exports.isAuthenticatedUser = asynErrorHandler(async (req, res, next) => {
    const {token} = req.cookies;
    
    if (!token) {
        return next( new ErrorHandler("Please Login to access", 401))
    }

    const decodeddata = jwt.verify(token, process.env.JWT_SECRET);
    console.log(' isAuthenticatedUser', decodeddata);
    const user = await User.findById( new ObjectId(decodeddata));

     req.user = user
    // console.log(user);
    next()

})

exports.authorizeRoles = (...roles) => {
     return (req, res, next) => {
          if(!roles.includes(req.user.role)){
             return next( new ErrorHandler(`Role: ${req.user.role} is not allowed `, 403))
          }
          next()
     }
     
}





