// 1. API Task - User Names Uppercase

let api = "https://jsonplaceholder.typicode.com/users"
fetch(api)
.then((response) => {
    return response.json();
})
.then((users) => {
let upperUsers = users.map((c,i,t) => {
    return c.username.toUpperCase();
});
console.log(upperUsers);
})
// (10) ['BRET', 'ANTONETTE', 'SAMANTHA', 'KARIANNE', 'KAMREN', 'LEOPOLDO_CORKERY', 'ELWYN.SKILES', 'MAXIME_NIENOW', 'DELPHINE', 'MORIAH.STANTON'] */


// 2. API Task - Expensive Products

let api1 = "https://fakestoreapi.com/products"
fetch(api1)
.then((res) => {
    return res.json();
})
.then((products) => {
    let expensiveProducts = products.filter((product) => {
        return product.price > 100;
    });
    console.log(expensiveProducts);
});
// (8) [{...}, {...}, {...}, {...}, {...},{...}, {...}, {...}]
// 0: category: "men's clothing"
// description: "Your perfect pack for everyday use and walk"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
// price: 109.95
// rating:
// title: 


// 3. Date Concept Task - Digital Clock

let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
console.log(hours+":"+minutes+":"+seconds);
// 15:15:25


// 4. String Concept Task - Username Checker

let str = "  Naveen Kumar  ";
console.log(str.trim());
let trimmedStr = "Naveen Kumar";
console.log(trimmedStr.toUpperCase());
let upperStr = "NAVEEN KUMAR";
console.log(upperStr.includes("KUMAR"));
//Naveen Kumar
//NAVEEN KUMAR
//true


// 5. Array Concept Task - Student Rank System

let arr4 = [450, 300, 700, 200, 900]
let sortVal = arr4.sort((a,b) => {
    return b - a 
})
console.log(arr4.slice(0,3));
// (3) [900, 700, 450]


