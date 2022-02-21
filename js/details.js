const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

// if the id is null, then redirect to the home page
if (id === null) {
  location.href = "/";
}

const detailsURL = "https://papajoke.p.rapidapi.com/api/jokes/" + id;

const detailContainer = document.querySelector(".details");
const idContainer = document.querySelector(".id");

idContainer.innerHTML = "ID: " + id;

async function fetchJoke() {
  try {
    const response = await fetch(detailsURL, options);
    const singleResult = await response.json();
    console.log(singleResult);

    detailContainer.innerHTML = `<div class="single-card card">
        <h2>${singleResult.headline}</h2>
        <p>${singleResult.punchline}</p>
        <p class="explanation-text">${singleResult.why}</p>
        </div>`;
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = error;
  }
}

fetchJoke();
