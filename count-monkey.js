// recieve number of monkeys
// Loop Of The Number But Start from 1
// push new number in array
function countMonkey(n){
    let newArr = [];
    for(let i = 1; i <= n; i++ ){
        newArr.push(i)
    }
    return newArr;
}


console.log(countMonkey(0))