// function exclamation(word){
//     return word[0] === "!"? word : word.replace("!", "") 
// }
function exclamation(word){
    let reg = /!/
    return reg.test(word)
}

console.log(exclamation("Hello!"))
console.log(exclamation("!Helo"))

