import { editJumbotron } from "./Components.js";
document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const idArtist = params.get("id");
  const artistName = params.get("artist");
  //qui sotto verifico se la localstorage "artistName" esiste o no; se non esiste. la setto xke mi serve x generare il jumbotron dell'artista che selziono dalla pagina , non tramite
  //la ricerca, quindi mi devo salvare questo parametro xke non ho una inputValue popolata.
  switch (window.localStorage.getItem) {
    case "querySearch":
      console.log("query presente");
      break;
    case "artistName":
      console.log("artist present");
      break;
  }
  //   if (!window.localStorage.getItem("artistName")) {
  //     window.localStorage.setItem("artistName", artistName);
  //}
  const query = window.localStorage.getItem("querySearch");
  window.localStorage.setItem("artistName", query);
  const tipo = "artist";
  editJumbotron(idArtist, tipo);
});
