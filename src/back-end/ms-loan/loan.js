const express = require('express');
const app = express(); 
const Loan =require('./loan')

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mactaba-tic:yTKmjcefFfmOgMFE@ms-loan.qgtc9l7.mongodb.net/?retryWrites=true&w=majority',
()=>{
    console.log('database is connected')
})



app.listen(8093,()=>{
    console.log('Ms-Loan is runnig on 8093')
})