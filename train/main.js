// const personPrototype = {
//     greet: function() {
//       console.log("Hello!");
//     }
//   };
//   const john = Object.create(personPrototype);
//   console.log(john.greet);
/////////////////////////////////
// function createPerson(name, age) {
//     return {
//       name,
//       age,
//     };
//   }
//   const john = createPerson("John", 30);
//   console.log(john);
//////////////////////////////////////
// const student = {
//     id: 65130512345,
//     firstName: "Blue",
//     lastName: "Chanapol",
//   };
  
//   console.log(student.id);
//   console.log(student["id"]);
//   console.log(student);
// //////////////////////////////////////
// const person = {
//     id: 65130512345,
//   };
//   person['name'] = 'Samart';
//   console.log(person['name']);
//   console.log(person);
/////////////////////////////////////////
// const data = {
//     data1: "And I don't want the world to see me",
//     data2: "'Cause I don't think that they'd understand",
//     data3: "When everything's made to be broken",
//     data4: 'I just want you to know who I am',
//     data5: 'I just want you to know who I am',
//   };
  
//   for (let i = 1; i <= 5; i++) {
//     console.log(data['data' + i]);
//   }
////////////////////////
class Car {
    x = 0;
  
    move() {
      this.x++;
    }
  }
  
  const car = new Car();
  console.log(car.move());

  const blueBoy = {
    name: 'Chanapol',
    score: 12,
  };
  
  const blueGirl = blueBoy;
  blueGirl.name = 'Lopanahc';
  blueGirl.score = 10;
  
  console.log(blueBoy);