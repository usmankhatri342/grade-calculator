function calculateGrade() {
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);
    let subject4 = parseFloat(document.getElementById('subject4').value);

    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4)) {
        document.getElementById('result').innerText = "Please enter valid scores for all subjects.";
        return;
    }

    let total = subject1 + subject2 + subject3 + subject4;
    let percentage = (total / 400) * 100;
    let grade = '';

    if (percentage >= 90) {
        grade = 'A+';
    }
    else if (percentage >= 80) {
        grade = 'A';
    } 
    else if (percentage >= 70) {
        grade = 'B';
    }
     else if (percentage >= 60) {
        grade = 'C';
    } 
    else if (percentage >= 50) {
        grade = 'D';
    }
     else {
        grade = 'F';
    }

    document.getElementById('result').innerText = `Total: ${total}, Percentage: ${percentage.toFixed(2)}%, Grade: ${grade}`;
}
