var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var jade = require('jade');    
var QB = require('quickblox');
var app = express();
var template = jade.compileFile(__dirname + '/source/login.jade');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(logger('dev'));
app.use(express.static(__dirname + '/source/static'));
console.log(__dirname);
app.set('views', __dirname + '/source');

require('./QBConfig.js')(QB);
require('./routes.js')(app, express);
require('./api.js')(app, express, QB);

app.get('/', function(req, res, next) {
    try {
        var html = template({ title: 'Interview Me Now' })
        res.send(html)
    } catch (e) {
        next(e)
    }
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
