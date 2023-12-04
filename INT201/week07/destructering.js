const mail = {
    sender : 'SIT,KMUTT',
    recepient : 'Saksit tatitrisakul',
    title : 'welcome to SIT',
    sentDate : new Date(Date.now())
}
//Object destructering
let {recepient} = mail;
let {sentDate : mailDate,title : header} = mail;//change name of title to header
console.log(recepient);
console.log(sentDate);
console.log(title);