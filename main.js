class Employee {
    constructor(id, name, email, workHours, isManager, salary, sleepHours, countMeals){
        this.i = id;
        this.name = name;
        this.mail = email;
        this.workMood = workHours;
        this.mang = isManager;
        this.salary = salary;
        this.sleepMood = sleepHours;
        this.healthRate = countMeals;
    }
    sleep() {
        return this.sleepMood == 7 ? 'Happy' : this.sleepMood > 7 ? 'Tired' : 'Lazy';
    }
    eat() {
        return  this.healthRate == 3 ? '100 healthRate' : this.healthRate == 2 ? '75 healthRate' : '50 healthRate';
    }
    work() {
        return this.workMood == 8 ? 'Happy' : this.workMood > 8 ? 'Tired' : 'Lazy';
    }
}

class Office extends Employee {
    // Method in Office class get all current employees
    getAllEmployees() {
        let empData = '';
        empArray.forEach((e) => {
            empData += `Id: ${e.i}, Name: ${e.name}, Email: ${e.mail}
`;
        });
        return empData;
    }
    // Method in Office class get employee data of given employee
    getEmployee() {
        let getEmpById = prompt('Enter employee id.');
        let empData = '';
        empArray.forEach((e) => {
            if (e.i == getEmpById) {
                if (e.mang == 'no') {
                    empData = `Id: ${e.i}, Name: ${e.name}, Email: ${e.mail}, salary: ${e.salary}`;
                } else {
                    empData = `Id: ${e.i}, Name: ${e.name}, Email: ${e.mail}`;
                }
            }
        });
        return empData;
    }
    // Method in Office class fires the given employee id
    fire() {
        let fireEmpById = prompt('Enter employee id.');
        empArray.forEach((e) => {
            if (e.i == fireEmpById) {
                empArray.splice(empArray.indexOf(e), 1);
            }
        });
    }
}



let empName;
let empEmail;
let empWorkHours;
let isMang;
let empSalary;
let empSleepHours;
let empCountMeals;
let empOpj;
let empArray = [];
let enterAgain;
let empId = 0;

enterdata();
function enterdata() {
    let operation = prompt('Enter operation. (Add, All Employees, Get Employee, Fire)');
    if (operation.toLowerCase() == 'add') {
        empId++;
        empName = prompt('Enter employee name.');
        empEmail = prompt('Enter employee email.');
        empWorkHours = prompt('Enter employee work hours.');
        isMang = prompt('Employee position is manager?');
        empSalary = prompt('Enter employee salary.');
        empSleepHours = prompt('Enter employee sleep hours.');
        empCountMeals = prompt('Enter employee meals.');
        empOpj = new Office(empId, empName, empEmail, empWorkHours, isMang, empSalary, empSleepHours, empCountMeals);
        empArray.push(empOpj);
        console.log(empArray);
        enterAgain = confirm('New operation?');
    } else if (operation.toLowerCase() == 'all employees') {
        enterAgain = confirm(empOpj.getAllEmployees());
    } else if (operation.toLowerCase() == 'get employee') {
        enterAgain = confirm(empOpj.getEmployee());
    } else if (operation.toLowerCase() == 'fire') {
        empOpj.fire();
        enterAgain = confirm('Empolyee Fired!');
    }
    enterdataagain();
}

function enterdataagain() {
    if (enterAgain) {
        enterdata();
    }
}