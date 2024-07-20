const asynErrorHandler = require("../middlewares/asynErrorHandler");
const User = require("../Model/UserModel");
const ErrorHandler = require("../utils/errorHandler");

// register user
exports.registerUser = asynErrorHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  console.log(name, email, password);

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  const token = user.getJWTToken();

  // const options = {
  //   expires: new Date(
  //     Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
  //   ),
    
  //   maxAge: 900000,
  //   httpOnly: true,
  //   secure: true,
  // };

  res.cookie("token", token, {
    maxAge: 900000,
    httpOnly: false,
    secure: false,
    sameSite: 'Lax',
    // path:'/register'
  })
  
  // res.cookie('simpleCookie', 'simpleValue');


  console.log(token);

  res.status(201).json({
    success: true,
    user,
    token,
  });
});

// Login User
exports.LoginUser = asynErrorHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email And Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or password"));
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const token = user.getJWTToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(201).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
});

// Logout User
exports.logoutUser = asynErrorHandler(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Get User Details
exports.getUserDetails = asynErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// ADMIN DASHBOARD
// Get All Users -- Admin
exports.getAllUsers = asynErrorHandler(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get Single Users Details
exports.getSingleUser = asynErrorHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`User doesn't exist with id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// Update User Role -- Admin
exports.UpdateUserRole = asynErrorHandler(async (req, res, next) => {
       const newUserdata = {
          name: req.body.name,
          email:req.body.email,
          role:req.body.role
       }

    await User.findByIdAndUpdate(req.params.id, newUserdata, {
        new:true,
        runValidators:true,
        useFindAndModify: false,
    }) 

    res.status(200).json({
       success:true
    })
})

// Delete Role --Admin
exports.DeleteUser = asynErrorHandler(async (req, res, next)=> {

      const user = req.params.id

      if (!user) {
        return next(new ErrorHandler(`User doesn't exist with id: ${req.params.id}`, 404))
      }

     await User.findByIdAndDelete(user)

    res.status(200).json({
        success:true,
        message:'deleted successFully'
    })
})

