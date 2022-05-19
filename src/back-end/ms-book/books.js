const express = require('express');
const app = express(); 
const Book = require('./book')

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mactaba-tic:HpHW0252rEo8k8TT@ms-book.wizna.mongodb.net/ms-book?retryWrites=true&w=majority',
()=>{
    console.log('database is connected')
})



const bodyParser = require('body-parser');
// recive data form json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('our main endpoint in ms-book')
})


// *********LISTING BOOKS*********
app.get('/books',(req,res)=>{
    // return promise
    Book.find().then((books)=>{
         res.json(books)
    })
})

// *********GET BOOK BY ID *********
app.get('/books/:id',(req,res)=>{
    Book.findById(req.params.id).then((book)=>{
         res.json(book)
    }
    )
})

// *********GET BOOK BY TITLE *********
app.get('/books/:title',(req,res)=>{
    Book.find({title:req.params.title}).then((book)=>{
        res.json(book)
   
    })

    
})

//*********** CREATION BOOK****************
app.post('/addBook',async(req,res)=>{
    var newBook = {
        isbn: req.body.isbn,
        title: req.body.title, 
        author: req.body.author,
        publisher: req.body.publisher,
        category: req.body.category, 
        quantity: req.body.quantity,
    }
    console.log(req.body)

    var book = await new Book(newBook).save().then(()=>{
        console.log('New book created')
    })
    
    return res.json(book)
    
})

//*********** MODIFIER BOOK****************
app.put('/setBook/:id',(req,res)=>{
    var isbn= req.body.isbn
    var title = req.body.title 
    var author =req.body.author
    var  publisher= req.body.publisher
    var category= req.body.category
    var quantity = req.body.quantity
    Book.findByIdAndUpdate(req.params.id,{
        isbn:isbn,
        title:title,
        author:author,
        publisher: publisher,
        category:category,
        quantity:quantity
    }).then((book)=>{
        res.json(book)
    })    
})

// ****************DELETE BOOK************
app.delete('/deleteBook/:id',(req,res)=>{
    Book.findByIdAndRemove(req.params.id).then((book)=>{
        res.json(book)
    })
})

app.listen(8090,()=>{
    console.log('Ms-Book is runnig on 8090')
})