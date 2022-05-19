const express = require('express');
const app = express(); 

const Project = require('./models/project')
const Author = require('./models/author')
const Supervisor = require('./models/supervisor')

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://mactaba-tic:eEXWSiHSKGPfYJso@ms-project.wrsiv.mongodb.net/?retryWrites=true&w=majority',
()=>{
    console.log('database is connected')
})


const bodyParser = require('body-parser');
// recive data form json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('our main endpoint in ms-project')
})


// *********LISTING BOOKS*********
app.get('/projects',(req,res)=>{
    // return promise
    Project.find().then((projects)=>{
         res.json(projects)
    })
})

// *********GET BOOK BY ID *********
app.get('/projects/:id',(req,res)=>{
    Project.findById(req.params.id).then((project)=>{
         res.json(project)
    }
    )
})

// *********GET BOOK BY TITLE *********
// app.get('/books/:title',(req,res)=>{
//     Book.find({title:req.params.title}).then((book)=>{
//         res.json(book)
   
//     })
// })

//*********** CREATION BOOK****************
app.post('/addProject',async(req,res)=>{
    var newProject = {
        idProject: req.body.idProject,
        theme: req.body.theme, 
        year: req.body.year,
        fileName: req.body.fileName,
        language: req.body.language, 
        projectType: req.body.projectType,
    }
    console.log(req.body)

    var project = await new Project(newProject).save().then(()=>{
        console.log('New book created')
    })
    
    return res.json(project)
    
})

//*********** MODIFIER BOOK****************
app.put('/setProject/:id',(req,res)=>{
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
app.delete('/deleteProject/:id',(req,res)=>{
    Book.findByIdAndRemove(req.params.id).then((project)=>{
        res.json(project)
    })
})







app.listen(8091,()=>{
    console.log('Ms-Project is runnig on 8091')
})