

function smash(array){
    return array.reduce((acc, current) => acc + " " + current);
}

console.log(smash(["i", "am", "Omar", "shawky"]))