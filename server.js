var express = require('express');
var path = require('path');
var bodyParser =  require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;

var app = express();

//view-engine
app.set('views', path.join(__dirname, 'views'));
app.set('view-engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder for angular stuff
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'node_modules')));

//body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routes
app.use("/", index);
app.use("/api", tasks);

app.listen(process.env.PORT || port, function(){
    console.log("Server started on port", port);
});