const clock= document.querySelector("#clock");

function getClock(){
    // console.log("HEllo.");
    const date= new Date();
    const hours= String(date.getHours()).padStart(2, "0");
    const minutes= String(date.getMinutes()).padStart(2, "0");
    const seconeds= String(date.getSeconds()).padStart(2, "0");

    clock.innerText= `${hours}:${minutes}:${seconeds}`;
}
getClock();
setInterval(getClock, 1000);
