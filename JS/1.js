/* First Way: using the class of parrent element and then targert Childern */


// const add = document.querySelector(".add");
// const reastCount = document.querySelector(".reast");
// const sub = document.querySelector(".subtract");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click",(e) => {
    if(e.target.classList.contains("add")){
        // console.log("add")
        count.innerHTML++;
        setColor();
    }if (e.target.classList.contains("subtract")) {
        // console.log("subtract");
        count.innerHTML--;
        setColor();
        
    }if(e.target.classList.contains("reast")){
        // console.log("Reast");
        count.innerHTML = 0;
        setColor();
    }
})

function setColor(){
    if (count.innerHTML > 0) {
        count.style.color = "yellow";

    }else if (count.innerHTML < 0) {
        count.style.color = "red";
    }else  {
        count.style.color = "#fff";
    }
}

// function addten(){
//    document.getElementById("text").innerHTML =10;
   
// }





/* * Second Way: Using the class of each button* */


// const add = document.querySelector(".add");
// const reastCount = document.querySelector(".reast");
// const sub = document.querySelector(".subtract");
// const count = document.querySelector(".count");

// add.addEventListener("click", () =>{
//     count.innerHTML++
    
// })
// sub.addEventListener("click", () =>{
//     count.innerHTML--
// })
// reastCount.addEventListener("click", () =>{
//     count.innerHTML = 0
// })



/* Some Practice */

// buttons.addEventListener("",(e) => {
//     if(e.target.classList.contains("add")){
//         console.log("add")
//     }if (e.target.classList.contains("subtract")) {
//         console.log("subtract")
        
//     } else {
        
//     }

// })