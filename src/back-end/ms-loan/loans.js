const express = require('express');
const app = express(); 
const Loan =require('./loan')
const cors = require("cors");
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true})); 

app.use(cors());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mactaba-tic:yTKmjcefFfmOgMFE@ms-loan.qgtc9l7.mongodb.net/?retryWrites=true&w=majority',
()=>{
    console.log('database is connected')
})
app.post("/pret", async (req, res) => {
	const newpret = {
		rfidReader:req.body.rfidReader,
		rfidBook: req.body.rfidBook,
		dateLoan:req.body.dateLoan,
		dateReturn: req.body.dateReturn,

	}
	
	// Create new Lib instance..
	const pret= new Loan(newpret)
	pret.save().then((r) => {
		res.send("pret created..")
	}).catch( (err) => {
		if(err) {
			throw err
		}
	})
});
app.delete("/return", async (req, res) => {
 var rfid=req.body.rfid
	Loan.find({rfidReader:rfid}).then(() => {
		console.log("reader found ")
		res.send("User deleted with success...")
	}).catch( () => {
		res.sendStatus(404)
	})
})


app.listen(8093,()=>{
    console.log('Ms-Loan is runnig on 8093')
})