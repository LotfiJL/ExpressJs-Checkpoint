const express = require('express');
const app = express();

const port = 8001;
const {workinghours}= require('./middleware/time')



//set up routes 
app.use(express.static(__dirname+ '/public'));
app.get('/home',workinghours, function(req, res){
    
    res.sendFile(__dirname+ '/public/home.html');
 });

 app.get('/services',workinghours , function (req , res) {
    res.sendFile(__dirname+ '/public/services.html' )
 }
 );
 app.get('/contact' ,workinghours, function (req , res) {
    res.sendFile(__dirname+ '/public/contact.html' )
 }
 );


// listening the server (dima felkher)
 app.listen(port, (err) => {
    (err) ? console.log(err) : console.log(`Go to your localhost at port : ${port}`);
  }
);