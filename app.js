let movies = require("./movies");
let fs = require("fs");

let moviesDH = {
      listMovies: () => {
            movies.forEach((movies) => {
                  console.log(`${movies.id}. ${movies.title}`);
            });
      },
      searchMovie: function (id) {
            let searchResutl = movies.find((movie) => movie.id === id);
            if (searchResutl === -undefined) {
                  return null;
            }
            return searchResutl;
      },
      searchMoviesByGenre: (genre) => {
            searchGenreResult = movies.filter((movie) => movie.genre === genre);
            if (searchGenreResult.length === 0) {
                  return null;
            }
            return result;
      },
      totalPrice: () => {
            return movies.reduce((acumulador, elemento) => acumulador + elemento.price, 0);
      },
      changeMovieGenre: function (id, genre) {
            let searchResutl = this.searchMovie(id);
            searchResutl.genre = genre;
      },
};
console.log(moviesDH.searchMovie(5));