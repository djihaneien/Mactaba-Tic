const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    isbn10:{
        type:String,
        require: true, 
    },
    isbn13:{
        type:String,
        require: true, 
    },
    title: {
        type:String,
        require: true,  
    },
    authors:[{
        type:String,
    }],
    publisher:{
        type:String, 
    },
    publishedDate:{
        type:Date, 
    },
    pages:{
       type : Number,
    },
    category:{
        type: String, 
       },
    quantity:{
        type : Number,
    }  
})

module.exports = mongoose.model('book',bookSchema)