var fs=require("fs");
fs.readFile('welcome.txt',function(err,data){
    if(err) return console.error(err.stack);
    console.log(data.toString());
});
console.log("program ended");