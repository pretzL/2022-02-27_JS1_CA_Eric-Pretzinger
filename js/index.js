const API_URL = "https://papajoke.p.rapidapi.com/api/jokes";

const options = {
  headers: {
    "x-rapidapi-host": "papajoke.p.rapidapi.com",
    "x-rapidapi-key": "7e288d255dmshdc0a6f684e2951cp1df3b6jsn5afd875a5f17",
  },
};

const jokeContainer = document.querySelector(".jokes");

async function getDadJokes() {
  try {
    const response = await fetch(API_URL, options);
    const results = await response.json();
    console.log(results);

    const jokes = results.items;

    jokeContainer.innerHTML = "";

    for (let i = 0; i < jokes.length; i++) {
      const headline = jokes[i].headline;
      let punchline = "Badum.. Tsss...";
      let explanation = "This joke needs no explanation!";

      if (jokes[i].why) {
        explanation = jokes[i].why;
      }

      if (jokes[i].punchline) {
        punchline = jokes[i].punchline;
      }

      jokeContainer.innerHTML += `<a href="/details.html?id=${jokes[i]._id}" class="card">
        <h2>${headline}</h2>
        <p>${punchline}</p>
        <p class="explanation-text">${explanation}</p>
        </a>`;
    }
  } catch (error) {
    console.log(error);
    jokeContainer.innerHTML = error;
  }
}

getDadJokes();
