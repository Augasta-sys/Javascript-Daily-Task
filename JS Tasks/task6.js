// Task 1 - Student Attendance System

let presentStudents = ["Jeeva", "Kaviya", "Mary"] 
let absentStudents = ["Fathima", "Aishu"]
let paStudents = [...presentStudents,...absentStudents]
paStudents.push("Hema");
console.log(paStudents);
// (6) ['Jeeva', 'Kaviya', 'Mary', 'Fathima', 'Aishu', 'Hema']


// Task 2 - E-Commerce Cart

let mobileDetails = {
    model: "iphone",
    price: 150000
}
let chargerDetails = {
    type: "fast charger",
    warranty: "1 year"
}
let finalObject = {...mobileDetails,...chargerDetails,deliveryDate: "25 May 2026"};
console.log(finalObject);
// {model: 'iphone', price:150000, type:'fast charger', warranty:'1 year', deliveryDate:'25 May 2026'}


// Task 3 - Food Delivery App

function orderFood(...items) {
    console.log("Total items ordered:", items.length);
    console.log("First item:", items[0]);
    console.log("Last item:", items[items.length - 1]);
}
orderFood("Dosa", "Poori", "Chapathi", "Pongal");
// Total items ordered: 4
// First item: Dosa
// Last item: Pongal


// Task 4 - Employee Salary Filter

let employeeObjects = [
    {name:"Varun", salary: 30000},
    {name:"Kamini", salary: 40000},
    {name:"Vidya", salary: 50000},
    {name:"Lily", salary:60000},
    {name:"Amit", salary: 70000}
]
let highSalaryEmployees = employeeObjects.filter((c,i,t) => {
    return c.salary>50000})
console.log(highSalaryEmployees);
// 0: {name: 'Lily', salary:60000},
// 1: {name:'Amit}, salary:70000}
// length:2


// Task 5 - Online Game Score Board

let scores = [100, 200, 300, 400, 500];
let totalScore = scores.reduce((total, scores) => {
    return total + scores}, 0);
console.log("Total Score:", totalScore);
// Total Score: 1500