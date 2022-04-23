const nums = document.querySelectorAll(".nums")
const expression = document.getElementById("expression")
const number = document.getElementById("number")
const clear = document.getElementById("clear")
const del = document.getElementById("delete")
const subtract = document.getElementById("minus")
const add = document.getElementById("plus")
const multiply = document.getElementById("multiply")
const remainder = document.getElementById("remainder")
const sign = document.getElementById("sign")
const division = document.getElementById("division")
const result = document.getElementById("result")
const equal = document.getElementById("equal")

let flag = false
let sum = 0

expression.innerHTML = "0"
nums.forEach(item =>{
    item.addEventListener("click", evt => {
        if (number.innerHTML === "0"){
            number.innerHTML = ""
        }
        if (flag === true){
            number.innerHTML = ""
        }
        flag = false
        number.innerHTML += item.innerHTML
        console.log(item.innerHTML)
    })
})


add.addEventListener("click", ev => {
    sum += parseFloat(number.innerHTML)
    handleExpression("+")

})

multiply.addEventListener("click", ev => {
    sum *= parseFloat(number.innerHTML)
    handleExpression("*")

})

remainder.addEventListener("click", ev => {
    handleExpression("%")
    sum %= parseFloat(number.innerHTML)
    sum += 0
    number.innerHTML = "0"
    expression.innerHTML = "0"
    result.innerHTML = sum

})

subtract.addEventListener("click", ev => {
    sum -= parseFloat(number.innerHTML)
    handleExpression("-")
})

division.addEventListener("click", ev => {
    sum /= parseFloat(number.innerHTML)
    handleExpression("/")
})

equal.addEventListener("click", ev => {
    result.innerHTML = `Result: ${sum}`
})

function handleExpression(ops){
    doTrim()
    // if (expression.innerHTML === ""){
    //     expression.innerHTML += `${number.innerHTML}${ops}`
    // }else {
    //     expression.innerHTML += `${number.innerHTML}${ops}`
    // }
    expression.innerHTML += `${number.innerHTML}${ops}`
    flag = true
    // result.innerHTML = `Result: ${sum}`
    number.innerHTML = sum
}

function doTrim(){
    if (expression.innerHTML === "0"){
        expression.innerHTML = ""
    }
}

del.addEventListener("click", ev => {
    number.innerHTML = number.innerHTML.slice(0, number.innerHTML.length - 1)
})

clear.addEventListener("click", ev => {
    result.innerHTML = "Result:"
    number.innerHTML = "0";
    expression.innerHTML = "0"
    sum = 0
})