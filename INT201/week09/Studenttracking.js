const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
  ]
  //let studentAttendence = students[0]
  //let studentAttendanceTime = studentAttendence.attendance
  function getAttendanceRate(student) {
      const stu = student.filter((truee) => truee == true)
     
      return (stu.length / student.length )*100
  }
  // const atdRate = student.filter((student) => student == true) // [true,true,true]
  // return (atdRate.length / student.length) * 100

  
      

  function getAvgScore(student){
    return student.reduce((acc,cur) => (acc + cur)/5,0)
      // averageScores.push(averageScore);
    }
  // }


function underPerformStudent(student){
  return student.filter((el) => getAttendanceRate(el.attendance) < 80 && getAvgScore(el.testScores) < 70)
  .map((el2) =>{
    return {
    name : el2.name,
    attendanceRate : getAttendanceRate(el2.attendance),
    AvgScore : getAvgScore(el2.testScores)
    }
  }
  )
}

console.log(underPerformStudent(students));