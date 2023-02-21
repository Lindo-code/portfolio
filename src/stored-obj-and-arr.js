const queries = {
  header: document.querySelector(".header"),
  title: document.querySelector(".title"),
  links: document.querySelectorAll(".link"),
  bioTitle: document.querySelector(".bio-title"),
  bio: document.querySelector(".bio"),
  cards: document.querySelector(".cards-container"),
};

const str = {
  nav: ["HOME", "ABOUT", "CONTACT"],
  mainTitle: "LINDO MATABANE",
  cardLinkIcon: "➜",
  cardLinkTitle: "View More",
  bio: {
    title: "WHO AM I?",
    text: "I'm an aspiring web-developer and all-round programmer, who's currently learning JavaScript for front-end development and Node.JS for back-end development, with the goal of becoming a full-stack web developer.\n\nAs someone who is highly focused and attentive to detail, I am always keen on giving each project I work on it's own unique design and even though I tend to lean more towards the design aspect of coding I'm able to appreciate the functionality that backend can offer to enhance any project.",
  },
};

const cardsContent = [
  {
    img: "./assets/icons/py.png",
    title: "PYTHON",
    link: "https://www.sololearn.com/profile/25472119",
  },
  {
    img: "./assets/icons/js.png",
    title: "JAVASCRIPT",
    link: "https://www.sololearn.com/profile/25472119",
  },
  { img: "./assets/icons/html.png", title: "HTML" },
  { img: "./assets/icons/css.png", title: "CSS" },
  { img: "./assets/icons/postgresql.jpg", title: "POSTGRESQL" },
  { img: "./assets/icons/docker.png", title: "DOCKER" },
  { img: "./assets/icons/jasmine.png", title: "JASMINE" },
  { img: "./assets/icons/git.png", title: "GIT" },
  { img: "./assets/icons/node.png", title: "NODE" },
  { img: "./assets/icons/webpack.png", title: "WEBPACK" },
];

module.exports = { cardsContent, str, queries };
