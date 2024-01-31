import { fetchGet } from "./Fetch.js";
//https://striveschool-api.herokuapp.com/api/deezer/serach?q={query}
const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

document.addEventListener("DOMContentLoaded", async () => {
  let result;

  result = await fetchGet(url);
});
