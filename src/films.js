import { movies } from "./data.js";
document.getElementById("getAllDirectors").addEventListener("click", getAllDirectors);
document.getElementById("getMoviesFromDirector").addEventListener("click", getMoviesFromDirector)
document.getElementById("getAverageScore").addEventListener("click", moviesAverageOfDirector)
document.getElementById("directorsOrdered").addEventListener("click", orderAlphabetically)
document.getElementById("moviesOrdered").addEventListener("click", orderByYear)


// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = movies.map(v => v.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const directorsName = document.getElementById("directorsName").value;
  const filteredMovies = movies.filter(v => v.director === directorsName)

  document.getElementById("moviesFilteredByDirector").innerHTML = "Movies by this director: <br> <br>" + JSON.stringify(filteredMovies)
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorsName = document.getElementById("directorsName").value;
  const filteredMovies = movies.filter(v => v.director === directorsName)
  let averageScore = filteredMovies.map(v => v.score).reduce((a, b) => (a + b) / filteredMovies.length)

  document.getElementById("averageScoreResult").innerHTML = "Average movies score: " + averageScore.toFixed(1)
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const directorsOrdered = (movies.map(v => v.director).sort()).splice(0, 20)
  document.getElementById("directorsOrderedList").innerHTML = directorsOrdered
}

// Exercise 5: Order by year, ascending
function orderByYear() {
  const moviesOrdered = (movies.sort((a, b) => {
    if(a.year === b.year){
      return a.title < b.title ? -1: 1
    }
    else{
      return a.year < b.year ? -1: 1
    }
  }))

  document.getElementById("moviesOrderedList").innerHTML = JSON.stringify(moviesOrdered)
  console.log(moviesOrdered)
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
