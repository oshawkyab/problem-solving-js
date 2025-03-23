

// function search(word){
//     let chars = ['a', 'e', 'i', "u", "o"];
//     let result = [];
//     for(let i = 0; i < word.length; i++){
//         if(!chars.includes(word[i])){
//             result.push(word[i])
//         }
//     }
//     return result.join("")
// }


// -----salution 2

function search(word){
    return word.replace(/[aeiou]/ig,"")
}

console.log(search("Amir"))