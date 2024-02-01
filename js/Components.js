import { fetchGetWithQueryParam, fetchGetTrackList, fetchGetArtist } from "./Fetch.js";
import { createCard } from "./CardCreator.js";
export { searchEvent, editJumbotron };

const query = document.getElementById("searchValue");
let result;
const searchEvent = async () => {
  document.getElementById("containerCards").innerHTML = "";
  const searchValue = query.value;

  localStorage.setItem("querySearch", searchValue);
  result = await fetchGetWithQueryParam(searchValue);
  const { data } = result;

  const cards = data.forEach((element) => {
    createCard(element);
  });
};

//console.log(jumbotronData);
const editJumbotron = async (id, tipo) => {
  let jumbotronData;
  let cover_medium;
  let artist;
  let title;
  let label;
  let tracks;
  let picture_big;
  let nb_album;
  let nb_fan;
  let idArtist;
  if (tipo === "album") {
    jumbotronData = await fetchGetTrackList(id);
    cover_medium = jumbotronData.cover_medium;
    artist = jumbotronData.artist;
    title = jumbotronData.title;
    label = jumbotronData.label;
    tracks = jumbotronData.tracks;
    idArtist = jumbotronData.artist.id;
  } else {
    jumbotronData = await fetchGetArtist(id);
    picture_big = jumbotronData.picture_big;
    nb_album = jumbotronData.nb_album;
    nb_fan = jumbotronData.nb_fan;
  }

  const jumbotronContent = `<div class="immagine">
                            <img src="${tipo === "album" ? cover_medium : picture_big}" alt="" />
                            </div>
                            <div class="col title">
                            <p class="fw-bold mt-1">${tipo === "album" ? "Album" : "Artista"}</p>
                            ${tipo === "artist" ? '<a href="./album.html?id=' + artist : '<a href="./artist.html?id=' + idArtist}" class="text-decoration-none"><h1 class="fw-bold">${tipo === "album" ? artist["name"] : jumbotronData["name"]}</h1></a>
                            <h3 class="fw-bold">${tipo === "album" ? title : "Nr. Fan: " + nb_fan}</h3>
                            <p class="fw-bold">${tipo === "album" ? label : "Nr. Album: " + nb_album}</p>
                            <div class="buttons d-flex">
                            <button type="button" class="col-lg-2 col-md-2 col-sm-3 btn rounded-pill text-dark fw-bold" id="b-play">Play</button>
                            <button type="button" class="d-none d-lg-block btn rounded-pill text-white fw-bold bg-dark border" id="b-save">Salva</button>
                            <i class="d-none d-lg-block bi bi-three-dots text-secondary fw-bold" id="dots"></i>
                            </div>
                            </div>
                            <div class="position-absolute top-0 end-0">
                            <button type="button" class="d-none d-lg-block btn btn-secondary fw-bold rounded-pill text-secondary" id="hidden">NASCONDI ANNUNCI</button>
                            </div>`;
  const jumbotronEdited = document.querySelector(".jumbotron");
  jumbotronEdited.innerHTML = jumbotronContent;
  if (tipo === "album") {
    addTrackList(tracks);
  } else {
    const temp = localStorage.getItem("querySearch");
    result = await fetchGetWithQueryParam(temp);
    localStorage.removeItem("querySearch");
    const { data } = result;
    const cards = data.forEach((element) => {
      createCard(element);
    });
  }
};

const addTrackList = (tracks) => {
  const track = tracks.data;

  track.forEach((getTrack) => {
    const getUl = document.getElementById("trackList");
    getUl.innerHTML += `<li>${getTrack.title}</li>`;
  });
};
