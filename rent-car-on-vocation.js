function rent(day) {
  let price = 40 * day;

  return day < 3
    ? price + " $"
    : day >= 7
    ? price - 50 + " $ discount 50$"
    : price - 20 + " $";
}

console.log(rent(5));
