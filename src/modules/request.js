const url = "http://localhost:8000/api/v1/";
const axios = require("axios");

/*
 * Requests all recipes data
 * @param {object} options - specifics to search for (title, author... etc.)
 */
export function getAllRecipes(options, searchTerm=null) {
  let urlExtension = "?fields=";
  if (options) {
    options.forEach(option => {
      urlExtension += "," + option;
    });
  }

  if (searchTerm) {
    urlExtension += (options && searchTerm) ? "&" : "?";
  }

  if (searchTerm) {
    urlExtension += "search=" + searchTerm;
  }

  return new Promise((resolve, reject) => {
    axios.get(url + "all" + urlExtension).then(response => {
      resolve(response.data);
    }).catch(err => {
      console.log(err);
      reject(err);
    });
  });
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
export function getComments(id) {
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
  let urlExtension = `comment/${comment.id}/${comment.uid}/${comment.content}`;
  let data = {
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
  let urlExtension = `register/${user.email}/${user.username}/${user.password}`;

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
  let urlExtension = `recipe`;

  return new Promise((resolve, reject) => {
    axios.post(url + urlExtension, recipe).then(response => {
      resolve(response);
    }).catch(err => {
      reject(err);
    });
  });
}

/*
 * Returns POST header containing body object
 * @param {object} data
 */
function getPostOptions(data) {
  return {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json; charset=utf-8"
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  };
}


/*
 * Throws error if response is not valid
 * @param {object} response - response form a fetch request
 */
function handleError(response) {
  console.log("Handling");
  if (!response.ok) {
    console.log("Throwing new error");
    throw new Error(response.statusText);
  }
  return response;
}
