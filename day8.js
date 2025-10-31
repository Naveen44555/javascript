function user(a,b){
    console.log(a+b)
    return a+b
}
user(2,3)

function emp(a,b){
    c=5
    d=8
    return c+d
}
console.log(emp())

function user(length,breadth){
    length=10
    breadth=5
    rectangle=length*breadth
    console.log(rectangle)
}
user()

function user(length,breadth){
    a=7
    return length*breadth
    console.log(a)
}
console.log(user(10,6))


// -------------------arrow functions - 4

// arrow function
var cd=()=>{
    cd="naveen"
    console.log(cd)
}
cd();

// Named arrow function
var person=(name)=>{
    name=8
    console.log(name)
}
person()

// parameterized arrow
var person1=(id,color)=>{
    console.log(id,color)
}
person1(5,"red")

//  arrow ṛerturn
var person2=(a,b)=>{
    return a*b
}
console.log(person2(3,5));

//arrow ṛerturn and parameterized
var person3=(a,b)=>{
    return a*b
}
console.log(person3(3,"naveen"))   //NaN
console.log(person3(3,5))   


function color(){
    a1="blue"
    a2="red"
    return [a1,a2]
    return {first:a1,second:a2}
    // return [first=a1,second=a2]
    // console.log(first=a1)
    
}
console.log(color())  //[ 'blue', 'red' ]
console.log(color()[0])  //blue


