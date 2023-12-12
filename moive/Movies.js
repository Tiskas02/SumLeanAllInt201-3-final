//your student id, firstname, and lastname here
//65130500078 Saksit tatitrisakul
class Movies {
  //your code here...
  constructor(title,director,year,genre){
    this.title=title,
    this.director =director,
    this.year = year,
    this.genre = genre
  }
  addMovie(title1,director1,year1,genre1){
    return  new Movies(this.title = title1,
      this.director = director1,
      this.year = year1,
      this.genre = genre1)
  }
}


module.exports = Movies
