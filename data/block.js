var mongoose = require('mongoose');

Block = new mongoose.Schema(  
    
     
        {
            "cat":{type: String},
            "Block":{type:Boolean},
            "why": {type:String}
        }            
    
);

module.exports = Block;