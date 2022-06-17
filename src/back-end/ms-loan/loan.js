const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
   rfidReader:{
        type:String,
         
    },
    rfidBook:{
        type:String,
         
    },
    dateLoan: {
        type:Date,
         
    },
    dateReturn: {
        type:Date,
       
    },
    
})

module.exports = mongoose.model('loan',loanSchema)