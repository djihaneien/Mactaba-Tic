const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
    reader_rfid:{
        type:String,
        require: true, 
    },
    book_rfid: {
        type:String,
        require: true,  
    },
    dateLoan:{
        type:Date,
    },
    dateReturn:{
        type:Date, 
    },
    state:{
        type: String, 
        enum: ['Retard'],
        default: loan
       },
     
})

module.exports = mongoose.model('loan',loanSchema)