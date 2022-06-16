const mongoose = require('mongoose');


// Librarian Model

const libSchema=new mongoose.Schema( {
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
module.exports=mongoose.model("Librarian",libSchema);