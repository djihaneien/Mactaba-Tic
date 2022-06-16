const express = require('express');
const app = express(); 
const cors = require("cors");

const multer = require('multer')
const Book = require('./book')
const CopyBook = require('./copyBook')

app.use(cors());


const mongoose = require('mongoose')
<<<<<<< HEAD
 /*mongoose.connect('mongodb+srv://mactaba-tic:HpHW0252rEo8k8TT@ms-book.wizna.mongodb.net/ms-book?retryWrites=true&w=majority',
=======
 mongoose.connect('mongodb+srv://mactaba-tic:HpHW0252rEo8k8TT@ms-book.wizna.mongodb.net/ms-book?retryWrites=true&w=majority',
>>>>>>> 63430d7136afc97b4700568c6ad0ab4ba2c06f1e
()=>{
   console.log('database is connected')
})*/

<<<<<<< HEAD
mongoose.connect("mongodb://localhost:27017/ms-book", () =>{
	console.log("ms-book database is concted")
      })
=======
/*mongoose.connect("mongodb://localhost:27017/ms-book", () =>{
	console.log("ms-book database is concted")
      })*/
>>>>>>> 63430d7136afc97b4700568c6ad0ab4ba2c06f1e



    const upload =multer({
        
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
app.post('/addBook',upload.single('image'),async(req,res)=>{
    var newBook = {
        isbn10: req.body.isbn10,
        isbn13: req.body.isbn13,
        title: req.body.title,
        subtitle: req.body.subtitle, 
        description: req.body. description, 
        publisher: req.body.publisher,
        publishedDate: req.body.publishedDate,
        author: req.body.author,
        language:req.body.language,
        pages:req.body.pages,
        category: req.body.category,
        //image: req.file.buffer
     //quantity: req.body.quantity,
    }
    console.log(req.body)

    var book = await new Book(newBook).save().then(()=>{
        console.log('New book created')
    }).catch((err)=>{
        console.log(err)
    })
    
    return res.json(book)
    
})

app.post('/idbook',(req,res)=>{
     var isbn10 = req.body.isbn10
     Book.findOne({isbn10:isbn10}).then((book)=>{
        res.send(book.id)
     })
})

app.post('/addCopyBook',async(req,res)=>{
    var newCopyBook = {
        rfid: req.body.rfid,
        book : req.body.book,
       
    }
    console.log(req.body)

    var copyBook = await new CopyBook(newCopyBook ).save().then(()=>{
        console.log('New copy book created')
    })
    
    return res.json(copyBook)
    
})

//*********** MODIFIER BOOK****************
app.put('/setBook/:id',(req,res)=>{
    var isbn10= req.body.isbn10
    var isbn13= req.body.isbn13
    var title = req.body.title
    var subtitle = req.body.subtitle 
    var description = req.body. description 
    var publisher = req.body.publisher
    var publishedDate = req.body.publishedDate
    var author = req.body.author
    var language = req.body.language
    var pages =req.body.pages
    var category = req.body.category 
    /*var image =  {
        data : fs.readFileSync('uploads/'+req.file),
        contentType: "image.png/",
    }*/
   // var quantity = req.body.quantity
    Book.findByIdAndUpdate(req.params.id,{
        isbn10:isbn10,
        isbn13:isbn13,
        title:title,
        subtitle: subtitle,
        description : description,
        publisher: publisher,
        publishedDate: publishedDate,
        author:author,
        language :language,
        pages:pages,
        category:category,
        image: {
            data : fs.readFileSync('uploads/'+req.file),
            contentType: "image.png/",
        },
        //quantity:quantity
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