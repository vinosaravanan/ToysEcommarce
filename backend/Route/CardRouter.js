const express = require("express");
const { isAuthenticatedUser} = require('../middlewares/auth');
const {AddCard} = require('../Conroller/CardConroller')

const CardRouter = express.Router()

CardRouter.route('/card').post(isAuthenticatedUser, AddCard)




module.exports = CardRouter