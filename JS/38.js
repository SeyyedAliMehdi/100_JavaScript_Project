const celsius = document.querySelector(".celsius"),
    fahrenheit = document.querySelector(".fahrenheit"),
    kelvin = document.querySelector(".kelvin"),
    form = document.querySelector("form");


function convertWeight(e) {
    if (e.target.classList.contains("celsius")){
        let x = parseFloat(e.target.value)
        // console.log(x)
        fahrenheit.value = (x * 1.8) + 32
        kelvin.value = x + 273.15

    }if (e.target.classList.contains("fahrenheit")){
        let x = parseFloat(e.target.value)
        // console.log(x)
        celsius.value = (x - 32) / 1.8;
        kelvin.value = (x - 32) / 1.8 + 273.15

    }if (e.target.classList.contains("kelvin")){
        let x = parseFloat(e.target.value)
        // console.log(x)
        fahrenheit.value = (x - 273.15) * 1.8 + 32
        celsius.value = x - 273.15

    }
}

form.addEventListener("input", convertWeight)



