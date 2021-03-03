import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200";
// const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
      console.log(query);
    return axios.get(BASEURL + query);
  }
};
