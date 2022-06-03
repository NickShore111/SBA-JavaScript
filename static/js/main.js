"use strict";
console.log("main.js loaded");
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

window.onload = init;
// var api_return_object = {
//   id: "nm0000136",
//   name: "Johnny Depp",
//   role: "Actor, Producer, Soundtrack",
//   image:
//     "https://imdb-api.com/images/original/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_Ratio0.7003_AL_.jpg",
//   summary:
//     "Johnny Depp is perhaps one of the most versatile actors of his day and age in Hollywood. He was born John Christopher Depp II in Owensboro, Kentucky, on June 9, 1963, to Betty Sue (Wells), who worked as a waitress, and John Christopher Depp, a civil engineer. Depp was raised in Florida. He dropped out of school when he was 15, and fronted a series ...",
//   birthDate: "1963-06-09",
//   deathDate: null,
//   awards: "Nominated for 3 Oscars. Another 81 wins & 151 nominations.",
//   height: "5' 10\" (1.78 m)",
//   knownFor: [
//     {
//       id: "tt0408236",
//       title: "Sweeney Todd: The Demon Barber of Fleet Street",
//       fullTitle: "Sweeney Todd: The Demon Barber of Fleet Street (2007)",
//       year: "2007",
//       role: "Sweeney Todd",
//       image:
//         "https://imdb-api.com/images/original/MV5BMTg3NjUxMzM5NV5BMl5BanBnXkFtZTcwMzQ1NjQzMw@@._V1_Ratio0.6852_AL_.jpg",
//     },
//     {
//       id: "tt0325980",
//       title: "Pirates of the Caribbean: The Curse of the Black Pearl",
//       fullTitle:
//         "Pirates of the Caribbean: The Curse of the Black Pearl (2003)",
//       year: "2003",
//       role: "Jack Sparrow",
//       image:
//         "https://imdb-api.com/images/original/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6852_AL_.jpg",
//     },
//     {
//       id: "tt0449088",
//       title: "Pirates of the Caribbean: At World's End",
//       fullTitle: "Pirates of the Caribbean: At World's End (2007)",
//       year: "2007",
//       role: "Jack Sparrow",
//       image:
//         "https://imdb-api.com/images/original/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_Ratio0.6852_AL_.jpg",
//     },
//     {
//       id: "tt0367594",
//       title: "Charlie and the Chocolate Factory",
//       fullTitle: "Charlie and the Chocolate Factory (2005)",
//       year: "2005",
//       role: "Willy Wonka",
//       image:
//         "https://imdb-api.com/images/original/MV5BNjcxMjg1Njg2NF5BMl5BanBnXkFtZTcwMjQ4NzMzMw@@._V1_Ratio0.6852_AL_.jpg",
//     },
//   ],
//   castMovies: [
//     {
//       id: "tt17277414",
//       role: "Actor",
//       title: "Jeanne du Barry",
//       year: "",
//       description: "(pre-production) Louis XV",
//     },
//     {
//       id: "tt12874990",
//       role: "Actor",
//       title: "Puffins",
//       year: "",
//       description:
//         "(TV Mini Series short) (filming) Johnny Puff - Let's Dance ... Johnny Puff - Fishing Competition ... Johnny Puff - Whistle it off ... Johnny Puff - A very special band ... Johnny Puff - Tac's glasses ... Johnny Puff Show all 70 episodes",
//     },
//     {
//       id: "tt18330034",
//       role: "Actor",
//       title: "Puffins Impossible",
//       year: "2021-2022",
//       description:
//         "(TV Mini Series) Johnny Puff - Otto Mom Walrus (2022) ... Johnny Puff - Something's Fishy (2022) ... Johnny Puff - Nothing but Treble (2022) ... Johnny Puff - The Magic Box (2022) ... Johnny Puff - Otto Needs Friends (2022) Show all 21 episodes",
//     },
//     {
//       id: "tt20159048",
//       role: "Actor",
//       title: "Jeff Beck & Johnny Depp: Isolation",
//       year: "2020",
//       description: "(Music Video short) Johnny Depp",
//     },
//     {
//       id: "tt9179096",
//       role: "Actor",
//       title: "Minamata",
//       year: "2020",
//       description: "W. Eugene Smith",
//     },
//     {
//       id: "tt20227400",
//       role: "Actor",
//       title: "Hollywood Vampires: I Want My Now",
//       year: "2019",
//       description: "(Music Video short) Johnny Depp",
//     },
//     {
//       id: "tt6149154",
//       role: "Actor",
//       title: "Waiting for the Barbarians",
//       year: "2019",
//       description: "Colonel Joll",
//     },
//     {
//       id: "tt20201200",
//       role: "Actor",
//       title: "Hollywood Vampires: Heroes",
//       year: "2019",
//       description: "(Music Video short) Johnny Depp",
//     },
//     {
//       id: "tt2677722",
//       role: "Actor",
//       title: "City of Lies",
//       year: "2018",
//       description: "Russell Poole",
//     },
//     {
//       id: "tt4123430",
//       role: "Actor",
//       title: "Fantastic Beasts: The Crimes of Grindelwald",
//       year: "2018",
//       description: "Grindelwald",
//     },
//     {
//       id: "tt6865690",
//       role: "Actor",
//       title: "The Professor",
//       year: "2018/I",
//       description: "Richard",
//     },
//     {
//       id: "tt1273221",
//       role: "Actor",
//       title: "London Fields",
//       year: "2018",
//       description: "Chick Purchase (uncredited)",
//     },
//     {
//       id: "tt8925680",
//       role: "Actor",
//       title: "Dior: Sauvage - Legend of the Magic Hour",
//       year: "2018",
//       description: "(Video short) Man",
//     },
//     {
//       id: "tt2296777",
//       role: "Actor",
//       title: "Sherlock Gnomes",
//       year: "2018",
//       description: "Sherlock Gnomes (voice)",
//     },
//     {
//       id: "tt7634200",
//       role: "Actor",
//       title: "Marilyn Manson: Kill4Me",
//       year: "2017",
//       description: "(Music Video short) Man",
//     },
//     {
//       id: "tt3402236",
//       role: "Actor",
//       title: "Murder on the Orient Express",
//       year: "2017",
//       description: "Edward Ratchett",
//     },
//     {
//       id: "tt7492974",
//       role: "Actor",
//       title: "Marilyn Manson: Say10",
//       year: "2017",
//       description: "(Music Video short) Abel",
//     },
//     {
//       id: "tt1790809",
//       role: "Actor",
//       title: "Pirates of the Caribbean: Dead Men Tell No Tales",
//       year: "2017",
//       description: "Captain Jack Sparrow",
//     },
//     {
//       id: "tt6244528",
//       role: "Actor",
//       title: "The Black Ghiandola",
//       year: "2017",
//       description: "(Short) Nuclear Med Tech",
//     },
//     {
//       id: "tt3183660",
//       role: "Actor",
//       title: "Fantastic Beasts and Where to Find Them",
//       year: "2016",
//       description: "Grindelwald",
//     },
//     {
//       id: "tt2567026",
//       role: "Actor",
//       title: "Alice Through the Looking Glass",
//       year: "2016",
//       description: "Hatter Tarrant Hightopp",
//     },
//     {
//       id: "tt5456120",
//       role: "Actor",
//       title: "Donald Trump's The Art of the Deal: The Movie",
//       year: "2016",
//       description: "(TV Movie) Donald J. Trump",
//     },
//     {
//       id: "tt3838992",
//       role: "Actor",
//       title: "Yoga Hosers",
//       year: "2016",
//       description: "Guy Lapointe",
//     },
//     {
//       id: "tt1355683",
//       role: "Actor",
//       title: "Black Mass",
//       year: "2015",
//       description: "James 'Whitey' Bulger",
//     },
//     {
//       id: "tt8925618",
//       role: "Actor",
//       title: "Dior: Sauvage",
//       year: "2015",
//       description: "(Video short) Man",
//     },
//     {
//       id: "tt3045616",
//       role: "Actor",
//       title: "Mortdecai",
//       year: "2015",
//       description: "Mortdecai",
//     },
//     {
//       id: "tt2180411",
//       role: "Actor",
//       title: "Into the Woods",
//       year: "2014",
//       description: "Wolf",
//     },
//     {
//       id: "tt3099498",
//       role: "Actor",
//       title: "Tusk",
//       year: "2014/I",
//       description: "Guy Lapointe (as Guy Lapointe)",
//     },
//     {
//       id: "tt2209764",
//       role: "Actor",
//       title: "Transcendence",
//       year: "2014/I",
//       description: "Will Caster",
//     },
//     {
//       id: "tt1885299",
//       role: "Actor",
//       title: "Lucky Them",
//       year: "2013",
//       description: "Matthew Smith",
//     },
//     {
//       id: "tt1210819",
//       role: "Actor",
//       title: "The Lone Ranger",
//       year: "2013",
//       description: "Tonto",
//     },
//     {
//       id: "tt0182576",
//       role: "Actor",
//       title: "Family Guy",
//       year: "2012",
//       description:
//         "(TV Series) Edward Scissorhands - Lois Comes Out of Her Shell (2012) ... Edward Scissorhands (voice)",
//     },
//     {
//       id: "tt1077368",
//       role: "Actor",
//       title: "Dark Shadows",
//       year: "2012",
//       description: "Barnabas Collins",
//     },
//     {
//       id: "tt19866672",
//       role: "Actor",
//       title: "Paul McCartney: My Valentine (Johnny Depp Version)",
//       year: "2012",
//       description: "(Music Video short) Johnny Depp",
//     },
//     {
//       id: "tt1232829",
//       role: "Actor",
//       title: "21 Jump Street",
//       year: "2012",
//       description: "Officer Tom Hanson (uncredited)",
//     },
//     {
//       id: "tt1641247",
//       role: "Actor",
//       title: "Life's Too Short",
//       year: "2011",
//       description:
//         "(TV Series) Johnny Depp - Episode #1.2 (2011) ... Johnny Depp",
//     },
//     {
//       id: "tt0376136",
//       role: "Actor",
//       title: "The Rum Diary",
//       year: "2011",
//       description: "Kemp",
//     },
//     {
//       id: "tt1843198",
//       role: "Actor",
//       title: "Lego Pirates of the Caribbean: The Video Game",
//       year: "2011",
//       description: "(Video Game) Jack Sparrow (voice)",
//     },
//   ],
//   errorMessage: "",
// };

