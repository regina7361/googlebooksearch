import axios from "axios";

export default {
  // Gets all books
  findAll: function(searchInput) {
    return axios
      .get(`/api/search?searchInput=${searchInput}`)
      .catch(err => console.error(err));
  },
  findOne: function(volumeID) {
    return axios
      .get(`/api/search/findOne?volumeID=${volumeID}`)
      .catch(err => console.error(err));
  }
};