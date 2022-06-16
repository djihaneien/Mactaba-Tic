const mongoose = require('mongoose');

const readerSchema=new mongoose.Schema( {
	Nom: {
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
	Rfid:{
		type:String,
	}

})

module.exports=mongoose.model("reader",readerSchema);