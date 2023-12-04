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
let newSalary = [
    {
        id:5,
        newSalary:15000
    },
    {
        id:3,
        newSalary:30000
    },
    {
        id:2,
        newSalary:20000
    },
    {
        id:1,
        newSalary:10000
    },
    {
        id:4,
        newSalary:14000
    },
]

// database.length = 5
// newSalary.length = 5
// Note 1 : Try to use newSalary[i].id to specific the modification to the database.
// Note 2 : Nested ForLoop.

// Console.log format
// console.log("ID : " + database[i].id + "\nSalary : " + database[i].salary)

// -----------------------  Start your code here!   --------------------------

for (let i = 0; i < database.length; i++) {
    for (let j = 0; j < newSalary.length; j++) {
        if (database[i].id === newSalary[j].id) {
            database[i].salary = newSalary[j].newSalary
        }
    }
    console.log("ID : " + database[i].id + "\nSalary : " + database[i].salary)
}













// ---------------------------  End of the code   -----------------------------

// Result ----------------------
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