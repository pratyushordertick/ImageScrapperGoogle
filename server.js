var express = require("express")
var mongoose = require("mongoose")
var config = require('./config/config.json')
var app = express();
var mongoURI = config.development.MONGO_URI;
mongoose.Promise = global.Promise;
// app.get('/',(req,res)=>{
//     res.send('hello')
// });
var routes = require('./routes/routes')
mongoose.connect(mongoURI, function(err) {
    if (!err) { console.log('connection ok  successful'); } else { console.log(err) }
})

app.use('/routes', routes);
app.use(express.static(__dirname + '/client/dist/client'))
app.use(function (req, res) {
    res.sendFile(__dirname + '/client/dist/client/index.html')
})


app.listen(process.env.PORT || 9090);
console.log('Server started, Port : ' + (process.env.PORT || 9090))
