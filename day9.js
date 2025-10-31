// normal anonymous function
var a=function(){
    a="color"
    b="blue"
    console.log(a,b)
}
a();

// parameterized anonymous function
var a1=function(c,d){
    console.log(c*d)
}
a1(3,7);

// returned  anonymous function
var a=function(){
    a="color"
    b="blue"
    return a,b
}
console.log(a());

// anonymous arrrow  function
var a4=()=>{
    n="raj"
    salary=30000
    // console.log(n,d)
}
a4();

// parameterized arrow anonymous function
var a5=(j,k)=>{
    console.log(j-k)
}
a5(9,3)

// anonymous function
var a= function(){
    a1='red'
    a2='green'
    console.log(a1,a2)
    return {name:a1,name2:a2}
}
console.log(a())

// parameterized function
var b=function(b1,b2){
    console.log(b1,b2)
    return["values",b1*b2]
}
console.log(b(2,4))

// anonymous arrow function
var c=()=>{
    c1=true
    c2=false
    console.log(c1,c2)
}
c()

// arrow parameterized  function
var d=(d1,d2)=>{
    return{name:d1,place:d2}
}
console.log(d("honey"));   // place: undefined
console.log(("annaram"))  //  place: undefined

 // 2nd way------anonymous parameterized arrrow function
var e=(e1,e2)=>({name:e1,place:e2})
console.log(e("hanvitha","b_annaram"))

// anonymous return arrow
var f=(f1,f2)=>{
    return['id:',f1,'blood_group:',f2]
}
console.log(f(21164,"b+"))

// anonymous 

let g=(g1,g2)=>g1*g2;
console.log(g(2,4))


// callback function
function bat(){
    console.log("bat is for cricket")
}
function cat(a,b){
    let c=a*b
    console.log(c)
}
function mat(m1){
    console.log("hi")
}
mat(bat(),cat(2,3))

// // 2-----------callback function
function bat(){
    console.log("hiii people")
}
function cat(cat1,cat2){
    return{color:cat1,mob:cat2}
}
function rat(m1,fn1,fn2){
     console.log('hello',m1)
    fn1()
    let f=fn2("blue",4444)
   console.log(f)
}
rat("this is rat",bat,cat)

// higher order function
function greet (name){
    console.log('hello'+name)
}
function high(call){
    call('naveen')
    console.log('hii')
}
high(greet)

// IIFES--immediately invoked function expression
(()=>{
    document.write('hii');
})();

(function (){
    console.log('one');
})();