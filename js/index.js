import { searchEvent, editJumbotron, casualElementsIndex } from "./Components.js";
const musicArtists = [
  {
    id: 13,
    name: "Eminem",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
    type: "index",
  },
  {
    id: 412,
    name: "Queen",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/1ab642216454f5e5e02c234f93af481c/250x250-000000-80-0-0.jpg",
    type: "index",
  },
  {
    id: 1309,
    name: "Jay-Z",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/90fab088c4d091618e7386f688803673/250x250-000000-80-0-0.jpg",
    type: "index",
  },
  {
    id: 2296,
    name: "Giorgia",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/9459140baa3a5ba7769522896ca0ccf9/250x250-000000-80-0-0.jpg",
    type: "index",
  },
  {
    id: 719,
    name: "Bob Marley & The Wailers",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/c8241e15efdefa9465c7b470643efb3b/250x250-000000-80-0-0.jpg",
    type: "index",
  },
];

document.addEventListener("DOMContentLoaded", async () => {
  const searchButton = document.getElementById("searchButton");
  const searchTextArea = document.getElementById("searchValue");
  const casual = casualElementsIndex(musicArtists); //mi prendo l'oggetto casuale da mostrae all'apertura della pagina
  localStorage.setItem("artistName", casual.name); //settato nel caso in cui clicco sull'artista che compare nel jumbotron, lo riutilizzerò in editJumbotron(), dove lo svuoterò anche

  editJumbotron(casual.id, casual.type);

  searchButton.addEventListener("click", searchEvent);
  searchTextArea.addEventListener("keyup", (ev) => {
    if (ev.key === "Enter") searchEvent();
  });
});
