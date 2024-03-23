const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    bookId:{
          type:objectId,
          ref:"bookModel",
          required:true
    },
    reviewedBy:{
          type:String, // value: "reviewer's name"
          default:"Guest",
          required:true,
         
    },
    reviewedAt:{
          type: Date,
          required:true
    },
    rating:{
          type:Number,
          min:1,
          max:5,
          required:true
    },
    review:{
          type:String
    },
    isDeleted:{
          type:Boolean,
          default:false
    },
},{timestamps:true})

module.exports = mongoose.model("reviewModel", reviewSchema)