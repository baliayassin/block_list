
/*
module.exports = {
    getAll:()=>{
        return data;
    },
    
    getblockbyID:(id)=>{
        let result = false;
        for(let i in data.block){
            var cat = data.block[i];
        if(cat.id==id){
            result = true;
            return({"name": cat.name});
        }
    }
    if(!result)
        return ({"Error":"Not Found"});
    },
    search:(id,name)=>{
        let result = false;
        for(let i in data.block){
            var cat = data.block[i];
        if(cat.id==id && cat.name==name){
            result = true;
            return({
                "name": cat.name,
                "age":cat.age,
            });
        }
    }
    if(!result)
        return ({"Error":"Not Found"});
    },
}

*/