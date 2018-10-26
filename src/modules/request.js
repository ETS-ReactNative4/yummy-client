const url = "http://localhost:8000/api";

export function getAllRecipes(callback) {
  fetch(url + "/all")
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

export function getRecipe(id, callback) {
  fetch(url + "/recipe?id=" + id)
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
