const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
       name:{
        type:String,
        required:true
       },

       description:{
        type:String,
        required:true
       },

       price:{
        type:Number,
        required:true
       },

       category:{
         type:String,
         required:true
       },

       brand:{
        type:String,
        required:true
       },

       imagePath:{
          type:String,
          required:true
       },

       ratings:{
        type:Number,
        required:true
       },

    //    reviews:[
    //        {
    //         user:{
    //             type:mongoose.Schema.ObjectId,
    //             ref:"User",
    //             required:true
    //         },

    //         name:{
    //            type:String,
    //            required:true
    //         },

    //         rating:{
    //             type:String,
    //             required:true
    //         }

    //        }
    //    ],
    
       user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
        },

       createdAt: {
        type: Date,
        default: Date.now
       }

});


module.exports = mongoose.model('Product', ProductSchema);

