// import { createGuestList } from './data/guestdata.js'
const createGuestList = require('./data/guestdata.js')
//65130500078 Saksit Tatitrisakul
const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList

  // 1. register event for searching and adding
  function registerEventHandling() {
    const addBtn2 = document.getElementById("add-guest-btn")
    addBtn2.addEventListener("click",() =>{
      displayGuests(guestList.getAllGuests()) 
    })
    
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {

  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const displayGuest = document.getElementById("display-area")
    guestList.getAllGuests().reverse().forEach((element) => {
          const html = `<div>
                        <span>${element.firstname} ${element.lastname}</span>
                        <span>[X]</span>
                        <div>`;
          displayGuest.insertAdjacentHTML('afterbegin', html);
        });

  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const searchbar = document.querySelector("div>#search-input")
    searchbar.addEventListener("keyup",(element)=>{
      guestList.searchGuests(element)
    })
  }

  // 5. Function to add a new guest
  function addGuest() {}
  
  const addBtn = document.getElementById("add-guest-btn")
  addBtn.addEventListener("click",() =>{
    const inputFname = document.querySelector("div>#firstname-input")
    const inputLname = document.querySelector("div>#lastname-input")
    const guestAdd = guestList.addNewGuest(inputFname.value,inputLname.value)
  })


  // 6. Function to remove a guest
  function removeGuest(event) {}

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
/////test
// const guest = guestList.addNewGuest("sasa",'sdfaf')
// console.log(guest);
// const inputFname = document.getElementById("firstname-input")
// const inputFname2 = document.querySelector("div>#firstname-input")
// console.log(inputFname2.value);
// console.log(guestList.getAllGuests().forEach((x)=>console.log(x.firstname)));
// console.log(guestList.getAllGuests());
// const addBtn = document.getElementById("add-guest-btn")
// console.log(addBtn);
// const searchbar = document.querySelector("div>#search-input")
// console.log(searchbar.value);
// searchbar.addEventListener("keyup",()=>{
//   console.log(searchbar.value);
// })
const searchbar = document.querySelector("div>#search-input")
    searchbar.addEventListener("keyup",(element)=>{
      const elementArr = [...element]
      console.log(guestList.searchGuests(elementArr));
    })
////test
// module.exports = guestForm
export { guestForm }
// const { registerEventHandling, displayGuests } = guestForm()
// registerEventHandling()
// displayGuests(guestList.getAllGuests())
