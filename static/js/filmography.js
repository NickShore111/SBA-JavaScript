let deppURL = "https://imdb-api.com/en/API/Name/k_4fnl8773/nm0000136";
let heardURL = "https://imdb-api.com/en/API/Name/k_4fnl8773/nm1720028";

window.onload = init;

function init() {
  // fetchMovieList(deppURL, "depp-table");
  // fetchMovieList(heardURL, "heard-table");
}

async function buildTableRow(movie, targetId) {
  let targetEle = document.getElementById(targetId);
  console.log("building table row with: ");
  console.log(movie);
  let newRow = document.createElement("tr");

  newRow.innerHTML = `
        <th scope="row">${movie.year}</th>
        <td>${movie.title}</td>
        <td>${movie.imDb}</td>
        <td>${movie.metacritic}%</td>
        <td>${movie.rottenTomatoes}%</td>
        <td>${movie.theMovieDb}</td>
        <td>${movie.filmAffinity}</td>`;

  // console.log(newRow);
  targetEle.childNodes[3].appendChild(newRow);
}

async function fetchMovieList(path, targetID) {
  console.log("fetching movies");
  try {
    const res = await fetchWithTimeout(path, { timeout: 5000 }).catch((e) => {
      console.log(e);
      // createNotFound();
      return null;
    });

    if (res.status != 200) {
      console.log("status from api call: " + res.status);
      return null;
    }

    const actorDetails = await res.json();
    const castMovies = actorDetails["castMovies"];
    let moviesArray = [];

    for (let i = 0; i < castMovies.length; i++) {
      // for (let i = 0; i < 10; i++) {
      if (castMovies[i].role == "Actor" || castMovies[i].role == "Actress") {
        let movieId = castMovies[i].id;
        const result = getRatings(movieId);
        result.then((result) => {
          if (
            result["imDb"] &&
            result["metacritic"] &&
            result["theMovieDb"] &&
            result["rottenTomatoes"] &&
            result["filmAffinity"]
          ) {
            let movie = castMovies[i];
            movie["imDb"] = result["imDb"];
            movie["metacritic"] = result["metacritic"];
            movie["theMovieDb"] = result["theMovieDb"];
            movie["rottenTomatoes"] = result["rottenTomatoes"];
            movie["filmAffinity"] = result["filmAffinity"];

            buildTableRow(movie, targetID);
          }
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function getRatings(movieId) {
  let movieRatingURL = "https://imdb-api.com/en/API/Ratings/k_4fnl8773/".concat(
    movieId
  );

  let response = await fetch(movieRatingURL);
  let result = await response.json();
  return result;
}

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}
