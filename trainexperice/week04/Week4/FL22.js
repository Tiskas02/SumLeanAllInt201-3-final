let database = [
    {
        id:1,
        salary:10000
    },
    {
        id:2,
        salary:15000
    },
    {
        id:3,
        salary:20000
    },
    {
        id:4,
        salary:55555
    },
    {
        id:5,
        salary:99600
    },
    {
        id:6,
        salary:23000
    },
]

let newSalary = [10000,20000,30000,14000,15000]

// database.length = 6
// newSalary.length = 5
// Note: If there is no newSalary for some index, let it be the same.

// Console.log format
// console.log("ID : " + database[i].id + "\nSalary : " + database[i].salary)

// -----------------------  Start your code here!   --------------------------

for (let index = 0; index < database.length; index++) {
    //method 1
    if(newSalary[index] !== null || newSalary[index] !== undefined){
        database[index].salary = newSalary[index]
    }
    //method 2
    if(newSalary[index]){
        database[index].salary = newSalary[index]
    }
    //method 3
    database[index].salary = newSalary[index]??database[index].salary//nullist
    console.log("ID : " + database[index].id + "\nSalary : " + database[index].salary)
}













// ---------------------------  End of the code   -----------------------------

// Result -----------------------
// ID : 1
// Salary : 10000
// ID : 2
// Salary : 20000
// ID : 3
// Salary : 30000
// ID : 4
// Salary : 14000
// ID : 5
// Salary : 15000
// ID : 6
// Salary : 23000