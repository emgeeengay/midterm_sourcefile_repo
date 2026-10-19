let scores = [85, 72, 91, 64, 78];

let total = 0;
let passed = 0;
let failed = 0;
let highest = 0;
let lowest = 0;


console.log("Student Scores: ");

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

console.log("");

for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    let grade;
    let result;

    if (score >= 90) {
        grade = "Excellent";
        result = "Passed";
    } else if (score >= 80) {
        grade = "Very Good";
        result = "Passed";
    } else if (score >= 75) {
        grade = "Good";
        result = "Passed";
    } else {
        grade = "Failed";
        result = "";
    }

    console.log("Student " + (i + 1) + ": " + score + " - " + grade + " - " + result);

    total = total + score;

    if (score > highest) {
        highest = score;
    } if (score < lowest) {
        lowest = score;
    }

    if (score >= 75) {
        passed++;
    } else {
        failed++;
    }
}

let average = total / scores.length;


console.log("");
console.log("Total Score: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);
