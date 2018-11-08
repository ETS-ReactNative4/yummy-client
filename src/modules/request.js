const url = "http://localhost:8000/api/v1/";
const axios = require("axios");

/*
 * Requests all recipes data
 * @param {object} options - specifics to search for (title, author... etc.)
 */
export function getAllRecipes(options, searchTerm=null) {
  let urlExtension = "?fields=";
  urlExtension = urlExtension += buildUrl(options, searchTerm);

  return new Promise((resolve, reject) => {
    axios.get(url + "all" + urlExtension).then(response => {
      resolve(response.data);
    }).catch(err => {
      console.log(err);
      reject(err);
    });
  });
}

function buildUrl(options=[], searchTerm=null) {
  let url = "";

  options.forEach(option => {
    url += "," + option;
  });

  if (searchTerm) {
    url += options && searchTerm ? "&" : "?";
    url += "search=" + searchTerm;
  }

  return url;
}

/*
 * Request data for a specific recipe
 * @param {string} id - id of the recipe
 */
export function getRecipe(id) {
  return new Promise((resolve, reject) => {
    axios.get(url + "recipe?id=" + id).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err);
    });
  });
}

/*
 * Request for all comments related to a recipe
 * @param {string} id - id of the recipe commenting on
 */
export function getComments() {
  return new Promise((resolve, reject) => {
    axios.get(url + "comment").then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err);
    });
  });
}

/*
 * Requests for comment to be added to recipe
 * @param {object} comment - contains recipe id, user id and content
 */
export function comment(comment) {
  const urlExtension = `comment/${comment.id}/${comment.uid}/${comment.content}`;
  const data = {
    id: comment.id,
    uid: comment.uid,
    content: comment.content
  };

  return new Promise((resolve, reject) => {
    axios.post(url + urlExtension, data).then(response => {
      resolve(response);
    }).catch(err => {
      reject(err);
    });
  });
}

/*
 * Request for user to be added to database
 * @param {object} user - has username, email and password
 * @param {function} callback
 */
export function register(user) {
  const urlExtension = `register/${user.email}/${user.username}/${user.password}`;

  return new Promise((resolve, reject) => {
    axios.post(url + urlExtension, comment).then(response => {
      resolve(response);
    }).catch(err => {
      reject(err);
    });
  });
}

export function addRecipe(recipe) {
  console.log("Trying to add recipe");
  console.log(recipe);
  const urlExtension = "recipe";

  return new Promise((resolve, reject) => {
    axios.post(url + urlExtension, recipe).then(response => {
      resolve(response);
    }).catch(err => {
      reject(err);
    });
  });
}

/*
 * Throws error if response is not valid
 * @param {object} response - response form a fetch request
function handleError(response) {
  console.log("Handling");
  if (!response.ok) {
    console.log("Throwing new error");
    throw new Error(response.statusText);
  }
  return response;
}
*/
