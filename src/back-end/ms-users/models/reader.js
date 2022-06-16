const mongoose = require('mongoose');


// User Model

<<<<<<< HEAD
	
const readerSchema = new mongoose.Schema({
	firstName: {
=======
const readerSchema=new mongoose.Schema( {
	Nom: {
>>>>>>> 22eed44da89da43458a7fcb38bce3676dd7d0006
		type: String,
		
	},
   Prenom: {
		type: String,
		
	},
	email: {
		type: String,
		
	},
	password: {
		type: String,
	},
    birthday: {
		type: Date,
	},
	Niveau:{
		type:String,
	},
<<<<<<< HEAD
=======
	
>>>>>>> 22eed44da89da43458a7fcb38bce3676dd7d0006
	Rfid:{
		type:Number,
	}

})

module.exports=mongoose.model("Reader",readerSchema);