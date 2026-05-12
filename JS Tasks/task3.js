// Looping Statements
 
// 1. Print Numbers

for (let a=1; a <=20; a++) {
    console.log(a);
}  
// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20


// 2. Odd Numbers

for (let i=1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log("Odd:-", i);    
    }
}
// Odd:- 1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49


// 3. Multiplication Table

for(let m1=1; m1 <= 10; m1++) {
    console.log("7 x" , m1 , "=" , (7 * m1));
}
// 7x1=7, 7x2=14, 7x3=21, 7x4=28, 7x5=35, 7x6=42, 7x7=49, 7x8=56, 7x9=63, 7x10=70


// 4. Reverse Counting

let value = 20
while(value >= 0) {
    console.log(value);
    value--
}
// 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0

// 5. Sum of Numbers

let sum = 0
for(let s1=1; s1 <= 100; s1++) {
    sum += s1;
}
console.log("Total sum:-", sum)
// Total sum:- 5050

// 6. Array Loop

let arr1 = ["apple", "banana", "orange", "grapes"];
for(let c of arr1) {
    console.log(c);
}
// apple, banana, orange, grapes

// 7. Count Even Numbers

let number = 0
for(let e1=1; e1 <= 50; e1++) {
   if (e1 % 2 == 0) {
    number++;
   }
}
    console.log("Number of Even Numbers:-", number);
// Number of Even Numbers:- 25


// 8. Star Pattern

for(let r1 = 1; r1 <= 5; r1++){
    let stars = "";
for(let st = 1; st <= r1; st++){
        stars += "*";
    }
    console.log(stars);
}
// *
// **
// ***
// ****
// *****


// 9. Simple function

function welcome() {
    console.log("Welcome to Javascript");
}
welcome()
// Welcome to Javascript


// 10. Function with parameter

function one(name) {
    console.log("Hello" , name);
}
one("Naveen");
// Hello Naveen


// 11. Add Two Numbers

function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
//30


// 12. Salary Bonus

function ts(salary, bonus) {
    return salary + bonus;
}
console.log(ts(50000, 5000));
// 55000


// 13. Object Loop

let student = {
    Name: "Rahul",
    Course: "Javascript",
    Marks: 95
}
for (let stu in student) {
    console.log(stu + ":" + student[stu]);
}
// Name: Rahul
// Course: Javascript
// Marks: 95


// 14. Find largest Number

function largest(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
}
}
console.log(largest(10, 50));  // 50


// 15. Mini Employee Task

let emp = {
    Name: "Sam",
    Department: "Developer",
    Salary: 50000
}
function getObj(bonus) {
    console.log("Name:", emp.Name);
    console.log("Department:", emp.Department);
    console.log("Salary:", emp.Salary + bonus);
}
getObj(5000)
// Name: Sam
// Department: Developer
// Salary: 55000