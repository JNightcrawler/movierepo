const express =require('express');
var app = express();
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, './dist/movierepo/');
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});
app.use(express.static('./dist/movierepo'))
console.log(__dirname);
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname,'./dist/movierepo/index.html'));

});

console.log('port--->'+process.env.PORT);

app.listen(process.env.PORT || 8080,function(){
console.log('app started');
});