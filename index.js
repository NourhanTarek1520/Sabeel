// ================== all requierd packages ====================
const cors = require("cors");
const ejs = require('ejs');
const bodyParser = require('body-parser');

// ================== all requierd modules ==================== 

//========================= INITIALIZE EXPRESS APP ================
const express = require('express');
let app = express();
let  port = 3000;
// ====================  GLOBAL MIDDLEWARE ====================
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); 

// to serve the dynamic fiels and run js code into html 
app.set('view engine', 'ejs');
app.set('views', 'Views');
// to serve the static files images folder , resumes folder  and all html and css files from views folder  
app.use(express.static("Views"));


// ====================  API ROUTES [ ENDPOINTS ]  ====================
app.get('/',async(req,res,next)=>{
    res.render('index')
})
app.get('/about',async(req,res,next)=>{
    res.render('about')
})
app.get('/activity',async(req,res,next)=>{
    res.render('activity')
})
app.get('/contact',async(req,res,next)=>{
    res.render('contact')
})
app.get('/event',async(req,res,next)=>{
    res.render('event')
})
app.get('/test', async(req, res, next)=>{
    res.render('test')
})
app.get('/QA', async(req, res ,next)=>{
    res.render('QA')
})
app.get('/search', async(req, res ,next)=>{
    res.render('search')
})

// ============================ test my code  ======================


//======================= run the app ================================

app.listen(port , ()=>{console.log(`this server running in port number :  ${port}` )})


