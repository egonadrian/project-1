var command = process.argv[2]
var prompt = require('prompt-sync')();
var colog = require('colog');
var final = require('./bac');


if (command === "help") {
  return console.log("This is a app is to measure your Blood Alcohol level.")
}
else if(command === "BAC"){
var usrName = prompt('What is your name?');
var gender = prompt('What is your gender?');
var w = Number(prompt('What is your Weight?'));
var a = Number(prompt('How many beers did you drink?'));
var h = Number(prompt('How many hours since your last beer?'));

console.log("Your Blood Alcohol level is: ", final(a,w,h))

if (final(a,w,h) > 0.08) {
  colog.log(colog.bgRed(usrName+": You are too drunk to drive!Pass the key!"));

}
else {
  colog.log(colog.bgGreen(usrName+": You are okay to drive!"))
}
}

module.exports = command;
