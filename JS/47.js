const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const autoScroll = true;
let slideInterval;
let intervalTime = 5000;

// Next Button
const  nextSlide = () =>{
    const current = document.querySelector(".current");
    current.classList.remove("current");
    // Check if there is a next sibling
    if (current.nextElementSibling){
        current.nextElementSibling.classList.add("current");
    }else {
        slides[0].classList.add("current")
    }
    current.classList.remove("current");
}

// Prev Button
const  prevSlide = () =>{
    const current = document.querySelector(".current");
    current.classList.remove("current");
    // Check if there is a next sibling
    if (current.previousElementSibling){
        current.previousElementSibling.classList.add("current");
    }else {
        slides[slides.length - 1].classList.add("current")
    }
    current.classList.remove("current");
}

// Add EventListener
next.addEventListener(("click"), () =>{
    nextSlide()
})

prev.addEventListener("click", ()=>{
    prevSlide()
})


// Auto Scroll
if (autoScroll){
    slideInterval = setInterval(nextSlide, intervalTime)
}