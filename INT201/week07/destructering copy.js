const mail = {
    sender: 'SIT, KMUTT',
    recipent: {
      firstname: 'Umaporn',
      lastname: 'Sup'
    },
    title: 'Welcome to KMUTT',
    sentDetail: {
      sentDate: new Date(Date.now()),
      host: {
        name: '@sit.kmutt'
      }
    }
  }
  //firstname lastname
  let {recipent :{firstname: fname,lastname}}=mail;
  console.log(mail);
  //hostname
    let {sentDetail :{host:{name:hostname}}}=mail;//get in to property host and get name

console.log(fname);
console.log(lastname);
console.log(hostname);