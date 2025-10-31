// math methods
// We use Math methods in JavaScript to perform mathematical calculations easily and accurately 
// — instead of writing complex formulas or logic ourselves.
// 1. 🎯 To Perform Accurate Calculations
// Instead of manually writing logic for rounding or powers,
//  Math methods give ready-made, error-free

// math absolute
var v1=-44.44       //it give positive integer
console.log(Math.abs(v1))

// Math.round
var v2=344.5555         //if value greater than 5 it gives upper num
console.log(Math.round(v2))     //if lower it gives lower num

// Math.ceil
var v3=553.0        //553      
var v3=553.9    //it gives upper value after point value except zero
console.log(Math.ceil(v3))

// math.floor
let v4=55.99        //it gives lower value
console.log(Math.floor(v4))

// math.trunc
const v5=99.00          //it gives roundfigure value
console.log(Math.trunc(v5))

// math.max
var v6=[2,3,5,532,22,796]
console.log(Math.max(...v6))

// 7.math.min
console.log(Math.min(...v6))

// spread operator accepts only array 

// 8.math.sqrt
let v8=25           //which square to check
console.log(Math.sqrt(v8))

// 9.math.pow (base,exponential)
console.log(Math.pow(2,4))

// 10.math.random
console.log(Math.random())

let otp = Math.floor(Math.random() * 4000) + 1000;
console.log(otp); // Example: 4823

// ------------Number methods

// tofixed
var b1=33.44        //after decimal value how many value present
console.log(b1.toFixed(4))

// 2.parseInt()
var b2='33.44'
console.log(typeof(b2))
// --------
var c=parseInt(b2)
console.log(typeof(c))

// 3.parsefloat()
b3='88789'
d=parseFloat(b3)
console.log(typeof(d))
console.log(d)
console.log(typeof(d))

// 3.parseFloat
var c="44.55"
console.log(typeof(c))
var d=parseFloat(c)
console.log(d)
console.log(typeof(d))

// 👉 In JavaScript, all numeric values (integers and decimals) are stored in the same format, called:
// 64-bit IEEE 754 floating-point number

console.log(typeof(22.2))  //number

// 4.isInteger
var f2=3344.66       //false
var f1=3344             //true
console.log(Number.isInteger(f1))
console.log(Number.isInteger(f2))

// isNAN
b="jhk"
a=3
console.log(Number.isNaN(a))
// console.log(b-a)

// isinfinite--------is it number or numeric
console.log(Number.isFinite(a))
console.log(Number.isFinite(b))

// toprecision
var num5=44.66          //total values
console.log(num5.toPrecision(8))