const API_URL = {
  allThingsDepp: "https://imdb-api.com/en/API/Name/k_08e2ou23/nm0000136",
  allThingsHeard: "https://imdb-api.com/en/API/Name/k_08e2ou23/nm1720028",
};

function init() {
  //   getActorDetails(API_URL.allThingsDepp);
  //   getActorDetails(API_URL.allThingsHeard);
}

async function getActorDetails(url) {
  try {
    const res = await fetchWithTimeout(url, { timeout: 5000 }).catch((e) => {
      console.log(e);
      return null;
    });

    if (res.status != 200) {
      console.log("status from api call: " + res.status);
      return null;
    }

    var actorDetails = await res.json();
    var details = {
      name: actorDetails.name,
      summary: actorDetails.summary,
      birthday: actorDetails.birthDate,
      awards: actorDetails.awards,

      // moviesList: () => {};
    };
    console.log(details);
    buildActorDetailsDOM(details);
    return details;
  } catch (error) {
    console.log("failed loading details");
  }
}
var dummyDetails = {
  name: api_return_object.name,
  summary: api_return_object.summary,
  birthday: new Date(api_return_object.birthDate).toLocaleDateString(),
  awards: api_return_object.awards,
};

// for demo purposes
buildActorDetailsDOM(dummyDetails);
function buildActorDetailsDOM(details) {
  var targetElement;
  if (details.name.toLowerCase() == "johnny depp") {
    targetElement = document.getElementById("about-depp");
  } else {
    targetElement = document.getElementById("about-heard");
  }

  for (var key in details) {
    var cardElement = document.createElement("div");
    cardElement.className = "card offset-1 col-10 my-4";
    var card = document.createElement("div");
    card.className = "card-body";
    cardElement.appendChild(card);
    targetElement.appendChild(cardElement);
    var keyTitle = key.slice(0, 1).toUpperCase().concat(key.slice(1));
    var keyValue = details[key];
    card.innerHTML =
      `
        <h5 class="fw-bold">` +
      keyTitle +
      `</h5><p>` +
      keyValue +
      `</p>`;
  }
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
