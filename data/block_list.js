 var mongoose = require('mongoose'),
     block_list= require('./block');

  blocklist = new mongoose.Schema({  
        "name": {type: String},
        "age": {type:Number},
        "catagory": [block_list]
 },{collection:'blocklists'} );
 var block = mongoose.model('block',blocklist);

 module.exports= block;