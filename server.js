var express = require("express")
var mongoose = require("mongoose")
const cors = require("cors")
const aws= require("aws-sdk")

var config = require('./config/config.json')
var app = express();
var mongoURI = config.development.MONGO_URI;
mongoose.Promise = global.Promise;
// app.get('/',(req,res)=>{
//     res.send('hello')
// });

(async function(){
    try{
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: config.aws.KEY ,
            secretAccessKey: config.aws.ACCESS,
            region: 'us-east-1'
        });
        
const  s3= new aws.S3();
const response=await s3.listObjectsV2({
    Bucket: 'osasnv-upload',
    Prefix: 'images/testingNew'
}).promise();


    }
    catch(e){
        console.log('our error',e);

    }
})();


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
app.use(express.static(__dirname + '/client/dist/client'))
app.use(function (req, res) {
    res.sendFile(__dirname + '/client/dist/client/index.html')
})


app.listen(process.env.PORT || 9090);
console.log('Server started, Port : ' + (process.env.PORT || 9090))
