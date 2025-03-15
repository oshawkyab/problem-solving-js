String.prototype.cap = function () {
  return this.split()
    .map((word) => word.charAt(0).toUpperCase() + this.slice(1))
    .join();
};

function welcome(country) {
  let languages = {
    English: "Welcome",
    Arabic: "مرحبًا بك",
    Germany: "Willkommen",
    Spanish: "Bienvenido",
  };
  let lang = country.cap();
  if (languages.hasOwnProperty(lang)) {
    return languages[lang];
  } else {
    return "Welcome";
  }
}

console.log(welcome("arabic"));
