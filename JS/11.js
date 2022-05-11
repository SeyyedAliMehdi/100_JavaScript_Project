const userLocation = document.querySelector(".location")
const btn = document.querySelector(".btn")

btn.addEventListener("click", evt => {
    navigator.geolocation.getCurrentPosition(showPosition);
})

function showPosition(position){
    userLocation.innerHTML = `
        Latitude: ${position.coords.latitude} <br>
        Longitude: ${position.coords.longitude} <br>
        
        
    `
}


