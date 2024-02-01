import { fetchGetWithQueryParam, fetchGetTrackList } from "./Fetch.js";
import { createCard } from "./CardCreator.js";
export { searchEvent, editJumbotron };

const query = document.getElementById("searchValue");

const searchEvent = async () => {
  document.getElementById("containerCards").innerHTML = "";
  const searchValue = query.value;
  const result = await fetchGetWithQueryParam(searchValue);
  const { data } = result;

  const cards = data.forEach((element) => {
    createCard(element);
  });
};

const editJumbotron = async (id) => {
  const jumbotronData = await fetchGetTrackList(id);
  const { cover_medium } = jumbotronData;
  const { artist } = jumbotronData;
  const { title } = jumbotronData;
  const { label } = jumbotronData;
  const { tracks } = jumbotronData;

  const jumbotronContent = `<div class="immagine">
                            <img src="${cover_medium}" alt="" />
                            </div>
                            <div class="col title">
                            <p class="fw-bold mt-1">ALBUM</p>
                            <h1 class="fw-bold">${title}</h1>
                            <p class="fw-bold">${artist["name"]}</p>
                            <p class="fw-bold">${label}</p>
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
  addTrackList(tracks);
};

const addTrackList = (tracks) => {
  const track = tracks.data;

  track.forEach((getTrack) => {
    const getUl = document.getElementById("trackList");
    getUl.innerHTML += `<li>${getTrack.title}</li>`;
  });
};
