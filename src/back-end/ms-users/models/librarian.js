const mongoose = require('mongoose');


// Librarian Model

mongoose.model("Librarian", {
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
    endDate: {
		type: Date,
		
	}

})