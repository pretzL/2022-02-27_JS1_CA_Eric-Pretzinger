const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

// if the id is null, then redirect to the home page
if (id === null) {
  location.href = "/";
}

const detailsURL = "https://papajoke.p.rapidapi.com/api/jokes/" + id;

const options = {
  headers: {
    "x-rapidapi-host": "papajoke.p.rapidapi.com",
    "x-rapidapi-key": "7e288d255dmshdc0a6f684e2951cp1df3b6jsn5afd875a5f17",
  },
};

const detailContainer = document.querySelector(".details");
const idContainer = document.querySelector(".id");
const errorContainer = document.querySelector(".error-container");

idContainer.innerHTML = "ID: " + id;

async function fetchJoke() {
  try {
    const response = await fetch(detailsURL, options);
    const singleResult = await response.json();
    console.log(singleResult);

    detailContainer.innerHTML = `<div class="single-card card">
        <h2>${singleResult.headline}</h2>
        <p>${singleResult.punchline}</p>
        <button type="button" class="btn">Explanation</button>
        <p class="explanation-text">${singleResult.why}</p>
        <p class="type-joke">Type of joke: ${singleResult.type}</p>
        </div>`;

    //Explanation hidden function

    const explanationButton = document.querySelector(".btn");
    const explanationText = document.querySelector(".explanation-text");

    explanationButton.onclick = function () {
      explanationText.style.display = "block";
    };
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}

fetchJoke();
