const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    theme: {
        type:String,
        require: true,  
    },
    year:{
        type:String,
    },
    fileName:{
        type:String, 
    },
     language:{
        type: String, 
       },
    authors: [{
        type: mongoose.Types.ObjectId,
        ref : "author"
    }], 
    supervisors:[{
        type: mongoose.Types.ObjectId,
        ref : "supervisor"
    }],
     projectType: {
        type: String,
        enum: ['2CPI','1CS','2CS','Master','Ingéniorat'],
        default: 'Ingéniorat'
      },
    
})

module.exports = mongoose.model('project',projectSchema)
