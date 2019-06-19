import axios from "axios";

export default {
  saveOne: function(book) {
    const {
      id,
      volumeInfo: { title }
    } = book;
    return axios
      .post(`/db/save?title=${title}&bookID=${id}`)
      .catch(err => console.error(err));
  },
  getAll: function() {
    return axios.get("/db/getAll").catch(err => console.error(err));
  },
  deleteOne: function(bookID) {
    return axios
      .delete(`/db/deleteOne?bookID=${bookID}`)
      .catch(err => console.error(err));
  }
};