// // synchronuous
// console.log("hii")
// console.log("good")
// console.log("morning")

// // Asynchronuous
// console.log("step 1 done")
// setTimeout(()=>{
//     console.log("step 2")
// },2000)
// console.log("step 3 done")

// // callback
// function homework(subject,callback){
//     setTimeout(()=>
//         console.log("subject "+subject+" homework finished"),2000)
//         callback();
// }
// function finished(){
//     console.log("home work finished completely")
// }
// homework("maths",finished)



// // ----callback--hell
// setTimeout(()=>{
//     console.log("step 1 done")
//     setTimeout(()=>{
//           console.log("step 2 done")
//           setTimeout(()=>{
//                 console.log("step 3 done")
//                 setTimeout(()=>{
//                     console.log("step 4 done")
//                 },2000)
//         },2000)
//     },2000) 
// },2000)

// function boil_water(callback){
//     setTimeout(()=>{
//         console.log("Boiling the water")
//         callback();
//     },5000)
// }
// function addnoodles(callback){
//     setTimeout(()=>{
//         console.log("adding noodles")
//          callback();
//     },2000)
// }
// function add_masala(callback){
//     setTimeout(()=>{
//         console.log("adding masala")
//          callback();
//     },2000)
// }
// function serve(){
//     setTimeout(()=>{
//         console.log("maggie completed")
//          callback();
//     },2000)
// }
// boil_water(()=>{
//     addnoodles(()=>{
//         add_masala(()=>{
//             serve(()=>{

//             })
//         })
//     })
// })

// console.log("hiii")
// console.log("hiii")
// console.log("hiii")

// console.log("good")
// setTimeout(()=>{
//     console.log("green")
// },1000)
// console.log("nice")

// function greet(callback){
//     console.log("how are u")
//     callback()
// }
// function sweet(){
//     console.log("palakova")
// }
// greet(sweet)


// setTimeout(()=>{
//     console.log("step 1")
//     setTimeout(()=>{
//         console.log("step 2")
//         setTimeout(()=>{
//             console.log("step 3")
//             setTimeout(()=>{
//                 console.log("step 4")
//             },3000)
//         },4000)
//     },2000)
// },3000)


function open_app(callback){
    setTimeout(()=>{
        console.log("open amazon app ")
        // document.write("open amazon")
        callback();
    },2000)
}
function choose_products(callback){
    setTimeout(()=>{
        console.log("choose products📦🎁🗳️🍱")
        callback();
    },2000)
}
function select_product(callback){
    setTimeout(()=>{
        console.log("selcted a product 📦")
        callback();
    },2000)
}
function order_product(callback){
    setTimeout(()=>{
        console.log("ordering a product 🗳️")
        callback();
    },2000)
}
function make_payment(callback){
    setTimeout(()=>{
        console.log("make payment online or offline 💳💰")
        callback();
    },1000)
}
function payment_success(callback){
    setTimeout(()=>{
        console.log("payment successful 💴")
        callback();
    },1000)
}
function wait_for_delivery(callback){
    setTimeout(()=>{
        console.log('wait_for_delivery 🍱')
        callback();
    },1000)
}
function order_placed(){
    setTimeout(()=>{
        console.log("order placed enjoy 😊 stay healthy 😍")
    },1000)
}
open_app(()=>{
    choose_products(()=>{
        select_product(()=>{
            order_product(()=>{
                make_payment(()=>{
                    payment_success(()=>{
                        wait_for_delivery(()=>{
                            order_placed(()=>{

                            })
                        })
                    })
                })
            })
        })
    })
})