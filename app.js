var express = require('express'), 
    mongoose = require('mongoose'), 
    fs = require('fs'), 
    http = require('http'),
	  config = require('./config/config'), 
    root = __dirname, 
    app = express(), 
    server = null,
    moment = require('moment');
    

// Configuration
//require('./config/db')(config);
/*
var modelsPath = __dirname + '/server/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});
*/


require('./config/express')(app, config);

app.use(errorHandler);



function errorHandler (err, req, res, next) {
  console.log("Entering error handler");
  res.status(500)
  res.render('error', { error: err })
}



module.exports = app;