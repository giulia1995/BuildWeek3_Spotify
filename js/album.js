import { fetchGetTrackList } from "./Fetch.js";
import { editJumbotron } from "./Components.js";
document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const idAlbum = params.get("id");

  editJumbotron(idAlbum);
});
