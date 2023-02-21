const path = require("path");

module.exports = {
  mode: 'development',
  entry: { 
    index: './src/home.js',
    about: './src/about.js',
    contact: './src/contact.js',
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, "build"),
  },
};
