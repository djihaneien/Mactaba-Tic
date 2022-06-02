const mongoose = require('mongoose')

const bookCopySchema = new mongoose.Schema({
    rfid:{
        type:String,
        require: true, 
    },
    book:[{
        type: mongoose.Types.ObjectId,
        ref : "book"
    }]
    
})

module.exports = mongoose.model('bookCopy', bookCopySchema)