import { fetchGetWithQueryParam, fetchGetTrackList } from "./Fetch.js";
import { createCard } from "./CardCreator.js";
import { searchEvent, editJumbotron } from "./Components.js";
//https://striveschool-api.herokuapp.com/api/deezer/serach?q={query}
const musicArtists = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    cover: "url_abbey_road.jpg",
  },
  {
    artist: "Michael Jackson",
    title: "Thriller",
    cover: "url_thriller.jpg",
  },
  {
    artist: "Queen",
    title: "A Night at the Opera",
    cover: "url_a_night_at_the_opera.jpg",
  },
  {
    artist: "Bob Marley",
    title: "Legend",
    cover: "url_legend.jpg",
  },
  {
    artist: "Elvis Presley",
    title: "Elvis Presley",
    cover: "url_elvis_presley.jpg",
  },
  {
    artist: "Madonna",
    title: "Like a Virgin",
    cover: "url_like_a_virgin.jpg",
  },
  {
    artist: "Pink Floyd",
    title: "The Dark Side of the Moon",
    cover: "url_dark_side_of_the_moon.jpg",
  },
  {
    artist: "David Bowie",
    title: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
    cover: "url_ziggy_stardust.jpg",
  },
  {
    artist: "Prince",
    title: "Purple Rain",
    cover: "url_purple_rain.jpg",
  },
  {
    artist: "Led Zeppelin",
    title: "IV",
    cover: "url_led_zeppelin_iv.jpg",
  },
];

document.addEventListener("DOMContentLoaded", async () => {
  const searchButton = document.getElementById("searchButton");
  const searchTextArea = document.getElementById("searchValue");

  searchButton.addEventListener("click", searchEvent);
  searchTextArea.addEventListener("keyup", (ev) => {
    if (ev.key === "Enter") searchEvent();
  });
});
