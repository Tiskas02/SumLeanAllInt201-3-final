// Good luck on JING write your code here
import {validateEmail,validatePassword,validateUsername} from "./validate.js"
const colorClick = document.getElementById("color-btn")
colorClick.addEventListener("click",() =>{
  const rainbow = document.getElementById("rainbow")
  const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
  rainbow.style.backgroundColor = colorArray[Math.floor(Math.random()*colorArray.length)]
}
)
const addClick = document.getElementById("add-btn")
addClick.addEventListener("click",() =>{
  const itemInBack = document.getElementById("item-input")
  const errormsg = document.querySelector(".error")
  if (!itemInBack.value) {
    errormsg.textContent = "Plase Enter some content to continous!"
    return
  }
  errormsg.textContent = ''
  const Ul = document.querySelector("div>ul")
  const html = `<li>${itemInBack.value}</li>`;
  Ul.insertAdjacentHTML('beforeend', html);
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

