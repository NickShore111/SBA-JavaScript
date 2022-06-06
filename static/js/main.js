"use strict";
console.log("main.js loaded");

// Used for image popover
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

window.onload = init;

const API_URL = {
  allThingsDepp: "https://imdb-api.com/en/API/Name/k_4fnl8773/nm0000136",
  allThingsHeard: "https://imdb-api.com/en/API/Name/k_4fnl8773/nm1720028",
};

function init() {
  getActorDetails(API_URL.allThingsDepp);
  getActorDetails(API_URL.allThingsHeard);
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
    // console.log(details);
    buildActorDetailsDOM(details);
    // return details;
  } catch (error) {
    console.log("failed loading details");
  }
}

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
    card.innerHTML = `
        <h5 class="fw-bold">
      ${keyTitle}
      </h5><p>
      ${keyValue}
      </p>`;
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
