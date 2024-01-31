let url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=`;
let urlSearch;
export { fetchGetWithQueryParam, fetchGetTrackList };
const fetchGetWithQueryParam = async (query) => {
  try {
    urlSearch = "";
    urlSearch = url + query;
    const response = await fetch(urlSearch, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    query = "";

    return response.json();
  } catch (e) {
    console.error("Si è verificato un errore: ", e);
  }
};

const fetchGetTrackList = async (idAlbum) => {
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${idAlbum}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    return await response.json();
  } catch (e) {
    console.error("Si è verificato un errore: ", e);
  }
};
