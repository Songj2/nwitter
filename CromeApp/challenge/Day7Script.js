const form= document.querySelector("form");
const inputRange= document.querySelector("#range");
const inputChoice= document.querySelector("#choice");
const resultArea= document.querySelector("#resultArea");
const result= document.querySelector("#result");
const winLost= document.querySelector("#winLost");


function playSubmit(event) {
    event.preventDefault();
    const range= inputRange.value;
    const choice= parseInt(inputChoice.value);
    let machine= getRandomIntInclusive(0, range);
    let text= "";
    result.innerText= `You chose: ${choice}, the machine chose: ${machine}.`;

    if(machine===choice){
        text= "You win!";
    }else{
        text= "You lose!";
    }
    winLost.innerText= text;
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  }
form.addEventListener("submit", playSubmit);