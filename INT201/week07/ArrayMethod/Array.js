const keywords = ['destructering','spread','rest','prototypes','function']
const mails = [
    {id: 12313508,
    sender :{
        firstname : 'Saksit',
        lastname : 'Tatitrisakul'
    },
    subject : 'Welcome to SIT',
},
{id: 55513508,
    sender :{
        firstname : 'Umaporn',
        lastname : 'afaf'
    },
    subject : 'Welcome to SIT',
}
]

//Foreach //keyword = array
keywords.forEach((keywords)=>console.log(keywords))
mails.forEach((mails)=>console.log(mails))
//string contains the first caracter of the keywords
//'dsrpf'
let firststring =''
keywords.forEach((keywords)=> firststring += keywords.charAt(0) )
console.log("-----------"+firststring);
//push
keywords.push('optional chaning')
console.log(keywords);
//2.all mail id of mails array
let arrIdMails = []
mails.forEach((mails) => arrIdMails.push(mails.id))
console.log(arrIdMails);

//Fillter
//3.return array that contains keyword which include 'es' (case insensitive)
//do condition as true or false 
const eskeywords =  keywords.filter((keywords) => keywords.toLocaleLowerCase().includes('es'))
console.log(eskeywords);

//MAP
//map return new array
//4. array that contain all sender firstname 
const mailsender = mails.map((mails) => mails.sender.firstname)
console.log('****************************');
console.log(mailsender);

//5. get array that contain all mailids that start with 'logId-'
//result :[logId-123456]
const mailIds = mails.map((mails)=>'logId-' + mails.id)
console.log(mailIds);
