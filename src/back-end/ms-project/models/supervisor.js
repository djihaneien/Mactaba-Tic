const mongoose = require('mongoose')

const supervisorSchema = new mongoose.Schema({
    idSupervisor:{
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

module.exports = mongoose.model('supervisor',supervisorSchema)
