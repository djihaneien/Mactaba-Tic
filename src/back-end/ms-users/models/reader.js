const mongoose = require('mongoose');


// User Model

mongoose.model("Reader", {
	rfid:{
		type:String,
		required:true
	},
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
	

})