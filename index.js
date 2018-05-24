

      var     express = require ('express'),
              mongooes= require('mongoose'),      
              app = express(),
              bodyParser = require('body-parser'),
              port = process.env.PORT || 3000,
              func = require("./data/functions"),
              consts = require('./consts'),
              Blocks = require("./data/block_list"),
              morgan=require('morgan');
      app.use(bodyParser.urlencoded({ extended:true }));
      app.use('/assets', express.static(`${__dirname}/public`));
      app.use(morgan());

      mongooes.connect(consts.MLAB_KEY);
      
      

  app.get('/getAll',
  (req,res,next)=>{
      Blocks.find({},(err,block_list)=>{
        if(err){
            console.log(`connection error${err}`);
        } 
       // res.status(200).json(result);
       console.log(block_list);
       res.json(block_list);
    });
      
    
  });

  
  app.post('/getblockbyName',
  (req,res,next)=>{
      //res.status(200).json(func.getbyID(req.params.name));
      var name1=req.body.name;
      Blocks.find({name:req.body.name},(err,block_list)=>{
        if(err){
            console.log(`connection error${err}`);
        } 
       // res.status(200).json(result);
       console.log(block_list);
       console.log(name1);
       res.json(block_list);
    });
       
});
  
  app.get('/search/:name/:why',
  (req,res)=>{
     
    Blocks.find({name:req.params.name}, {catagory: { $elemMatch : { why:req.params.why}}},(err,block_list)=>{
        if(err){
            console.log(`connection error${err}`);
        } 
       // res.status(200).json(result);
       console.log(block_list);
       res.json(block_list);
    });

     // res.status(200).json(func.search(req.params.id,req.params.name));
  });  

  app.all('*',
  (req,res)=>{
     // console.log('Input');
      res.sendFile(`${__dirname}/home.html`);
  });

app.listen(port,()=>{
  console.log(`listening port : ${port}`);
});


