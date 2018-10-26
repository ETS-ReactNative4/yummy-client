const url = "http://localhost:8000/api/test";

export function getAllRecipes(callback) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      callback(myJson);
    })
    .catch(err => {
      console.error(err);
    });
}
