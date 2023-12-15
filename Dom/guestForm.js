import { createGuestList } from './data/guestdata.js'
// const createGuestList = require('./data/guestdata.js')
//65130500078 Saksit Tatitrisakul
const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const searchTag = document.getElementById("search-input")
    const addTag = document.getElementById("add-guest-btn")
   searchTag.addEventListener('keyup',searchGuest)
   addTag.addEventListener('click',addGuest)
    
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const html = `
    <div>
    <span>${guestItem.firstname} ${guestItem.lastname}</span>
    <span class="remove-icon" id="${guestItem.firstname}-${guestItem.lastname}" style="cursor:pointer;color:red">[X]</span>
    <div>
    `
    const displayTag = document.getElementById("display-area")
    displayTag.insertAdjacentHTML('beforeend',html)
    const removeBtn = document.getElementById(`${guestItem.firstname}-${guestItem.lastname}`)
    removeBtn.addEventListener('click',removeGuest)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult=[{firstname,lastname}]) {
    const displayTag = document.getElementById("display-area")
    displayTag.textContent = ''
    guestResult.forEach((Item)=>displayGuest(Item))
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const eventRecive = event.target.value
    const search = guests.searchGuests(eventRecive)
    displayGuests(search)
  }

  // 5. Function to add a new guest
  function addGuest() {
    const firstname = document.getElementById("firstname-input")
    const lastname = document.getElementById("lastname-input")
    guests.addNewGuest(firstname.value,lastname.value)
    const guest = {firstname:firstname.value,lastname:lastname.value}
    displayGuest(guest)
    firstname.value =''
    lastname.value =''
  }
  


  // 6. Function to remove a guest
  function removeGuest(event) {
    const parentNode = event.target.parentNode
    const [firstname,lastname] = event.target.getAttribute('id').split('-')
    parentNode.remove()
    guests.removeGuest({firstname,lastname})
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}

const searchbar = document.querySelector("div>#search-input")
    
////test
// module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())
