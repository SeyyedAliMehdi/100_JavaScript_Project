let hours = document.getElementById("hour");
let minutes = document.getElementById("minute")
let seconds = document.getElementById("second")
let btn = document.getElementById("start")
let counting = document.getElementById("countdown");
let div = document.querySelector(".container");


// Time Countdown
let time = 3 // Time in minutes
let promoTime;



btn.addEventListener("click", ev => {
    // let h = parseInt(hours.value)
    let h = hours.value
    let m = minutes.value
    let s = seconds.value
    // console.log(typeof(hours.value))
    let btnText = btn.innerText
    if ((isNaN(h) === false) && (isNaN(m) === false) && (isNaN(s) === false)){
            promoTime = (parseInt(seconds.value) + 60 * parseInt(minutes.value) + 3600 * parseInt(hours.value));
            startCountdown("continue");
            btn.style.display = "none";
            hours.style.display = "none";
            minutes.style.display = "none";
            seconds.style.display = "none";
            div.innerHTML =""
        if (btn.innerText === "Start"){
            // btn.innerText = "Pause"
        }
    }
})





function startCountdown(e) {

    let promoTimer = setInterval(() => {
        if (promoTime <= 0) {
            clearInterval(promoTimer);
            counting.innerHTML = "Promo has ended.";
        } else {
            promoTime--;
            let day = Math.floor(promoTime / 3600 / 24);
            let hours = Math.floor(promoTime / 3600) % 24;
            let min = Math.floor(promoTime / 60) % 60;
            let sec = Math.floor(promoTime % 60);

            counting.innerHTML = `TIME: ${format(hours)}hr : ${format(
                min
            )}min : ${format(sec)}`;
        }
    }, 1000);


}

function format(t) {
    return t < 10 ? `0${t}` : t;
}


