var express = require("express")
var mongoose = require("mongoose")
const cors = require("cors")
const aws= require("aws-sdk")

var config = require('./config/config.json')
var app = express();
var mongoURI = config.development.MONGO_URI;
mongoose.Promise = global.Promise;


var routes = require('./routes/routes')
mongoose.connect(mongoURI, function(err) {
    if (!err) { console.log('connection ok  successful'); } else { console.log(err) }
})


app.use(cors({
    origin: 'localhost:4200'
}));

app.use(function(req, res, next) {
    console.log('-----------init');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/routes', routes);
app.use(express.static(__dirname + '/public'))
app.use(function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
})


app.listen(process.env.PORT || 8080);
console.log('Server started, Port : ' + (process.env.PORT || 8080))
