const mongoose = require('mongoose');


// User Model

const readerSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
    lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
    birthday: {
		type: Date,
		required:true
	},
	Niveau:{
		type:String,
		required:true
	},
	Rfid:{
		type:Number,
		required:true
	}

})

module.exports=mongoose.model("Reader",readerSchema);