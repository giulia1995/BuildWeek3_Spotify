import { editJumbotron } from "./Components.js";
document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const idArtist = params.get("id");
  const tipo = "artist";
  editJumbotron(idArtist, tipo);
});
