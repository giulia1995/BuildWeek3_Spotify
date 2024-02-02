export { createCard };

const containerCards = document.getElementById("containerCards");
let query = window.localStorage.getItem("querySearch");
console.log(query);
const createCard = (result) => {
  const img = result.album.cover_big;
  const title = result.album.title;
  const artist = result.artist.name;
  const idAlbum = result.album.id;

  const cardTemplate = `<div class="col-6 col-sm-6 col-md-3 col-lg-3 gy-4"><a class="text-decoration-none" href="./album.html?id=${idAlbum}&artistName=${query}"><div class="card bg-dark rounded-3 h-100" id="${idAlbum}">
                        <i class="bi bi-spotify text-secondary" id="icon"></i>
                        <img src="${img}" class="card-img-top p-3" alt="..." />
                        <div class="card-body"><h5 class="card-title text-white">${title}</h5>
                        <p class="card-text text-secondary">${artist}</p></div></div></a></div>`;

  containerCards.innerHTML += cardTemplate;
};
