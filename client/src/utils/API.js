import axios from "axios";
const BASEURL = "http://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyAqbCKQVTbfXn0WgQD89e3cbxShUvmFZm4";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
