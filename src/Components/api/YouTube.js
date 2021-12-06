import axios from "axios";

const KEY = "AIzaSyABPvNn8wbFdqs2JaTwvDi-8z36jeaKtdU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
