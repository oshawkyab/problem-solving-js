console.log(Math.pow(2, 3));

function root(array) {
  // let newArr = [];
  // for (let index = 0; index < array.length; index++) {
  //     if(Number.isInteger(Math.sqrt(array[index]))){
  //         newArr.push(Math.sqrt(array[index]))
  //     }else{
  //         newArr.push(Math.pow(array[index], 2));
  //     }
  // }
  // return newArr;
  return array.map((e) =>
    Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : Math.pow(e, 2)
  );
}
console.log(root([4, 3, 9, 7, 2, 1]));
