let deppURL = "https://imdb-api.com/en/API/Name/k_08e2ou23/nm0000136";
let heardURL = "https://imdb-api.com/en/API/Name/k_08e2ou23/nm1720028";

window.onload = init;

const dummyData = [
  {
    description: "W. Eugene Smith",
    filmAffinity: "6.1",
    id: "tt9179096",
    imDb: "7.3",
    metacritic: "55",
    role: "Actor",
    rottenTomatoes: "78",
    theMovieDb: "7.0",
    title: "Minamata",
    year: "2020",
  },
  {
    description: "Hatter Tarrant Hightopp",
    filmAffinity: "5.4",
    id: "tt2567026",
    imDb: "6.1",
    metacritic: "34",
    role: "Actor",
    rottenTomatoes: "28",
    theMovieDb: "6.5",
    title: "Alice Through the Looking Glass",
    year: "2016",
  },
];
function init() {
  // fetchMovieList(deppURL);
  // fetchMovieList(heardURL);
  // buildTable(fetchMovieList(deppURL), "depp-table");
  // buildTable(fetchMovieList(heardURL), "heard-table");
}

function buildTable(data, targetId) {
  let targetEle = document.getElementById(targetId);

  for (let i = 0; i < data.length; i++) {
    let movie = data[i];
    let newRow = document.createElement("tr");
    newRow.className = "text-end";
    newRow.innerHTML = `
      <th scope="row">${movie.year}</th>
      <td>${movie.title}</td>
      <td>${movie.imDb}</td>
      <td>${movie.metacritic}%</td>
      <td>${movie.rottenTomatoes}%</td>
      <td>${movie.theMovieDb}</td>
      <td>${movie.filmAffinity}</td>`;

    targetEle.childNodes[3].appendChild(newRow);
  }
}

async function fetchMovieList(path) {
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
      if (castMovies[i].role == "Actor" || castMovies[i].role == "Actress") {
        let movieId = castMovies[i].id;
        const ratingPromise = getRatings(movieId);
        ratingPromise.then((result) => {
          let movie = castMovies[i];
          movie["imDb"] = result["imDb"];
          movie["metacritic"] = result["metacritic"];
          movie["theMovieDb"] = result["theMovieDb"];
          movie["rottenTomatoes"] = result["rottenTomatoes"];
          movie["filmAffinity"] = result["filmAffinity"];

          moviesArray.push(movie);
        });
      }
    }
    // console.log(moviesArray);
    return moviesArray;
  } catch (error) {
    console.log(error);
  }
}

async function getRatings(movieId) {
  let movieRatingURL = "https://imdb-api.com/en/API/Ratings/k_08e2ou23/".concat(
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
