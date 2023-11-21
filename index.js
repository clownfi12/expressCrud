console.log("hi");

const op = require('./operation');



var data = process.argv;
var record = data.slice(2);
var a = parseInt(record[0]);
var b = parseInt(record[1]);
var choice = record[2];

switch(choice)
{
    case '+':
        console.log(op.add(a,b));
         break;
    case '-':
        console.log(op.sub(a,b));
        break;
}
