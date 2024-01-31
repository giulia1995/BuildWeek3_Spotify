export { createCard };

const containerCards = document.getElementById("containerCards");

const createCard = (result) => {
  const img = result.album.cover_big;
  const title = result.album.title;
  const artist = result.artist.name;
  const idAlbum = result.album.id;

  const cardTemplate = `<div class="col-lg-3 gy-4"><a class="text-decoration-none" href="./album.html?id=${idAlbum}"><div class="card bg-dark rounded-3 h-100" id="${idAlbum}">
                        <i class="bi bi-spotify text-secondary" id="icon"></i>
                        <img src="${img}" class="card-img-top p-3" alt="..." />
                        <div class="card-body"><h5 class="card-title text-white">${title}</h5>
                        <p class="card-text text-secondary">${artist}</p></div></div></a></div>`;

  containerCards.innerHTML += cardTemplate;
};

//<div class="col">
//<a href="./album.html" target="_blank" class="text-decoration-none"></a>
