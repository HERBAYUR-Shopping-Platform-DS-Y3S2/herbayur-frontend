import axios from 'axios';

export default axios.create({
  baseURL: "http://locahost:5003",
  headers : {
    "Content-Type": "application/json"
  }
});