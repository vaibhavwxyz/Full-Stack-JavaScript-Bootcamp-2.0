/* Question 15.
Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
*/

function assignGrade(score) {
    switch (true) {
        case (score >= 80 && score <= 100):
            return "A";
            break;
        case (score >= 70 && score <= 89):
            return "B";
            break;
        case (score >= 60 && score <= 69):
            return "C";
            break;
        case (score >= 50 && score <= 59):
            return "D";
            break;
        case (score >= 0 && score <= 49):
            return "F";
            break;
        default:
            return "Invalid score";
    }
}

let studentScore = 85;
let studentGrade = assignGrade(studentScore);
console.log("A score of", studentScore, "corresponds to a grade of", studentGrade);
