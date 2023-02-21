const {showLinks, showBio} = require("./utils/my-functions");
const {queries} = require("./stored-obj-and-arr");

document.addEventListener("DOMContentLoaded", () => {
  queries.title.innerText = "LINDO MATABANE";
  showLinks();
  showBio();
});
