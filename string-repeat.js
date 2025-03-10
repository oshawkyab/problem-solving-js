// function repeat(content.repeat(number of repeat)) first Method
// second method for loop
function repeatString(num, str) {
let newString = '';
for (let index = 0; index < num; index++) {
     newString += str
}
return newString
}

console.log(repeatString(3, "Hello"));
