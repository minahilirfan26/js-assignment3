//vies = [
//
//title: "Avengers: Endgame",
//genre: "action",
//year: 2019,
//image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
//
//
//title: "Joker",
//genre: "drama",
//year: 2019,
//image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
//
//
//title: "Knives Out",
//genre: "comedy",
//year: 2019,
//image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qG59J1Q7rpBc1dvku4azbzcqo8h.jpg"
//},
//{
//title: "Us",
//genre: "horror",
//year: 2019,
//image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mvDVOYluQwcyfqTITJcT2gVesjP.jpg"
//},
//{
//title: "The Notebook",
//genre: "romance",
//year: 2004,
//image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/k0oN89q8K1zll9OsHk5NWmHZZGI.jpg"
//},
//{
//title: "Inception",
//genre: "sci-fi",
//year: 2010,
//image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
//},
//];
//
//const recommendBtn = document.getElementById("recommend-btn");
//const movieList = document.getElementById("movie-list");
//
//recommendBtn.addEventListener("click", () => {
//// Get user's selected genre and year
//const selectedGenre = document.getElementById("genre").value;
//const selectedYear = document.getElementById("year").value;
//
//// Filter movies based on user's selections
//const recommendedMovies = movies.filter(movie => movie.genre === selectedGenre && movie.year == selectedYear);
//
//// Clear the movie list
//movieList.innerHTML = "";
//
//// Display recommended movies
//recommendedMovies.forEach(movie => {
//    // Create movie card
//    const movieCard = document.createElement("div");
//    movieCard.classList.add("movie-card");
//
//    // Create movie image
//    const movieImg = document.createElement("img");
//    movieImg.src = movie.image;
//
//    // Create movie title
//    const movieTitle = document.createElement("h2");
//    movieTitle.textContent = movie.title;
//
//    // Create movie description
//    const movieDesc = document.createElement("p");
//    movieDesc.textContent = `Genre: ${movie.genre} | Year: ${movie.year}`;
//
//    // Add image, title, and description to movie card
//    movieCard.appendChild(movieImg);
//    movieCard.appendChild(movieTitle);
//    movieCard.appendChild(movieDesc);
//
//    // Add movie card to movie list
//    movieList.appendChild(movieCard);
//});
//});
        
        
        