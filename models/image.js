var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageScrap = new Schema({
    
		"keyword":{
			type:String,
            index: { unique: true }
		},
		"imgUrls":[String]
	
})

module.exports = mongoose.model('imageScrap', imageScrap);