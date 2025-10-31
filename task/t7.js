// named function
function greetuser(job,id){
    job='dev'
    id=7
    console.log(job,id)
}
greetuser()

// 2.parameterized function
function user(salary,location){
    console.log('your salary is :'+salary,'& your job locartion is:',location)
}
user(20000,'nalgonda')

// t1---------
function greetuser(name,times){
    if (times<1){
        console.log('warning',times+'you enter')
    }
    for(let i=0;i<times;i++){
        console.log(`hello,${name}`)
    }
}
greetuser('naveen',3)


// // t2
// function calcrectangle(width,height){
//     if (width<=0 || height<=0){
//         return{error:'warning errror width and height must be positive number'}
//         // console.log('warning')
//     }
//     else{
//         let area=width*height
//         let perimeter=2*(width+height)
//         return{area,perimeter}
//     }
// }
// let result=calcrectangle(2,3);
// if (result.error){
//     console.log(result.error)
// }
// else{
// console.log('area:',result.area)
// console.log('perimeter:',result.perimeter)
// }

// // t3
// function repeatstring(str,count,separator){
//     let str="ha"
//     let 
// }
// function user(age){
//     age=18
//     if (age>=18){
//         console.log('elgible')
//     }
//     else{
//         console.log('not eligible')
//     }
// }
// user()

// function user(width,height){
//     if (width<=0 || height<=0){
//         console.log('error you enter zero or negative number please enter positive number')
//     }
//     else{
//         area=width*height
//         perimeter=2*(width+height)
//         console.log(`area:${area}`)
//         console.log(`perimeter:${perimeter}`)
//     }
// }
// user(2,5)


// function repeatstring(str,count,separator){
//     for (let i=0;i<count;i++){
//             console.log(`${str} ${separator} `)
//     }
// }
// repeatstring('ha',3,"-")