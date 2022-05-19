const mongoose = require('mongoose');


// User Model

mongoose.model("Reader", {
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
	creationDate: {
		type: Date,
		required: true
	},
	Rfid:{
		type:Number,
		required:true
	}

})