const {cardsContent, str, queries} = require("../stored-obj-and-arr");

const showLinks = () => {
  for (let i = 0; i < str.nav.length; i++) {
    queries.links[i].innerText = `${str.nav[i]}`;
  }
};

const showBio = () => {
  queries.bioTitle.innerText = str.bio.title;
  queries.bio.innerText = str.bio.text;
};

const populateCards = () => {
  let cards = "";
  for (let i = 0; i < cardsContent.length; i++) {
    cards += `<div class='card'><h4>${cardsContent[i].title}</h4>
          <img src=${cardsContent[i].img} alt="javascript_abbreviation_image" class="skill-img" />
          <a href=${cardsContent[i].link}>
            <span>${str.cardLinkTitle} <span style="color:red; ">${str.cardLinkIcon}</span></span>
          </a></div>`;
  }
  queries.cards.innerHTML = cards;
};

module.exports = { showLinks, populateCards, showBio };
