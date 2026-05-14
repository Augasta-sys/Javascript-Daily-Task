// Task 1 - Student Registration Form

let studentname = prompt ("What is your name?");
let department = prompt ("Enter your department");
let age1 = prompt("What is your age?");
console.log("Welcome", studentname);
console.log("Department:", department);
console.log("Age:", age1);
// Welcome Naveen
// Department: E.C.E
// Age: 20


// Task 2 - ATM Withdrawal Systemgfh

let balance = 10000
let amount = Number(prompt("Withdrawal Amount:"));
if( amount > 100 && amount <= balance) {
    console.log("Transaction Successful");
} else if (amount < 100){
    console.log("Minimum balance is 100");
} else {
    console.log("Insufficient Balance");
}
// Withdrawal Amount: 100 upto 10000 - Transaction Successful
// Withdrawal Amount: 0 to 99 - Minimum balance is 100
// Withdrawal Amount: Above 10000 - Insufficient Balance


// Task 3 - Swiggy Discount Checker

let amount1 = Number(prompt("Order Amount:"));
let orderAmount = amount1 >= 499
 ?"Free Delivery Available"
 :"Delivery Charges Applied";
 console.log(orderAmount); 
// Order Amount: Above 499 - Free Delivery Available
// Order Amount: 0 to 498 - Delivery Charges Applied


// Task 4 - Instagram Login System

let username1 = prompt("User Name:");
if (username1 == "admin") {
    let password = prompt("Password:");
    if (password ==  "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    } 
    } else {
        console.log("Invalid Username");
    }
// User Name: admin
// Password: 1234 - Login Success
// Password: any other thing - Wrong Password
// User Name: any other name - Invalid Username


// Task 5 - Traffic Signal System

let trafficrules = prompt("Signal:");
switch (trafficrules) {
    case "red": console.log("STOP");
    break;
    case "yellow": console.log("READY");
    break;
    case "green": console.log("GO");
    break;
    default: console.log("Follow Traffic Rules");
}
// Signal: red - STOP, yellow - READY, green - GO


// Task 6 - Employee Salary Calculator

function salaryCalculation (salary , bonus) {
    return totalSalary = salary + bonus;
    return totalSalary;
}
console.log(salaryCalculation(25000,5000));
// 30000


// Task 7 -  E-Commerce Cart Total

let price = [100,200,300,400];
let total = 0;
for(let i=0; i < price.length; i++) {
    total = total + price[i];
}
let average = total / price.length;
console.log("Total Price:", total);
console.log("Average Price:", average);
// Total Price: 1000
// Average Price: 250


// Task 8 - WhatsApp contact Book

let obj5 = {
     Name: "John",
     Phone: "123456789",
     Status: "Hello"
};
for(let details in obj5) {
    console.log(details , ":" , obj5[details]);
}
// Name: John
// Phone: 123456789
// Status: Hello


// Task 9 - Movie Ticket Booking

function payment() {
    console.log("Payment Successful");
}
function bookTicket() {
    console.log("Booking Completed");
}
payment(bookTicket());
// Booking Completed
// Payment Successful


// Task 10 - Food Delivery Time Tracker

function * orderStages() {
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}
let order = orderStages()
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
// Order Confirmed
// Preparing Food
// Out for Delivery
// Delivered