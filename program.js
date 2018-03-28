//console.log("HELLO WORLD");

//EXERCISE 2
//console.log(process.argv);

//var result = 0;
//
//for (var i = 2; i < process.argv.length; i++) {
//    result += Number(process.argv[i]);
//};
//
//    console.log(result);


//Exercise 3

//var fs = require('fs');
//
//var path = process.argv[2];
//
//var buffer = fs.readFileSync(path);
//
//var string = buffer.toString();
//
//var splitString = string.split('\n');
//
//var numOfLines = splitString.length - 1;
//
//console.log(numOfLines);




//Exercise 4

//var fs = require('fs');
//
//var path = process.argv[2];
//
//fs.readFile(path, function(err, data) {
//    var numOfLines = data.toString().split('\n').length - 1;
//    console.log(numOfLines);
//})




//Exercise 5



//var fs = require('fs')
//var path = require('path')
//
//fs.readdir(process.argv[2], function (err, list) {
//  list.forEach(function (file) {
//    if (path.extname(file) === '.' + process.argv[3])
//      console.log(file)
//  })
//})



//Exercise 6


var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}























