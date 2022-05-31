const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
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
    projects:[{
        type: mongoose.Types.ObjectId,
        ref : "project"
    }]
    
})

module.exports = mongoose.model('author',authorSchema)
