window.onload =() =>{
    const keys = document.querySelectorAll(".key")
    const expression = document.getElementById("expression")
    const res = document.getElementById("number")
    let result = 0
    let keyVal
    var reg = new RegExp('^[0-9]$');


// Methods
    function calculate(){
        res.innerHTML = eval(expression.innerHTML)
    }

    function clear(){
        expression.innerHTML = "0"
        result = 0
        res.innerHTML = "0"
    }

    function erase(){
        expression.innerHTML = expression.innerHTML.slice(0,expression.innerHTML.length-1)
    }


// Function below handles click on keys
    function handleKeysClicked(){
        if (keyVal === "="){
            calculate();
        }else if(keyVal === "C"){
            clear();
        }else if (keyVal === "+"){
            calculate()
            expression.innerHTML += "+"
        }else if (keyVal === "-"){
            calculate()
            expression.innerHTML += "-"
        }else if (keyVal === '\u00F7'){
            calculate()
            expression.innerHTML += '/'
        }else if (keyVal === "x"){
            calculate()
            expression.innerHTML += '*'
        }else if (keyVal === "%"){
            calculate()
            expression.innerHTML += "%"
        }else if (keyVal === '\u00B1'){
            expression.innerHTML += "-"
        }else if (keyVal === '\u232B'){
            // expression.innerHTML += '\u232B'
            erase()
        }
        else {
            expression.innerHTML += keyVal
            // res.innerHTML += keyVal
        }
    }


// Function below handles clicks on keys
    function handleKeysPressed(k){
        if (k === "="){
            calculate();
        }else if(k === "C"){
            clear();
        }else if (k === "+"){
            expression.innerHTML += "+"
        }else if (k === "-"){
            expression.innerHTML += "-"
        }else if (k === '/'){
            expression.innerHTML += '/'
        }else if (k === "*"){
            expression.innerHTML += '*'
        }else if (k === "%"){
            expression.innerHTML += "%"
        }else if (reg.test(k)) {
            expression.innerHTML += k
        }else if (k === "Backspace"){
            erase()
        }
    }


//---------------------------
// Event Listeners

    keys.forEach(key =>{
        key.addEventListener("click", evt => {
            if (expression.innerHTML === "0") expression.innerHTML = "";
            if (res.innerHTML === "0") res.innerHTML = ""
            keyVal = key.innerHTML
            handleKeysClicked();

        })
    })

    res.addEventListener("click")


    document.addEventListener('keyup', (e) => {
        if (expression.innerHTML === "0") expression.innerHTML = "";
        handleKeysPressed(e.key)
    });
//----------------------------
}