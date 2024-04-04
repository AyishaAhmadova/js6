const apiKey = "a7ca99e33706483b07a3cb83d57c6c42";
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

function meshurfilm() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("meshur film:");
      data.results.forEach((movie) => {
        console.log(movie.title);
      });
    })
    .catch((error) => {
      console.error("Error fetching movie data:", error);
    });
}

meshurfilm();
