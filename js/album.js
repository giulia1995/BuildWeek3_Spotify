import { fetchGetTrackList } from "./Fetch.js";
import { editJumbotron } from "./Components.js";
document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const url = window.location.href;

  if (url.includes("album")) {
    const idAlbum = params.get("id");
    const tipo = "album";
    editJumbotron(idAlbum, tipo);
  } else {
    const idArtist = params.get("id");
    const tipo = "artist";
    editJumbotron(idArtist, tipo);
  }
});
