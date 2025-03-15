// function remove(array){
//     let newArr = [];
//     for(let i = 0; i < array.length; i +=2){
//         newArr.push(array[i])
//     }
//     return newArr;
// }

function remove(array){
    return array.filter((e, i) => i % 2 === 0);
}

console.log(remove(["Omar", "Mina", "Omar", "Mina", "Karam", "Ezzat"]))