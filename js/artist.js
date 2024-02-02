import { editJumbotron } from "./Components.js";
document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const idArtist = params.get("id");
  const artistName = params.get("artist");
  //qui sotto verifico se la localstorage "artistName" esiste o no; se non esiste. la setto xke mi serve x generare il jumbotron dell'artista che selziono dalla pagina , non tramite
  //la ricerca, quindi mi devo salvare questo parametro xke non ho una inputValue popolata.
  if (!window.localStorage.getItem("artistName")) {
    window.localStorage.setItem("artistName", artistName);
  }
  console.log("hai la mamma puttana");
  const tipo = "artist";
  editJumbotron(idArtist, tipo);
});
