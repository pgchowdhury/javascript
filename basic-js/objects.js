const student = { // student object
    fullname: "Prosenjit Ghosh Chowdhury",
    marks: 94.4,
    printmarks: function () {
        console.log("marks =", this.marks )
    }
}

const employee = { // employee object
    calcTax() {
        console.log("Tax rate is 10%");
    }
};

const karanArjun = {
    salary: 50000
}

// I want to use calcTax method in karnArjun object, I can use employee prototype in karanArjun
karanArjun.__proto__ = employee;
