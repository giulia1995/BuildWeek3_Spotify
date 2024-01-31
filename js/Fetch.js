export const fetchGet = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response.json();
  } catch (e) {
    console.error("Si è verificato un errore: ", e);
  }
};
