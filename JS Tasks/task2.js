// Task 1 - Predict the output

console.log("10"+ 5)
console.log(typeof ("10" + 5))

console.log(10 + true)
console.log(typeof (10 + true))

console.log(false + null)
console.log(typeof (false + null))

console.log("Hello" + undefined)
console.log(typeof ("Hello" + undefined))

console.log([1,2] + 5)
console.log(typeof ([1,2] + 5))

//Task 2 - Implicit Type Casting

console.log("5" + 56)
console.log(typeof ("5" + 34))

console.log(true + 87)
console.log(false + 99)
console.log(typeof (false + 76))

console.log([6,7,9] + "win")
console.log(typeof ([2,3,4] + "five"))

console.log({g:8} + 77)
console.log(typeof ({h:4} + 67))

console.log(null + 43)
console.log(typeof (null + 690))

// Task 3 - Explicit Type Casting

console.log(Number ("500"))
console.log(Number (true))
console.log(Number (false))
console.log(Number (null))
console.log(Number ("abc"))
console.log(Number ([100]))

// Task 4 - Boolean Construtor

console.log(Boolean (""))
console.log(Boolean ("javascript"))
console.log(Boolean (0))
console.log(Boolean (1))
console.log(Boolean (null))
console.log(Boolean (undefined))
console.log(Boolean ([]))
console.log(Boolean ({}))

// Task 5 - Student Pass or Fail

let mark = 62

if (mark > 35) {
    console.log("Pass")
} 
else{
    console.log("Fail")
}

// Task 6 - Voting Eligibility

let age = 36

if (age >= 18) {
    console.log("Eligible")
} 
else{
    console.log("Not Eligible")
}

// Task 7 - Greatest Number

let a1 = 50
let b1 = 80
let c1 = 30

if ( a1 > b1 && a1 > c1) {
    console.log("A is the greatest")
}
else if (b1 > a1 && b1 > c1) {
    console.log("B is the greatest")
}
else{
    console.log("C is the greatest")
}

// Task 8 - Traffic Light System

let trafficlight = "green"
switch(trafficlight) {
    case "red": console.log("STOP")
    break;
    case "yellow": console.log("READY")
    break;
    case "green": console.log("GO")
    break;
    default: console.log("See the Signal")
}

// Task 9 - Login System

let username = "admin"
let password = "1234"

if (username == "admin") {
    if (password == "1234"){
        console.log("Login Successfully")
    }
    else{
        console.log("Invalid Password")
    }
}
else{
    console.log("Invalid Login")
}

// Task 10 - Session Finder

let hour = 5
if (hour >= 1 && hour <= 12) {
    console.log("Morning")
}
else if (hour >= 13 && hour <= 15) {
    console.log("Afternoon")
}
else if (hour >= 16 && hour <= 19) {
    console.log("Evening")
}
else if (hour >= 20 && hour <= 24) {
    console.log("Night")
}

//Bonus Challenge
// (1+1)=2
// 5-2=3
// (string + number) 52
// (0+1) = 1
// NaN
// true
// 1



