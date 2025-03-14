function convert(bool){
    return bool === true ? "YES" : bool === false ? "NO" : "Nothing"
}

console.log(convert(true))
console.log(convert(false))
console.log(convert("EH"))