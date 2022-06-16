const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
   isbn10:{
        type:String,
         
    },
    isbn13:{
        type:String,
         
    },
    title: {
        type:String,
         
    },
    subtitle: {
        type:String,
       
    },
    description: {
        type:String,
        
    },
    publisher:{
        type:String, 
    },
    publishedDate:{
        type:Date, 
    },
    author:{
        type:String,
    },
    language:{
        type:String, 
    },
    pages:{
       type : Number,
    },
    category:{
        type: String, 
       },
    image:{      
         type: Buffer,        
    }   
   // quantity:{
      //  type : Number,
    //}  
})

module.exports = mongoose.model('book',bookSchema)