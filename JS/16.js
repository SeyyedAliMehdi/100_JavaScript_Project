const input = document.getElementById("search");
input.addEventListener("keyup", search);

function search(){
    const inputVal = input.value;
    const li = document.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        // console.log(li[i])
        if (li[i].innerHTML.toLowerCase().includes(inputVal.toLowerCase())){
            li[i].style.display = "";
        }else {
            li[i].style.display = "none"
        }
    }
}