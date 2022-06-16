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
		
	},
	password: {
		type: String,
		
	},
    birthday: {
		type: Date
	},

	

})
module.exports=mongoose.model("Librarian",libSchema);