const Book = require("../models/Book");
// Defining methods for the searchController
module.exports = {
  saveOne: async function(req, resp) {
    try {
      const { title, bookID } = req.query;
      const newBook = {
        title,
        bookID
      };

      const results = await new Book(newBook).save();
      resp.json(results);
    } catch (err) {
      console.log(err);
    }
  },
  getAll: async function(req, resp) {
    try {
      const results = await Book.find();
      resp.json(results);
    } catch (err) {
      console.error(err);
    }
  },
  deleteOne: async function(req, resp) {
    try {
      await Book.deleteOne({
        bookID: req.query.bookID
      });
      resp.status(200).send("DELETED");
    } catch (err) {
      console.error(err);
    }
  }
};