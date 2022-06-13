const mongoose = require('mongoose');


// Librarian Model

mongoose.model("Librarian", {
	firstName: {
		type: String
	},
    lastName: {
		type: String
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
		type: Date
	},
	creationDate: {
		type: Date
	},
    endDate: {
		type: Date,
		
	}

})