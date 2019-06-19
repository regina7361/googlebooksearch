const axios = require("axios");
require("dotenv").config();
// Defining methods for the searchController
module.exports = {
  searchAllBooks: function(req, resp) {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          req.query.searchInput
        }&key=${process.env.GOOGLE_API}`
      )
      .then(results => {
        resp.json(results.data.items);
      })
      .catch(err => console.log(err));
  },
  searchOneBook: function(req, resp) {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${req.query.volumeID}`)
      .then(results => {
        resp.json(results.data);
      })
      .catch(err => console.log(err));
  }
};