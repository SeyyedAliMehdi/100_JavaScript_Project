const count = document.querySelector(".count")
const input = document.querySelector("input")
const clear = document.querySelector("#clear")


input.addEventListener("keyup", () =>{
    count.innerHTML = input.value.length;
})

clear.addEventListener("click", () =>{
    input.value = ""
    count.innerHTML = "0"
})

