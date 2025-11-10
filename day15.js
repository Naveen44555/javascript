// --------scopes
// scope is the accessibility/availability of a variable throughout the javascript

// types:
// 1.Global scope
// 2.local/functional scope
// 3.block scope
// 4.lexical scope

// 1. global scope
var a=33;
function whole(){
   console.log(a)
   function child1(b){
       var b=10
     if (true){ 
      console.log(a+b)
   }
}
}
whole()

// 1. global scope
var a=33;
function whole(){
   console.log(a)
   function child1(b){
     var b=10
     if (true){ 
      console.log(a+b)
   }
}
child1()
}
whole()


// 2.local / functional scope
// the variable can access / availibility inside the function only
function add(){
   var name="naveen";
   console.log(`a_value is:${name}`)   //we can access the name here because inside function
   }
if (20==20){
      console.log(`your values is :${name}`)    //we cant access the name here because outside the function
}
console.log(name)    // //we cant access the name here because outside the function
add()


// 3.block scope
// the variable which are accessible inside the block itself.
function block_1(){
   if (true){
   var b=33;
   console.log("your b value is:"+b)    //we can access because inside the block
}
// console.log("your b value is:",b)       //we can access because inside the block
}
// console.log(b)       //-------we cannot access because outside the block
block_1()


// ---------let & const
function block_1(){
   if (true){
   let b=33;         //only inside block
   console.log("your b value is:"+b)    //we can access because inside the block
}
// console.log("inside b vlaue is:",b)       //we canot  access because outside the block
}
// console.log(b)       //-------we cannot access because outside the block
block_1()


// 4.lexical scope
// calling / accessing the parent function in the child function

function parent(){
   // var name="honey"
   var value3=96;
   function child1(){
      var value4=24;
      console.log(value3+value4)    //we can access from parent values to child 
   }                                //but we canot acceess child values to parent
   child1()
}
parent()

// ----------------vice versa
function parent(){
   var value3=96;
   console.log(value3+value4)  //vice versa     //but we canot acceess child values to parent
   function child1(){
      var value4=24;
      console.log(value3+value4)    //we can access from parent values to child 
   }                                
   child1()
}
parent()


// closures
function outer(){
   var a1="naveen"
   function inner(){
      console.log(a1)
   }
   return inner();
}
var result=outer()
// console.log(result)     //undefined

// -------------------------problem

// function values(a,b,c){
//    if (a==13 || b==13 ||c==13){
//     return "nothing"
//    }
//    else if (a==13){
//     return 0;
//    }
//    else if (b==13){
//     return a;
//    }
// }
// // console.log(a)
// console.log(values(10,13,1));


