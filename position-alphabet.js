function checkAlpha(w) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return `Position Of ${w} : ${alphabet.indexOf(w.toLowerCase()) + 1}`;
}

console.log(checkAlpha("B"));
