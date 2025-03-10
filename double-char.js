// repeat char twice Ex: Om => OOmm

function doubleChar(str){
    return Array.from(str).map(e => e + e).join("")
}

console.log(doubleChar("omar"))