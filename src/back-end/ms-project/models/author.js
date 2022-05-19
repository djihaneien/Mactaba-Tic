const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    idAuthor:{
        type:Number,
        require: true, 
    },
    firstName: {
        type:String,
        require: true,  
    },
    lastName:{
        type:String,
        require: true,
    },
    email:{
        type:String, 
        require: true,
    },
    
})

module.exports = mongoose.model('author',authorSchema)
