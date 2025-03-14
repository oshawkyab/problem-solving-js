function removeSpaces(str){
    return str.split(" ").reduce((e, c) => e + c)
}

console.log(removeSpaces("Om R  2190381293 wijadioj"))