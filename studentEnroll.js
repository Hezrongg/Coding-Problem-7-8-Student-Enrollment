const subjects = {
    DSA: [],
    PL: [],
    Networks: []
};

function enrollForm() {
    let subjectChoice = prompt("Choose a subject:\n(A) DSA\n(B) PL\n(C) Networks\nEnter your choice (A, B, or C):");
    subjectChoice = subjectChoice ? subjectChoice.toUpperCase() : "";

    if (subjectChoice === 'A') {
        operationMenu("DSA");
    } else if (subjectChoice === 'B') {
        operationMenu("PL");
    } else if (subjectChoice === 'C') {
        operationMenu("Networks");
    } else {
        alert("Invalid choice. Please enter A, B, or C.");
        enrollForm();
    }
}

function operationMenu(subject) {
    let operationChoice = prompt(
        `Selected Subject: ${subject}\nChoose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit\nEnter your choice (A, B, C, or D):`
    );
    operationChoice = operationChoice ? operationChoice.toUpperCase() : "";

    if (operationChoice === 'A') {
        enrollStudent(subject);
    } else if (operationChoice === 'B') {
        unenrollStudent(subject);
    } else if (operationChoice === 'C') {
        mainMenu();
    } else if (operationChoice === 'D') {
        exitProgram();
    } else {
        alert("Invalid choice. Please enter A, B, C, or D.");
        operationMenu(subject);
    }
}

function enrollStudent(subject) {
    let studentName = prompt("Enter the name of the student to enroll:");
    if (studentName) {
        subjects[subject].push(studentName);
        alert(`${studentName} has been enrolled in ${subject}.`);
    } else {
        alert("No name entered. Enrollment canceled.");
    }
    operationMenu(subject);
}

function unenrollStudent(subject) {
    if (subjects[subject].length === 0) {
        alert(`No students enrolled in ${subject}.`);
        operationMenu(subject);
        return;
    }

    let studentList = "Enrolled students:\n";
    for (let i = 0; i < subjects[subject].length; i++) {
        studentList += (i + 1) + ". " + subjects[subject][i] + "\n";
    }

    let studentName = prompt(studentList + "\nEnter the name of the student to unenroll:");
    if (studentName) {
        let index = subjects[subject].indexOf(studentName);
        if (index !== -1) {
            subjects[subject].splice(index, 1);
            alert(`${studentName} has been unenrolled from ${subject}.`);
        } else {
            alert(`${studentName} is not enrolled in ${subject}.`);
        }
    } else {
        alert("No name entered. Unenrollment canceled.");
    }
    operationMenu(subject);
}

function exitProgram() {
    let result = "Final Enrolled Students per Subject:\n";
    for (let subject in subjects) {
        result += subject + ": ";
        if (subjects[subject].length > 0) {
            result += subjects[subject].join(", ");
        } else {
            result += "No students enrolled";
        }
        result += "\n";
    }
    alert(result);
}


enrollForm();