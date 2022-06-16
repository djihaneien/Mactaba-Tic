const mongoose = require('mongoose')

const bookCopySchema = new mongoose.Schema({
    rfid:{
        type:String,
        
    },
    book:{
        type: mongoose.Types.ObjectId,
        ref : "book"
    }
    
})

module.exports = mongoose.model('bookCopy', bookCopySchema)