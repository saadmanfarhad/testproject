var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/routes');
var cors = require('cors');
var path = require('path');


var app = express();

mongoose.connect("mongodb://localhost:27017/testproject");

mongoose.connection.on('connected',()=>{
  console.log('Connected to MongoDB');
})

mongoose.connection.on('error',(err)=>{
  if(err){
    console.log('Error in Db connection '+ err);
  }
})

const port = 3100;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));


app.use('/', routes);


app.listen(port,()=>{
  console.log('Server started at port '+port);
});

module.exports = app;
