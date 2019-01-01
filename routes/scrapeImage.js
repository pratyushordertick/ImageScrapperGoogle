var express = require('express');
var router = express.Router();
var rp = require('request-promise');
var cheerio = require('cheerio');
const aws= require("aws-sdk")
var fs = require('fs'); 
var config = require('../config/config.json');
// var ImageService = promise.promisifyAll(commonUtil.getService('img'));
var ImageService = require('../models/image')

exports.history =   function(req,res,next) {
        if(req.query && req.query.searchKey) {
            console.log(req.query)
            ImageService.findOne({keyword:req.query.searchKey},{imgUrls:1})
           .then(function(imageData){
                if(imageData && imageData[0]){
                    console.log(imageData);
                    return res.status(200).json({"status": "OK", "message": "Image found.", "data":imageData[0]});
                }else{
                    next();
                }
           }).catch(next)
        }else {
            return res.status(404).json({"status": "NOT FOUND", "message": "Please provide a word to search."});
        }
    }

   exports.history2=  function(req,res,next) {
        console.log('--------------when it came here----------------');
        var search_base = 'http://images.google.com/search?tbm=isch&q=%'//'https://www.google.com/search?q=%&source=lnms&tbm=isch&sa=X';
        var base = '&tbs=';
        var build = [];
        if (req.query.imgType) {
            console.log(req.query.imgType);
            build.push('itp:'+req.query.imgType);
           
        }
        req.query.color = "gray";
        if (req.query.color) {
            build.push('ic:'+req.query.color);
        }
        build = build.length > 1 ? build.join(',') : build[0];
        search_base += '&tbs='+build;
        var URL = search_base.replace('%', encodeURIComponent(req.query.searchKey))
        return rp(URL)
            .then(function(html) {
                var $ = cheerio.load(html);
                var imgNodes = $('#ires td a img');
                var urls = [];
                imgNodes.map(function(imgNodeIdx) {
                    var imgNode = imgNodes[imgNodeIdx];
                    urls.push(imgNode.attribs['src']);
                });
                if(urls && urls.length>0){
                    var newImage = new ImageService({
                        keyword: req.query.searchKey,
                        imgUrls: urls.slice(0,15)

                    })
                
                    newImage.save()
                        .then(function (savedImg) {
                            return res.status(200).json({"status": "OK", "message": "Image found.", "data":urls.slice(0,15)});
                        }).catch(next)
                }else {
                    return res.status(404).json({"status": "NOT FOUND", "message": "No images found."});
                }

            }).catch(next);


    }
