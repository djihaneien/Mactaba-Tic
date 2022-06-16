const mongoose = require('mongoose');


// User Model

const readerSchema = new mongoose.Schema({
	firstName: {
		type: String,
		
	},
    lastName: {
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
	},

})

module.exports=mongoose.model("reader",readerSchema);