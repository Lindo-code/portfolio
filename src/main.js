const { copyright, scrollFunction, addAddress } = require("./utils/my-functions");

window.onscroll = function () {
  scrollFunction();
};

window.onload = function () {
  copyright();
  addAddress();
};

form.addEventListener("submit", handleSubmit);
