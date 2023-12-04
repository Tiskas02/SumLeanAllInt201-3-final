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
]

let newSalary = [10000,20000,30000,14000,15000,25000]

// database.length = 5
// newSalary.length = 6

// Console.log format
// console.log("ID : " + database[i].id + "\nSalary : " + database[i].salary)

// -----------------------  Start your code here!   --------------------------


for (let i = 0; i < database.length; i++) {
    if(database[i]){
    database[i].salary = newSalary[i]
    console.log("ID : " + database[i].id + "\nSalary : " + database[i].salary)}
}












// ---------------------------  End of the code   -----------------------------

// Result ---------------------------
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