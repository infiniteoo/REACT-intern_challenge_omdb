import axios from 'axios'
import env from "react-dotenv";

const BASEURL = env.BASEURL
const APIKEY = env.APIKEY

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    search: function(query) {
      
      return axios.get(BASEURL + query + APIKEY);
    }
  }