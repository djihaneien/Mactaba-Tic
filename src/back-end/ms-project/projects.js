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


// *********LISTING PROJECTS*********
app.get('/projects',(req,res)=>{
    // return promise
    Project.find().then((projects)=>{
         res.json(projects)
    })
})

// *********GET PROJECT BY ID *********
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

//*********** CREATION PROJECT / SUPERVISOR/AUTHOR****************
app.post('/addProject',async(req,res)=>{
    var newProject = {
        theme: req.body.theme, 
        year: req.body.year,
        fileName: req.body.fileName,
        language: req.body.language, 
        authors : req.body.authors,
        projectType: req.body.projectType,
        
    }
    console.log(req.body)
    
    var project = await new Project(newProject).save().then(()=>{
        console.log('New project created')
    })

    // await Author.updateMany({ '_id': project.authors }, 
    // { $push: { projects: project._id } });
    
    return res.json(project)
    
})

app.post('/addSupervisor',async(req,res)=>{
    var newSupervisor = {
        firstNma: req.body.firstName,
        lastName: req.body.lastName, 
        email: req.body.email         
    }
    console.log(req.body)

    var supervisor = await new Supervisor(newSupervisor).save().then(()=>{
        console.log('New supervisor created')
    })
 
    return res.json(supervisor)
    
})

app.post('/addAuthor',async(req,res)=>{
    var newAuthor= {
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        email: req.body.email         
    }
    console.log(req.body)

    var author = await new Author(newAuthor).save().then(()=>{
        console.log('New author created')
    })
 
    return res.json(author)
    
})

//*********** MODIFIER PROJECT ****************
app.put('/setProject/:id',(req,res)=>{
    var theme = req.body.theme
    var year =req.body.year
    var fileName= req.body. fileName
    var language= req.body.language
    var projectType = req.body.projectType
    Book.findByIdAndUpdate(req.params.id,{
        idProject:idProject,
        theme:theme,
        year:year,
        fileName:fileName,
        language:language,
        projectType:projectType
    }).then((book)=>{
        res.json(book)
    })    
})

// ****************DELETE PROJECT / SUPERVISOR / AUTHOR************
app.delete('/deleteProject/:id',(req,res)=>{
    Project.findByIdAndRemove(req.params.id).then((project)=>{
        res.json(project)
    })
})

app.delete('/deleteSupervisor/:id',(req,res)=>{
    Supervisor.findByIdAndRemove(req.params.id).then((supervisor)=>{
        res.json(supervisor)
    })
})

app.delete('/deleteAuthor/:id',(req,res)=>{
    Author.findByIdAndRemove(req.params.id).then((author)=>{
        res.json(author)
    })
})







app.listen(8091,()=>{
    console.log('Ms-Project is runnig on 8091')
})