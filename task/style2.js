// 1-------array basics
// // 1. index wise show
// var colors=['blue','greeen','yellow','white','black']
// console.log(colors[1],colors[4])

// // 2 splice
// var numbers=[1,44,66,77,99]
// // Syntax: arrayName.splice(startIndex, deleteCount, item1, item2, ... )
// numbers.splice(0,1,100)
// console.log(numbers)

// // 3.typeof
// var list=['naveen',6,8.8,true,]
// for (let i=0; i<list.length; i++){
//     // console.log(list[i]),
//     console.log(( list[i]),"=>",typeof (list[i]))
// }

// // 4inside inside array access
// var arr=[1,2,[4,5]]
// console.log(arr[2][1]);
 
// // 5.lenth 
// var a=[1,3,4,"naveen",true,78]
// console.log(a.length)

// --------2. push(), pop(), shift(), unshift()
// // 6 push
// let fruits=['apple','banana','cherry','grapes','mango']
// fruits.push('pineapple')
// console.log(fruits)

// 7 pop
// let fruits=['apple','banana','cherry','grapes','mango']
// fruits.pop()
// console.log(fruits)

// // 8 unshift
// let fruits=['apple','banana','cherry','grapes','mango']
// fruits.unshift('c_apple','lemon')
// console.log(fruits)

// // 9.shift
// let fruits=['apple','banana','cherry','grapes','mango']
// fruits.shift()
// console.log(fruits)

// // 10 push pop
// let fruits=['apple','banana','cherry']
// fruits.push('nnn')
// fruits.pop()
// console.log(fruits)

// // 3. slice() and splice()
// // 11. Create an array [10, 20, 30, 40, 50] and use slice() to extract [20, 30].
// var arr= [10, 20, 30, 40, 50] 
// a=arr.slice(1,3)
// console.log(a)

// // console.log(arr.indexOf(10))
// // 12. Using the same array, use splice() to replace 30 with 35.
// var arr= [10, 20, 30, 40, 50] 
// arr.splice(2,1,35)
// console.log(arr)

// // 13. Insert 25 before 30 using splice().
// var arr= [10, 20, 30, 40, 50] 
// arr.splice(2,0,25)
// console.log(arr)

// //  14. Remove the last two elements using splice().
// var arr= [10, 20, 30, 40, 50] 
// arr.splice(2,2,25)
// console.log(arr)

// //   15. Use slice() to copy the first three elements into a new array.
// var arr= [10, 20, 30, 40, 50] 
// let a=arr.slice(0,3)
// console.log(a)
// console.log(arr)

// -----------4. concat(), join(), toString()
// // 16 Create two arrays [1,2,3] and [4,5,6] and merge them using concat().
// var a=[1,2,3]
// var b=[4,5,6]
// var c=a.concat(b)
// console.log(c)

// //    17. Convert an array of names into a string separated by commas using join().
// a=['naveen',44,5.66,'ajay','sun']
// b=a.join(',')
// console.log(b)

// // 18 toString() 
// var a=[2,34,5,66];
// var b=a.toString();
// console.log(b);
// console.log(typeof(b))

// // 19
// var a=['naveen',44,5.66,'ajay','sun']
//  var b=[1,2,3]
// var c=[4,5,6]
// var d=a.concat(b,c)
// console.log(d)

// // 20
// var city=['hyd','banglore','chennai','dcl','delhi']
// b=city.join('_')
// console.log(b)

// // 21 lastindexof
// var fruits=['apple','banana','orange','banana','grapes']
// a=fruits.indexOf('banana')
// console.log(a)

// // 22 
// var fruits=['apple','banana','orange','banana','grapes']
// a=fruits.lastIndexOf('banana')
// console.log(a)

// // 23
// var fruits=['apple','banana','orange','banana','grapes','mango']
// a=fruits.includes('mango')
// console.log(a)


// // ----****
// // arr.includes(num) → checks if the number exists in the array.
// // !arr.includes(num) → means “if not found”.
// // arr.push(num) → adds the number to the end of the array.
// // 24
// var a=[2,3,4,5,6,6]
// let b=22
// if (!a.includes(b)){
//     a.push(b)
//     console.log(a)
// }else{
//     console.log(a)
// }

// // 25
// var fruits=['apple','banana','orange','banana','grapes','mango','kiwi']
// if (fruits.includes('kiwi')){
//     console.log(fruits,'kiwi is already present in fruits')
// }
// else{
//     fruits.push('kiwi')
//     console.log(fruits,'kiwi fruit here we added')
// }.

//  find() and findIndex()
// // 26 
// var arr=[5, 12, 8, 130, 44]
// let b=(arr.find(arr=>arr>12))
// console.log(b)

// // 27.
// var arr=[1, 12, 88, 130, 44]
// let a=arr.findIndex(arr=>arr>3)
// console.log(a)

// // // 28
// var arr=[5, 12, 88, 130, 44]
// let even=arr.find(num => num%2==0);
// console.log(even)

// 29
// var arr=[56, 1, 88, 130, 44]
// let a=arr.findIndex(arr=> arr%2!=0)
// console.log(a)

// // 30
// let ab=[1,2,34,55,9]
// let b=ab.find(ab=> ab.lenth>5);
// console.log(b)

// //31  sort
// let ac=[5,3,8,1,2]  //ascending order
// var b=ac.sort()
// console.log(b) 

// //32  reverse
// let a=[5,3,8,1,2] 
// var b=a.reverse()
// console.log(b)

// ------------sort
// let c = [5, 3, 8, 1, 2];
// var d = c.sort((x, y) => x - y);
// console.log(d);

// //33 copywithin
// let arr=[10,20,30,40,50]
// let b=arr.copyWithin(3,0,2)
// console.log(b)

// // 34 Flatten a nested array ['a','b',['c','d'],['e',['f']]] using flat().
// let ab=['a','b',['c','d'],['e',['f']]]
// let cd=ab.flat(1)   //infinity
// console.log(cd)

// // 35 
// let nn= ['x',['y',['z',['w']]]]
// let nv=nn.flat(3)
// console.log(nv)

// // 36
// var arr=[20,21,22,23,24,25,26,27,28,29]
// var len=arr.length
// console.log(len)

// // 37
// var arr=[20,21,22,23,24,25,26,27,28,29]
// var rem=arr.pop()
// console.log(arr)

// 38 . Use array destructuring to extract first three elements into variables.
// var de=[1,2,3,4,5,6]
// var [a,b,c,...rest]=de;
// console.log(a,b,c,rest)

// // 39
// const arr=[20,21,22,23,24,25,26,27,28,29]
// arr[3]=99
// console.log(arr)

// // 40 
// var more=[11,22,33,44,55]
// var a=more.push(99)
// console.log('here we pushed element is',a,'after pushing',more)
 
// // splice
// var more=[11,22,33,44,55]
// b=more.splice(2,2,22)
// console.log(more)

// // sort
// var m=[11,22,3,44,55]
// var c=m.sort((a,b)=> a-b)
// console.log(c)

// let ac=[5,3,8,1,2]  //ascending order
// var b=ac.sort()
// console.log(b) 

// let acc=[5,3,8,1,2]  //ascending order
// var b=acc.reverse()
// console.log(b) 