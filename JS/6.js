const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const word = document.querySelector(".input-text");

btn.addEventListener("click", countVowel);
word.addEventListener("input", countVowel);

function countVowel(){
    let vowelCount = 0;
    let wordVal = word.value.toLowerCase();
    for(let i = 0; i < wordVal.length; i++){
        let letter = wordVal[i];
        if (letter.match((/[a, e, i, o, u]/))){
            vowelCount++;
            
        }
    }
    result.innerHTML = ` ${word.value.toUpperCase().substring(0,16)} has
    ${vowelCount} vowels`;
    //result.innerHTML = word.value.substring(0,20);
}

