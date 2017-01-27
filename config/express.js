var express = require('express');
var favicon = require('serve-favicon');
//var passport = require('passport');
//var ejs = require('ejs');
var bodyParser = require('body-parser');

module.exports = function(app, config) {
  app.configure(function () {
    app.use(express.compress());
    app.set('port', config.port);
    //app.set('views', __dirname + '/../server/views');
    //app.set('view engine', 'ejs');
    //app.use(favicon(__dirname + '/../assets/favicon.ico'));
    app.use(express.static(__dirname + '/../assets'));
    app.use(express.static(__dirname + '/../client'));
    app.use(express.logger('dev'));
    //app.use(express.bodyParser());
    
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.methodOverride());
  //  app.use(passport.initialize());

  //  app.use('/', app.router);
    //app.use('/', express.static(__dirname + "/../client"));
    
  });
};

