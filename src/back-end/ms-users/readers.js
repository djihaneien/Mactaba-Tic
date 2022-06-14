const express  = require("express");
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

// Load Mongoose
const mongoose = require("mongoose");
const Reader = require("./models/reader")
const Librarian=require("./models/librarian")


	// mongoose.connect("mongodb+srv://mactaba-tic:5FG21vkGOzJVioXn@ms-compte.bjwd2o7.mongodb.net/?retryWrites=true&w=majority", () =>{
	//	console.log("ms-compte database is concted")
     //  })
  
	   
	 mongoose.connect("mongodb://localhost:27017/compte", () =>{
		console.log("ms-compte database is concted")
       })
	
	
	
	                    





app.get("/", (req, res) => {
	res.send("This is our main endpoint")
})
// Create new reader
app.post("/reader", async (req, res) => {
	const newReader = {
		"Nom":req.body.Nom,
		"Prenom": req.body.Prenom,
		"email":req.body.email,
		"password": req.body.password,
		"birthday": req.body.birthday,
		"Niveau": req.body.Niveau,
		"Rfid":req.body.Rfid,
	}
	
	// Create new Reader instance..
	const reader = new Reader(newReader)
	reader.save().then((r) => {
		res.send("Reader created..")
	}).catch( (err) => {
		if(err) {
			throw err
		}
	})
	
})


// Create new librarian
app.post("/lib", async (req, res) => {
	const newLib = {
		"firstName":req.body.firstName,
		"lastName": req.body.lastName,
		"email":req.body.email,
		"password": req.body.password,
		"birthday": req.body.birthday,
		"creationDate": req.body.creationDate,
		"endDate":req.body.endDate,

	}
	
	// Create new Lib instance..
	const lib = new Librarian(newLib)
	lib.save().then((r) => {
		res.send("Librarian created..")
	}).catch( (err) => {
		if(err) {
			throw err
		}
	})
	
})
// GET all readers
app.get("/readers",async (req, res) => {
	Reader.find().then((readers) => {
		res.send(readers)
	}).catch((err) => {
		if(err) {
			throw err
		}
	})
})

// GET all librarians
app.get("/librarians",async (req, res) => {
	Librarian.find().then((librarians) => {
		res.send(librarians)
	}).catch((err) => {
		if(err) {
			throw err
		}
	})
})
//Authentication Librarian
app.post("/connect",async (req, res) => {
     var email=req.body.email;
	 var password= req.body.password;
	 console.log(email);

	Librarian.findOne({email:email}).then((librarians) => {
		console.log(librarians)
		if(!librarians){
		return res.status(401).json({
			message: "User not found", 
              })
		}
      Librarian.findOne({password:password}).then((librarians)=>{
		console.log(librarians)
		if(librarians) {
			res.send({message:"user found"})
	  }
	  

		})
	})
	});

// Delete reader by name 
app.delete("/readers/:uid", async (req, res) => {
	Reader.find({Nom :req.params.uid}).then(() => {
		console.log("reader found ")
		res.send("User deleted with success...")
	}).catch( () => {
		res.sendStatus(404)
	})
})

//update 
app.put("/readers/:uid", async (req, res) => {
	Reader.update({Nom :req.params.uid}).then(() => {
		console.log("reader found ")
		res.send("User deleted with success...")
	}).catch( () => {
		res.sendStatus(404)
	})
})


app.listen(8092, () => {
	console.log("Up and running! -- This is our Readers service")
})
