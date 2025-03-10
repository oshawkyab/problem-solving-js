function math(op, value1, value2) {
  //   switch (op) {
  //     case "+":
  //       return value1 + value2;

  //     case "-":
  //       return value1 - value2;

  //     case "*":
  //       return value1 * value2;

  //     case "/":
  //       return value1 / value2;

  //     default:
  //       return "Operation Is Not Correct";
  //   }
  return eval(value1 + op + value2);
}

console.log(math("/", 2, 5));
