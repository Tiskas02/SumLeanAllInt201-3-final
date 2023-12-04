const nums = [10, 20, 30, 40, 50]
const obj = {
  id: 1001,
  title: 'JS Beginner',
  isbn: 7241326384,
  authors: { fullname: 'Jame Smith' }
}
const [num1, num2] = nums //destructuring on array variable
console.log(num1)
console.log(num2)
const { isbn: bookId } = obj //destructuring on object variable
console.log(bookId) //7241326384
const {
  authors: { fullname: authorName }
} = obj
console.log(authorName) //Jame Smith