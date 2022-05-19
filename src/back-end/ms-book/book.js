const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    isbn:{
        type:String,
        require: true, 
    },
    title: {
        type:String,
        require: true,  
    },
    author:{
        type:String,
    },
    publisher:{
        type:String, 
    },
    category:{
        type: String, 
       },
    quantity:{
        type : Number,
    }  
})

module.exports = mongoose.model('book',bookSchema)