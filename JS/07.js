
// Buttons
const cut = document.querySelector("#cut");
const copy = document.querySelector("#copy");
const paste = document.querySelector("#paste");
const del = document.querySelector("#delete");
// Input
const coupon = document.querySelector(".coupon");

const cutText = (e) => {
    e.preventDefault();
    coupon.select();
    coupon.setSelectionRange(0,99999);
    document.execCommand("cut");

    cut.textContent = "Cutted!!!";
    setTimeout(() => {
        cut.textContent = "Cut";
    }, 3000);
}


// Notice to comments
const copyText = (e) => {
    e.preventDefault();
    
    coupon.select();
    // If doesn't have a range, It doesn't work correctly 
    coupon.setSelectionRange(0 , 99999);
    document.execCommand("copy");
    
    copy.textContent = "Copied!!!";
    setTimeout(() => {
        copy.textContent = "Copy";
    }, 3000);
}

const pasteText = (e) => {
    e.preventDefault();
    coupon.select();
    coupon.setSelectionRange(0,99999);
    document.execCommand("paste");
    

    paste.textContent = "Pasted!!!";
    setTimeout(() => {
        paste.textContent = "Paste";
    }, 3000);
}

const deleteText = (e) => {
    e.preventDefault();
    coupon.select();
    cuupon.deleteText();
}



cut.addEventListener("click",cutText);
copy.addEventListener("click",copyText);
paste.addEventListener("click",pasteText);
del.addEventListener("click", deleteText);

