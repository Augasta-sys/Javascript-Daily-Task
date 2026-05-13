// Task 1 - Basic Function

function welcomeUser(name) {
    console.log("Welcome", name);
}
welcomeUser("Naveen");
// Welcome Naveen


// Task 2 - Parameter + Return

function squareNumber(num) {
    return  num * num;
}
console.log(squareNumber(5));
// 25


// Task 3 - Object Function

let emp3 = {
    name: "Rahul",
    salary: 50000
}
function employeeBonus(bonus) {
    console.log(emp3.name);
    console.log(emp3.salary+bonus);
}
employeeBonus(5000);
// Rahul  55000


// Task 4 - Scope checking

function scopeCheck() {
    if (true) {
        var h1 = "global scope"
        let h2 = "let - block scope"
        const h3 = "const - block scope"
        console.log(h2);
        console.log(h3);
    }
    console.log(h1);
}
scopeCheck()
// let - block scope
// const - block scope 
// (Let and const are block scope. So it won't work when access from the outside block. It shows error).
// global scope 
// (var is a global scope. It can be accessable from the outside block).


// Task 5 - Arrow Function

let add1 = (a,b) => {
    console.log(a+b);
}
add1(6,8);
//14


// Task 6 - Callback Function

function multiply (a,b) {
    return a * b;
}
function calculator(callback,x,y) {
    console.log(callback(x,y));
}
calculator(multiply,5,2);
//10


// Task 7 - Generator Function

function* offers() {
    yield "50% offer"
    yield "Free Delivery"
    yield "Cashback"
}
let printVal = offers()
console.log(printVal.next().value);
console.log(printVal.next().value);
console.log(printVal.next().value);
// 50% offer
// Free Delivery
// cashback


// Task 8 - Default Parameter

let student1= function (name, course="Javascript") {
    console.log("Name:", name);
    console.log("Course:", course);
}
student1("Divya", "Python")
student1("Pooja")
// Name: Divya   Course: Python
// Name: Pooja   Course: Javascript


// Task 9 - Currying

function multi(a) {
    return function (b) {
        return function (c) {
            console.log( a * b * c);
        }
    }
}
multi(2) (3) (4)
// 24


// Task 10 - Spread Operator

let arr2 = [1,2,3]
let arr3 = [4,5,6]
let totalArray = [...arr2,...arr3]
console.log(totalArray);
// [1,2,3,4,5,6]


// Task 11 - Object Spread 

let obj1 = {
    Name: "Navi"
}
let obj2 = {
    Role: "Developer"
}
let totalObj = {...obj1,...obj2}
console.log(totalObj);
// {Name: 'Navi, Role: 'Developer'}


// Task 12 - Rest Operator

function numbers(...num) {
    console.log(num);
    let sum = 0 ;
    for (let n of num) {
        sum += n;
    }
    console.log(sum);
}
numbers(1,2,3,4);
//[1,2,3,4] 
// 10


// Mini Challenge

let students = [];
    function addStudents(name, marks) {
        let student = {name, marks};
    students.push(student);
}

function printStudents ()  {
    students.forEach((student) => {
        console.log(student);
    });
}

function calculateMarks(callback, marks) {
    return callback(marks);
}

function bonusMarks(marks) {
    return marks + 5;
}

 function addBonus(...studentNames) {
    students = students.map((student) => {
        if(studentNames.includes(student.name)) {
            return {
                ...student,
                marks: calculateMarks(bonusMarks, student.marks)
            };
        }
        return student;
    });
 }
addStudents("Kavi", 86);
addStudents("Mani", 67);
addStudents("Pavi", 98);
printStudents();
addBonus("Kavi", "Mani");
console.log("After Bonus:");
printStudents();
// {name: 'Kavi', marks: 86}
// {name: 'Mani', marks: 67}
// {name: 'Pavi', marks: 98}
// After Bonus:
// {name: 'Kavi', marks: 98}
// {name: 'Mani', marks: 72}
// {name: 'Pavi', marks: 98}









