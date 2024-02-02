import { fetchGetWithQueryParam, fetchGetTrackList, fetchGetArtist } from "./Fetch.js";
import { createCard } from "./CardCreator.js";
export { searchEvent, editJumbotron, casualElementsIndex };

const query = document.getElementById("searchValue");
let result;
let artistName;
const searchEvent = async (name) => {
  localStorage.setItem("artistName", name); //settato per l'utilizzo dentro editJumbotron per il richiamo
  localStorage.setItem("querySearch", query.value); //settato per l'utilizzo dell'editJumbo con search
  document.getElementById("containerCards").innerHTML = "";
  const searchValue = query.value;

  result = await fetchGetWithQueryParam(searchValue);
  const { data } = result;

  const cards = data.forEach((element) => {
    createCard(element);
  });
};

//funzione unica per generare jumbotrono a seconda della pagina; piu sotto ci sono delle valutazioni se il tipo jumbotrono sara x albumo o per artista
const editJumbotron = async (id, tipo) => {
  let artistName;
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
    idArtist = jumbotronData.id;
    artistName = jumbotronData.name;
    picture_big = jumbotronData.picture_big;
    nb_album = jumbotronData.nb_album;
    nb_fan = jumbotronData.nb_fan;
  }

  const jumbotronContent = `<div class="immagine">
                            <img src="${tipo === "album" ? cover_medium : picture_big}" alt="" />
                            </div>
                            <div class="col title">
                            <p class="fw-bold mt-1">${tipo === "album" ? "Album" : "Artista"}</p>
                            ${tipo === "artist" ? '<a href="#' : '<a href="./artist.html?id=' + idArtist + "&artist=" + artistName}" class="text-decoration-none"><h1 class="fw-bold">${tipo === "album" ? artist["name"] : jumbotronData["name"]}</h1></a>
                            <h3 class="fw-bold">${tipo === "album" ? title : "Nr. Fan: " + nb_fan}</h3>
                            <p class="fw-bold">${tipo === "album" ? label : "Nr. Album: " + nb_album}</p>
                            <div class="buttons d-flex">
                             ${
                               tipo === "album"
                                 ? '<button type="button" class="col-lg-2 col-md-2 col-sm-3 btn rounded-pill text-dark fw-bold" id="b-play">Play</button>' + '<button type="button" class="d-none d-lg-block btn rounded-pill text-white fw-bold bg-dark border" id="b-save">Salva</button>'
                                 : '<button type="button" class="d-none d-lg-block btn rounded-pill text-white fw-bold bg-dark border" id="b-save">Segui</button>'
                             }
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
  } else if (tipo === "artist") {
    const temp = window.localStorage.getItem("artistName");
    if (temp === null) temp = window.localStorage.getItem("querySearch");
    //uso la local storage memorizzata x simulare un query search value
    result = await fetchGetWithQueryParam(temp);
    const { data } = result;

    const cards = data.forEach((element) => {
      createCard(element);
    });
    // window.localStorage.removeItem("artistName");
    // window.localStorage.removeItem("querySearch");
  }
};

//function x la tracklist
const addTrackList = (tracks) => {
  const track = tracks.data;

  track.forEach((getTrack) => {
    let index = track.indexOf(getTrack);
    const getUl = document.getElementById("trackList");
    getUl.innerHTML += `<li>${index + 1} - ${getTrack.title}</li>`;
  });
};

//mi pesco oggetto casuale dall'array che gli passo da index x creazione jmbotron causale iniziale
const casualElementsIndex = (list) => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};
