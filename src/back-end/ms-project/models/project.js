const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    idProject:{
        type:String,
        require: true, 
    },
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
     projectType: {
        type: String,
        enum: ['2CPI','1CS','2CS','Master','Ingéniorat'],
        default: 'Ingéniorat'
      },
    
})

module.exports = mongoose.model('project',projectSchema)
