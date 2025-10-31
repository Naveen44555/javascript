// // // hoisting
// // console.log(place)
// // place="nalgonda"

// // console.log(p);
// // let p="naveen"

// // // forin
// // for

// var  marks={
//     nitya:120,
//     raju:110,
//     eashwar:111,
//     srikant:144
// }
// for (var m in marks){
//     console.log(`${m} got ${marks[m]} marks`)
// }

// // hoisting

// --------variable hoisting

// console.log('hoisting');
// console.log(place) ;    //undefined
// var place="hyd"

// console.log(color);     // ReferenceError:
// let color='red'

// console.log(pincode)   // ReferenceError:
// const pincode=3344


// // -----------function hoisting
// fun_name();
// function fun_name(){        //ReferenceError:
//     console.log(a+b);       
//     a=4
//     b=6
// }
// fun_name()

// //--------
// function fun_name(a,b){
//     console.log(a+b);       //NaN
//     a=4
//     b=6
// }
// fun_name()


// // --------
// f_name();
// var f_name=()=>{             //type error
//     console.log("hiu hello")
// }



// ---------for in 
// // it will work with objects
// var person={
//     name:"john",
//     age:33,
//     village:'annaram'

// }
// for (var p in person){
//     console.log(`your ${p} is ${person[p]}. `)
// }

// // for off
// var colors=["blue","red","green","black","yellow"]
// for (var c of colors){
//     console.log(`color name is:${c}`)
// }

// // ----------if we use for in instead 
// // of off it return index value
// var colors=["blue","red","green","black","yellow"]
// for (var c in colors){
//     console.log(`index value is:${c}`)
// }

var a=["blue","red"]
for (var i of a){
    console.log(`your color ${i}`)
}