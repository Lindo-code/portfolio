const { cardsContent, str, queries } = require("../stored-obj-and-arr");

const copyright = () => {
  const date = new Date();
  const currYear = date.getFullYear();
  const str = `${currYear}`;
  queries.year.innerText = str;
};

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

const addAddress = () => {
  queries.address.innerText = str.address;
}

const scrollFunction = () => {
  (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? query.scrollBtn.style.display = "block" : query.scrollBtn.style.display = "none";
};

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: queries.form.method,
    body: data,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        queries.status.innerHTML = "Thanks for your submission!";
        queries.form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            queries.status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            queries.status.innerHTML =
              "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      queries.status.innerHTML =
        "Oops! There was a problem submitting your form";
    });
};

module.exports = { showLinks, populateCards, showBio, handleSubmit, copyright, scrollFunction, addAddress };
