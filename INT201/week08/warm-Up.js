
// Example usage:
const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 }
]
const passingNames = getPassingNames(studentScores)
console.log(passingNames)
// Output should be: ["ALICE", "BOB", "EVE"]
//method1
function getPassingNames(students) {
    const filterStudents = students.filter((student) => student.score >= 70)
    //[  { name: 'Alice', score: 85 },
    //  { name: 'Bob', score: 92 },
    // { name: 'Eve', score: 78 }  ]
    const studentNames = filterStudents.map(
      (filterStudent) => filterStudent.name.toUpperCase() //[ 'ALICE', 'BOB', 'EVE' ]
    )
    return studentNames
  }

  //method2
  function getPassingName(students){
    return students
    .filter((student) => student.score >= 70)
    .map((filterStudent) => filterStudent.name.toUpperCase())
}