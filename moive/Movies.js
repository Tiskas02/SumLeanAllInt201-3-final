//your student id, firstname, and lastname here
//65130500078 Saksit tatitrisakul
class Movies {
  //your code here...
  constructor() {
    this.movies = []
  }
  getAllMovies() {
    return this.movies
  }
  addMovie(title, director, year, genre) {
    if (!title || !director || !year || !genre) {
      return undefined
    }

    const isMovieExists = this.movies.find(
      (x) =>
        x.title.toLowerCase() === title.toLowerCase() &&
        x.director.toLowerCase() === director.toLowerCase()
    )
    if (isMovieExists) {
      return undefined
    }

    const newMovie = { title, director, year, genre }
    this.movies.push(newMovie)
    return newMovie
  }
  updateMovie(title, updatedDetails) {
    const detectArr = this.movies.find(
      (x) => x.title.toLowerCase() === title.toLowerCase()
    )
    if (!detectArr) {
      return undefined
    }
    const index = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    )
    if (index !== -1) {
      this.movies[index] = { ...this.movies[index], ...updatedDetails }
      return this.movies[index]
    }
  }
  deleteMovieByTitle(title){
    const index = this.movies.findIndex(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    )
    if (index !== -1) {
      const movieDeleted = this.movies.splice(index,1)
      return movieDeleted
    } else {return 'no movie deleted'}
  }
}

module.exports = Movies
