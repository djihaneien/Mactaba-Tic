const mongoose = require('mongoose');


// User Model

<<<<<<< HEAD:src/back-end/ms-users/models/reader.js
mongoose.model("Reader", {
	rfid:{
		type:String,
		required:true
	},
=======
const readerSchema = new mongoose.Schema({
>>>>>>> 86e4686a8be6f3deb4d1237d09bcba39ca455390:src/back-end/ms-users/reader.js
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
<<<<<<< HEAD:src/back-end/ms-users/models/reader.js
	
=======
	Rfid:{
		type:Number,
	}
>>>>>>> 86e4686a8be6f3deb4d1237d09bcba39ca455390:src/back-end/ms-users/reader.js

})

module.exports=mongoose.model("Reader",readerSchema);