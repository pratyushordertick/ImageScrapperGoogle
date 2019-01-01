var express = require("express")
var mongoose = require("mongoose")
var config = require('./config/config.json')
var app = express();
var mongoURI = config.development.MONGO_URI;
mongoose.Promise = global.Promise;
app.get('/',(req,res)=>{
    res.send('hello')
});
mongoose.connect(mongoURI, function(err) {
    if (!err) { console.log('connection ok  successful'); } else { console.log(err) }
})

app.listen(9090,()=>{
    console.log('Listening on port 9090')
});