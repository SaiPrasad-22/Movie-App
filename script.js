let title = document.getElementById("title");
let description = document.getElementById("description");
let genre = document.getElementById("genre");
let language = document.getElementById("language");
let date = document.getElementById("date");
let director = document.getElementById("director");
let actors = document.getElementById("actors");
let writer = document.getElementById("writer");
let awards = document.getElementById("awards");
let ratings = document.getElementById("ratings");
let poster = document.getElementById("poster");

// API
let apiKey = "2fa0df07";
let apiBaseUrl = "https://www.omdbapi.com/?apikey=" + apiKey + "&t=";

function searchMovie() {
  let movieName = document.getElementById("movieName");
  let url = apiBaseUrl + movieName.value;
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      title.innerText = data.Title;
      description.innerText = data.Plot;
      genre.innerText = data.Genre;
      language.innerText = data.Language;
      date.innerText = data.Released;
      director.innerText = data.Director;
      actors.innerText = data.Actors;
      writer.innerText = data.Writer;
      awards.innerText = data.Awards;
      ratings.innerText = data.imdbRating;
      poster.src = data.Poster;
    });
}
