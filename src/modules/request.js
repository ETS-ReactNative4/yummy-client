const url = "http://localhost:8000/api/v1/";

export function getAllRecipes(options, callback) {
  let urlExtension = "?fields=";
  if (options) {
    options.forEach(option => {
      urlExtension += "," + option;
    });
  }

  fetch(url + "all" + urlExtension)
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
  console.log(id);
  fetch(url + "recipe/?id=" + id)
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

export function getComments(id, callback) {
  fetch(url + "comment/" + id)
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

export function comment(comment, callback) {
  let urlExtension = `comment/${comment.id}/${comment.uid}/${comment.content}`;
  let data = {
    id: comment.id,
    uid: comment.uid,
    content: comment.content
  };

  fetch(url + urlExtension, getPostOptions(data)).then(response =>
    response.json()
  ); // parses response to JSON
}

export function register(user, callback) {
  let urlExtension = `register/${user.email}/${user.username}/${user.password}`;

  fetch(url + urlExtension, getPostOptions(user)).then(response => {
    response.json().then(data => {
      callback(data);
    });
  });
}

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
