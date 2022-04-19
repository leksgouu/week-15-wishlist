const { json } = require("body-parser");
const fs = require(`fs`);
const path = require(`path`);
const filepath = path.join(path.dirname(require.main.filename), `data`, `wishes.json`);

module.exports = class wish {
    constructor(wish){
       this.description = wish; 
    }

    saveWish(){
        fs.readFile(filepath,(error, filecontent)=>{
            let wishes = [];

            if(!error){
                wishes = JSON.parse(filecontent);

            }else{
                console.log(error);
            }

            wishes.push(this);

            fs.writeFile(filepath, JSON.stringify(wishes), (error) =>{
                if(!error){
                    console.log(`wish saved`);
                }else{
                    console.log(error);
                };
        
            });

        });
    }
 
    static fetchAllWishes(callBack){
        fs.readFile(filepath, (error, filecontent) =>{
            if(error){
                callBack([]);
            };
            
            callBack(JSON.parse(filecontent));
        });

    }
}