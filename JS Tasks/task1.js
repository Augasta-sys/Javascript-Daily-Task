// section 1 - Variables

var a = 10;
a = 15;
console.log(a);

/* let b = 20;
let b = 30;  */ 
// Redeclaration is not acceptable in let.

const c = 50;
console.log(c);

/* const x = 10;
x = 20;  */
// Constant is a static / fixed value. It cannot be changed.

var p = 5;
var p = 10;
console.log(p);

let q = 25;
q = q + 10;
console.log(q);

const r = 7;
console.log(r + 3);

let d = 10;

//Section 2 - Console Methods

/* 9) console.log();
10) console.warn();
11) console.error();
12) console.clear(); helps to clear the console screen. */

// Section 3 - Data Types

let m = "hello";
console.log(typeof m);

let f = 100;
console.log(typeof f);

let g = false;
console.log(typeof g);

let h;
console.log(h);

let i = null;
console.log(typeof i);

let j = "25"
console.log(typeof 25);

// Section 4 - Arrays

let fruits = ["kiwi", "avacado", "mango"];
console.log(fruits);

let arr = ["a","b","c"];
console.log(arr[1]);

let ar = ["x","y","z"];
console.log(ar[ar.length-1]);

console.log(fruits[0]);

let fruit = ["apple","banana"];
console.log(fruit.length);

let fru = ["kiwi", "avacado", "mango"];
fru.push("Grapes");
console.log(fru);

//Section 5 - Objects

let obj = {
    name : "Augasta",
    age : 34
};

let ob = {name:"Naveen"};
console.log(ob.name);

let k = {
  fruits: ["apple","banana"]
};
console.log(k.fruits[1]);

let veg = ["onion", "tomato", "potato"];
console.log(veg[veg.length-1]);

// Section 6 - Arithmetic Operators

console.log(5 + 3);

console.log(10 % 3);

console.log(2 ** 3);

console.log(10 / 2);

// Section 7 - Increment/ Decrement

let l = 5;
l++;
console.log(l);

let s = 5;
let t = s++;
console.log(s, t);

let x = 5;
let y = ++x;
console.log(x, y);

let u = 3;
let v = u--;
console.log(u, v);

//Section 8 - Comparison & Logical 

console.log(5 == "5");

console.log(5 === "5");

console.log(true && false || true);

5 > 3 ? console.log("Yes") : console.log("No");