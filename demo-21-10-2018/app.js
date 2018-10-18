/**
 * require the needed packages 
 */

//load enviroment congigurations here
require('dotenv').config();
//load databse connection
const {db} = require('./lib/db');
//import express
const express = require('express');

//import body parser to parse json, and urlencoded requests
const bodyParser = require('body-parser');

//import morgan to log requests to the console
const logger = require('morgan');

//import path module := native module
const path = require('path');

//import http-errors moudle to help create custom error messages
const createError = require('http-errors');

/**
 * import own modules 
*/

const ApiRoutes = require('./api');

const ClientRoutes = require('./routes');

//instantiate express app
const app = express();

//set up port 
const port = process.env.PORT || 3000;

/**
 *  set up middleware
 */

//set up morgan to log request to the console
app.use(logger("dev"));

//set up view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));




//set up body parse := parse json and urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/v1',ApiRoutes);
app.use('/',ClientRoutes);

//set up static folder
app.use('/static',express.static(path.join(__dirname,'static')));

//catch 404 errors
app.use(function(req,res,next){
    next(createError(404));
})

//create custom errors
app.use(function(err,req,res,next){
    
      if(!err){next()};
      res.json({
          success:false,
          code: err.code ? err.code : 500,
          message: err.message ? err.message : "Ooops!!! an error occoured, if you think its a problem with the api service, please report the problem to bugs@hackersguild.com",
          reason: err.reason ? err.reason : null,
          date: new Date()
      })
})

 /**
  * start app
 */

 app.listen(port,()=>console.log(`NASA SPACE APP STARTED ON PORT ${port}`));