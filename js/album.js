import { fetchGetTrackList } from "./Fetch.js";
import { editJumbotron } from "./Components.js";
document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const url = window.location.href;
  const artista = params.get("artistName");
  window.localStorage.setItem("artistName", artista);
  //console.log(window.localStorage.getItem("artistName"));

  //se il nostro url contiene "album" vuol dire che ci troviamo nel caso del jumbotron dell'album quindi passo idAlbum e tipo "album" x creare jumbtron album
  //altrimenti artist
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
