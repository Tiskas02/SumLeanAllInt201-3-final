// Good luck on JING write your code here
import {validateEmail,validatePassword,validateUsername} from "./validate.js"
const colorClick = document.getElementById("color-btn")
colorClick.addEventListener("click",() =>{
  const rainbow = document.getElementById("rainbow")
  const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
  rainbow.style.backgroundColor = colorArray[Math.floor(Math.random()*colorArray.length)]
}
)
//chatGpt
// const addClick = document.getElementById("add-btn");
// const Ul = document.querySelector("#listItem > ul");

// document.addEventListener("DOMContentLoaded", () => {
//   const addLocal = JSON.parse(localStorage.getItem("items")) || [];
//   addLocal.forEach((element) => {
//     const html = `<li>${element}</li>`;
//     Ul.insertAdjacentHTML('afterbegin', html);
//   });
// });

// addClick.addEventListener("click", () => {
//   const itemInBack = document.getElementById("item-input");
//   const errormsg = document.querySelector(".error");
  
//   if (!itemInBack.value) {
//     errormsg.textContent = "Please Enter some content to continue!";
//     return;
//   }
  
//   errormsg.textContent = '';
//   const html = `<li>${itemInBack.value}</li>`;
//   Ul.insertAdjacentHTML('beforeend', html);
  
//   const storeItem = JSON.parse(localStorage.getItem("items")) || [];
//   storeItem.push(itemInBack.value);
//   localStorage.setItem("items", JSON.stringify(storeItem));
// });

const addClick = document.getElementById("add-btn")
const Ul = document.querySelector("#listItem>ul")

document.addEventListener("DOMContentLoaded",() => {
  const addlocal = JSON.parse(localStorage.getItem("items")) || []
  addlocal.forEach(element => {
    console.log("sfsf");
    const html = `<li>${element}</li>`;
    Ul.insertAdjacentHTML('afterbegin',html)
  });
}
)
addClick.addEventListener("click",() =>{
  const itemInBack = document.getElementById("item-input")
  const errormsg = document.querySelector(".error")
  if (!itemInBack.value) {
    errormsg.textContent = "Plase Enter some content to continous!"
    return
  }
  errormsg.textContent = ''
  const html = `<li>${itemInBack.value}</li>`;
  Ul.insertAdjacentHTML('beforeend', html);
  const storeItem = JSON.parse(localStorage.getItem("items")) || []
  storeItem.push(itemInBack.value)
  localStorage.setItem("items",JSON.stringify(storeItem))
  //other chai movement
  // const storeItem1 = JSON.parse(localStorage.getItem("items"))
  // if(!storeItem1){
  //   storeItem1 = []
  // }
  // storeItem.push(itemInBack.value)
  // localStorage.setItem("items",JSON.stringify(storeItem))
}) 

const addSection = document.getElementById("input-list")
const addSubmit =document.getElementById("submit-btn")
addSubmit.addEventListener("click",(e) =>{
  e.preventDefault()
  const addInput = document.querySelectorAll("#input-list>form>.input")
  console.log(addInput);
  const inputUser = addInput[0].value
  const inputEmail = addInput[1].value
  const inputPass = addInput[2].value
  console.log(inputUser,inputEmail,inputPass);
  const errormsg = document.querySelector("#input-list>form>.error")
  if(!validateUsername(inputUser)){
    errormsg.textContent="Username is invalid make sure to contian Uppercase Lowercase number and not spacialnumber "
  }else if (!validateEmail(inputEmail)){
    errormsg.textContent="This is not a Email format!! Plase contain @ and .com "
  }else if (!validatePassword(inputPass)){
    errormsg.textContent = "Password is invalid make sure to contain Uppercase ,Lowercase ,number and spacial Charator"
  }else{
    errormsg.textContent = "Successfully!! Yay!!"
  }
} 
)

