const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    price: 12.99,
    publicationDate: '1925-04-10',
    rating: 4.2,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    price: 9.99,
    publicationDate: '1960-07-11',
    rating: 4.5,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    price: 12.99,
    publicationDate: '1925-04-10',
    rating: 4.2,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    price: 9.99,
    publicationDate: '1960-07-11',
    rating: 4.5,
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    price: 10.49,
    publicationDate: '1949-06-08',
    rating: 4.7,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Classic',
    price: 11.25,
    publicationDate: '1951-07-16',
    rating: 4.0,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Classic',
    price: 8.75,
    publicationDate: '1813-01-28',
    rating: 4.6,
  },
  // Add more book objects here
]
function filterBooksByGenre(booksArray, genre) {
  const filtered = booksArray.filter((book) => {
    return book.genre.toLowerCase() === genre.toLowerCase() //return here
  })
  console.log(filtered)
  return filtered // Return the filtered array
}
function calculateAverageBookPrice(booksArray) {
  let storePrice = 0
  let storetime = 0
  booksArray.forEach((element) => {
    storePrice += element.price
    storetime++
  })
  return console.log(
    `Average All Book Price : ${Math.ceil(storePrice / storetime)}`
  )
}
function findBooksPublishedInRange(booksArray, startDate, endDate) {
  const filteredDate = booksArray.filter((book) => {
    const dateBook = new Date(book.publicationDate)
    const dateStart = new Date(startDate)
    const dateEnd = new Date(endDate)

    return dateBook >= dateStart && dateBook <= dateEnd
  })
  console.log(filteredDate)
}

function sortBooksByRating(booksArray) {
  const sorted = booksArray.sort((a, b) => a.rating - b.rating);
  return console.log(sorted);
}
filterBooksByGenre(books, 'Fiction')
calculateAverageBookPrice(books)
findBooksPublishedInRange(books, '1925-02-10', '1960-08-11')
sortBooksByRating(books)
