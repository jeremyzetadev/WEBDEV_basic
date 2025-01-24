const fs = require('fs');
const path = require('path');

/* fs.readFile("./files/starter.txt",'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
}) */
    

fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})



fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice to meet you.',(err,data)=>{
    if(err) throw err;
    console.log('Write complete');
})



fs.appendFile(path.join(__dirname,'files','test.txt'),'Testing text.',(err,data)=>{
    if(err) throw err;
    console.log('append complete');
})