


function sequence(array){
    for(let i = 1; i < array.length; i++){
        if(array[i] - 1 !== array[i - 1])return array[i]
    }
    return null
}

console.log(sequence([1, 2, 3, 4]))