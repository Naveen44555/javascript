var date=new Date()
console.log(date)       //2025-11-01T09:18:15.585Z
console.log(date.toString())       // Sat Nov 01 2025 14:48:39 GMT+0530 (India Standard Time)

console.log(date.toLocaleDateString())      //1/11/2025

var date1=new Date(2020,2,12,5,24,56,333)
console.log(date1)

var a=new Date(2025,2,11,22,45,55);
console.log(a)

var date=new Date()
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())

date.setFullYear(2020)
console.log(date.toString())

date.setMonth(10)
console.log(date.toString())

date.setDate(4)
console.log(date.toString())

date.setHours(22)
console.log(date.toString())

date.setMinutes(49)
console.log(date.toString())

date.setSeconds(54)
console.log(date.toString())

date.setMilliseconds(433)
console.log(date)
date.getTime()
console.log(date.toString())

console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())


// ---------
// date methods
var date=new Date()
console.log(date)
console.log(date.getFullYear())

console.log(date.getMonth())

// console.log(date.getDate)       //[Function: getDate]

console.log(date.getDay())  //index value like sunday=0

console.log(date.getHours())
console.log(date.toString())    //Mon Nov 03 2025 21:42:59 GMT+0530 (India Standard Time)
console.log(date.toUTCString())         //Mon, 03 Nov 2025 16:21:13 GMT

console.log(date.toTimeString())        //21:48:06 GMT+0530 (India Standard Time)
console.log(date.toLocaleDateString())      //3/11/2025
console.log(date.toLocaleTimeString())      //9:45:57 pm

console.log(date.toLocaleString())        // 3/11/2025, 9:44:37 pm

console.log(date.toISOString())         //2025-11-03T16:19:32.351Z


console.log(date.toJSON())        
console.log(date.getDate())     

var date2=new Date(2022,15,1,3,2,55,333)
console.log(date2)

console.log(date.getDate())
console.log(date.getDay())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())

var d1 = new Date('2025-11-03');
var d2 = new Date('2025-11-05');
console.log(d1.getTime()); // difference in milliseconds

var date4=new Date(2025,1,15,2,19,34)
console.log(date4)

console.log(date.getUTCDate())
console.log(date.getUTCDay())
console.log(date.getUTCMinutes())
console.log(date.getUTCFullYear())


// -------------set methods
var set1=new Date
set1.setFullYear(2200)
console.log(set1)

set1.setHours(22)
console.log(set1)

set1.setMinutes(44)
console.log(set1)

set1.setTime(3,44,45,678)
console.log(set1)

set1.setUTCMilliseconds(879)
console.log(set1)