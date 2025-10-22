// String--collection of characters
// ---Group of characters

// ---methods
var a='     miryalaguda     '
const b='huzurnagar'
// // var b=(1,2,3,4)

// // 1.charAT ---used to display / obtain the character at particular index
// // negative index not accepted
// // if give negative empty space created
// console.log(a.charAt(3))  

// // 2.charcodeAt----ASCII(IT Provide ascii value of char by passing index value)
// console.log(a.charCodeAt(9))

// // 3.at----at specified index position what value is present
// // same as charAT ,negative index accepted
// // if extra number given ---(NAN)
// console.log(a.at(-2))

// // 4.concat 
// console.log(a.concat(" ",b))
// console.log(a.concat(" "+b))

// // 5.includes
// console.log(a.includes('a'))

// // 6.indexof
// // if present gives index value, if not (-1) shows
// console.log(a.indexOf('g'))

// 7.lastindexof
console.log(a.lastIndexOf('a'))

// 7. lastIndexOf
console.log(a.lastIndexOf('p')) //-1

// 8 length
console.log(a.length)

// 9.touppercase
console.log(a.toUpperCase())


// 10.toLowerCase
console.log(a.toLowerCase())

// 11.trim
console.log(a.trim())

// 12.trimstarts----leading,trailing
console.log(a.trimStart())

// 13.trimend
console.log(a.trimEnd())

// 14.slice
var d=b.slice(1)
console.log(d)

// 15.substring
console.log(b.substring(2))

c=444555

// 16.toString
d=c.toString()
console.log(d)
console.log(typeof(d))

let nn=4
//17.padstart
console.log(String(nn).padStart(4,'8'))

// 18.padend
console.log(String(nn).padEnd(4,'8'))

// 19.replace
console.log(a.replace('a',"A"))
console.log(a.replaceAll('a',"A"))

var g='naveen'
var f='naveen'
// 20.loacalecompare
console.log(g.localeCompare(f))

console.log('mango'.localeCompare('ma'))   //1
console.log('apple'.localeCompare('mang'))  //-1

// 21.startsWith()---boolean
console.log(g.startsWith('n'))

// 22.endsWith
console.log(g.endsWith('n'))

// 23.repeat
console.log(g.repeat(2))

gg='naveen,8,9,0,5'
// 24.split
console.log(gg.split(','))


