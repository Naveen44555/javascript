// // // Q1. Find the first non-repeated character

// function nonrep_char(str){
//     for (i=0; i<str.length; i++){
//         let char=str[i];    //a,a,b,b,c
//         if (str.indexOf(char)===str.lastIndexOf(char)){  //0,1
//             return char;
//         }
//     }
//     return null;
// }
// console.log(nonrep_char("aabbc"))


// Q2. Convert temperature series from Celsius to Fahrenheit

// function celsius_to_fahrenheit(temp){
//     let fahrenheit=(temp*9/5)+32;
//     console.log(fahrenheit)
// }
// celsius_to_fahrenheit(100)


// // Q3. Reverse words in a sentence (preserve spacing)

// function change(name){
//      let dummy=" "
//     for ( i=name.length-1;i>=0; i--){      
//         let char = name[i]
//         dummy=dummy + char;
//         // console.log(i)
//     }
//      console.log(dummy)
// }
// change("hell world!")


// // Q4. Sum digits until single digit
// function digitalRoot(n){
//     while(n>=10){
//         let sum=0;
//         let a=n.toString();
//         for (let i=0; i<a.length; i++){
//            sum+=Number(a[i]);
//         }
//         n=sum;     
//     }
//     return n;
// }
// console.log(digitalRoot(49));


// // Q5. Check if object is empty
// function isEmptyObject(obj) {
//     return Object.keys(obj).length === 0;
// }
// // Example test cases
// console.log(isEmptyObject({}));           // true  → no properties
// // console.log(isEmptyObject({name: "Naveen"})); // false → has one property


// // Q6. Generate Range of Numbers
// function range(start, end, step = 1) {
//     let arr = [];
//     if (step === 0) {
//         console.log("Step cannot be zero");
//         return arr;
//     }
//     // When step is positive
//     if (step > 0) {
//         for (let i = start; i <= end; i += step) {
//             arr.push(i);
//         }
//     }
//     // When step is negative
//     else {
//         for (let i = start; i >= end; i += step) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// // Example test cases
// console.log(range(0,0));        // [1, 2, 3, 4, 5]
// // console.log(range(1, 10, 2));    // [1, 3, 5, 7, 9]
// console.log(range(10, 1, -2));   // [10, 8, 6, 4, 2]

// var data = "please like and subsribe";
// var s_text = "a";
// var count = data.split(s_text).length - 1;
// console.log(count);


// var a="hello how are you";
// var letter="o";
// var count2= a.split(letter).length-1
// console.log(count2)

// var a="raju kumar how are you"
// // var b=a.split("").reverse()  //[ 'o', 'l', 'l', 'e', 'h' ]
// var b=a.split("").reverse().join('')
// console.log(b)


// // Q3. Reverse words in a sentence (preserve spacing)
// function string1(a){
//     // var b=a;
//     // var string=""
//     for (i=0; i<string1.length; i++){
//         console.log(string1[i])
//         // if (i==" "){
//         //     string=string
//         // }
//         // else{
//         //     string=string+i
//         // }
//         // console.log(string)
//     }
// }
// string1("Hello world!")


// var a="hello world";
// var b=[]
// for (let i=0; i<a.length; i++){
//     // b=.push(i)
//     b=a(i)
//     b=a[i]
// }
// console.log(b)




// function string1(a){
//     var b=a;
//     var string=""
//     for (i in b){
//         if (i!=" "){
//             string+=string
//         // console.log(string)
//         }
//     }
// }
// string1("Hello world!")



// Q4. Sum digits until single digit
// function digitalRoot (a){
//     for (i in a){
//         console.log(i)
//     }
// }
// digitalRoot(9)

// // Q11. Count vowels in string
// function vowels(a){
//     var b="aeiou";
//     var count=0
//     for (i in b){
//      if (a==b){
//         count+=1
//     }
// }
// console.log(count)
// }
// vowels("aeiou")


// -------------------------------------------

// console.log("hello")
// console.log(2+3+"4")    //"54",
// console.log("3"+6+9)    // 369  it goes from left to right


// {
//   var a=10; //function scope or global
//   let b=4;  //block scope
//   const c=8  //block scope
// }
// console.log(a)  //10
// // console.log(a,b,c)  //Refrence error


// // // ------ //post-fix increment 
// // let x=1;    
// // console.log(x++)  //Use the current value first
// //                 // Then increase x by 1
// //                 // After printing, x becomes 2

// // //--pre -increment
// // let y=2;
// console.log(++y)    //--pre-fix increment
// // // console.log(++x)    //increase x first, then use

