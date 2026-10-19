class Student {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

  getAverage() {
let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum = sum + this.scores[i];
    }
    return sum / this.scores.length;
  }

  
  getLetterGrade() {
    const ave = this.getAverage();
    if (ave >= 90) {
      return "A";
    } else if (ave >=80) {
      return "B";
    } else if (ave >= 70) {
      return "C";
    } else if (ave >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
}

function analyzeClass(students) {
  let classTotalSum = 0;
  let topStudentName = "";
  let highestAverage = -1;

  console.log("------- STUDENT REPORT -------");

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const ave = student.getAverage();
    const letterGrade = student.getLetterGrade();

    console.log(
      student.name + " - Average: " + ave.toFixed(1) + " | Grade: " + letterGrade
    );

    classTotalSum = classTotalSum + ave;

    if (ave > highestAverage) {
      highestAverage = ave;
      topStudentName = student.name;
    }
  }

  const classAverage = classTotalSum / students.length;

  console.log("--------------------------");

  console.log("Class Average: " + classAverage.toFixed(1));
  console.log("Top Student: " + topStudentName + " with " + highestAverage.toFixed(1)
  );
}

const studentData = [
  { name: "Lany", scores: [85, 90, 92] },
  { name: "Bongbung", scores: [70, 75, 68] },
  { name: "Dutherthe", scores: [95, 98, 92] },
  { name: "Pico", scores: [55, 60, 58] }
];

const students = studentData.map (function(data) {
  return new Student(data.name, data.scores);
});

analyzeClass(students);
