const form = document.getElementById("form"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    passwordRepeat = document.getElementById("passwordRepeat");

// Form Event Listener
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkRequired([username, email, password, passwordRepeat])
    checkLength(username, 6, 20);
    checkLength(password, 8, 32);
    checkEmail(email);
    matchPassword(password, passwordRepeat)
})

// Check Required Fields
function checkRequired(inputAll){
    inputAll.forEach(input =>{
        if (input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required`)
        }else {
            showSuccess(input);
        }
    })
}


// Check Input Length
function checkLength(input, min, max){
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters.`)
    }else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`)
    }else {
        showSuccess(input)
    }
}


// Validate Email
function checkEmail(input){
    // const validateEmail = (email) => {
    //     return String(email)
    //         .toLowerCase()
    //         .match(
    //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         );
    // };
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim().toLowerCase())){
        showSuccess(input)
    }else {
        showError(input, "Email is not valid.")
    }
}


// Check Password
function matchPassword(input1, input2){
    if (input1.value !== input2.value){
        showError(input2, "Passwords do not match")
    }
}

// Show Error Message
function showError(input, message){
    const formControl = input.parentElement;
    // formControl.className = "form-control error"
    formControl.classList.add("error")
    const small = formControl.querySelector("small")
    small.innerText = message;
}

// Show Success Message
function showSuccess(input){
    const formControl = input.parentElement;
    // formControl.classList.replace("error","success")
    formControl.classList.remove("error")
    formControl.classList.add("success")
}

// Get Field Name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}