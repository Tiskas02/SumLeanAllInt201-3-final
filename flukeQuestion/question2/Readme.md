Problem:
You're provided with an array of book objects, each containing information about a book:

filterBooksByGenre(booksArray, genre)
Description: Filters books by a given genre.
Parameters: Accepts an array of book objects and a genre string.
Returns: An array containing book objects that belong to the specified genre.

calculateAverageBookPrice(booksArray)
Description: Calculates the average price of all books.
Parameters: Accepts an array of book objects.
Returns: The average price of the books as a number.

findBooksPublishedInRange(booksArray, startDate, endDate)
Description: Finds books published within a specified date range.
Parameters: Accepts an array of book objects, a start date string, and an end date string.
Returns: An array containing book objects published between the given dates.

sortBooksByRating(booksArray)
Description: Sorts books by their ratings in descending order.
Parameters: Accepts an array of book objects.
Returns: A new array of book objects sorted by their ratings in descending order.
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    price: 12.99,
    publicationDate: "1925-04-10",
    rating: 4.2
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    price: 9.99,
    publicationDate: "1960-07-11",
    rating: 4.5
  },
  // Add more book objects here
];