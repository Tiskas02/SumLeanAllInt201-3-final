// // const 
// import { CookieUtil } from './mycookie/cookieUtil.js'
// // document.cookie ='username=Umaporn'
// // document.cookie ='course=INT201'
// // document.cookie ='credit=3'
// // document.cookie = 'credit=2'
// // const currentcookie =document.cookie
// // console.log(currentcookie);
// // console.log(CookieUtil.get('course'));
// CookieUtil.set('username','Saksit',new Date(2023,11,25))
// CookieUtil.set('course','INT201',new Date(2023,11,25))
// CookieUtil.set('credit','2',new Date(2023,11,25))
// console.log(CookieUtil.get('course'));
// console.log(CookieUtil.get('username'));
// console.log(CookieUtil.get('credit'));
//localstorage
let counter = localStorage.getItem('count');
if (counter === null) {
    counter = 1 
    localStorage.setItem('count',counter)
}else localStorage.setItem('count',++counter)
alert(`counter=${counter}`)
//session Storage
// let counter = sessionStorage.getItem('count');
// if (counter === null) {
//     counter = 1 
//     sessionStorage.setItem('count',counter)
// }else sessionStorage.setItem('count',++counter)
// alert(`counter=${counter}`)

sessionStorage.removeItem('count')
sessionStorage.clear()
