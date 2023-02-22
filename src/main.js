const { copyright, scrollFunction } = require("./utils/my-functions");

window.onscroll = function () {
  scrollFunction();
};

window.onload = function () {
  copyright();
};

form.addEventListener("submit", handleSubmit);
