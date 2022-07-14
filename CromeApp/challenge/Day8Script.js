const clock= document.querySelector("#clock");

function calDate() {
    const nowDate= new Date();
    const year= nowDate.getFullYear();
    const target= `${year}-12-24`;
    const setDate= new Date(target);
    const term= setDate- nowDate;
    const months= String().padStart(2, "0");
    const days= String(Math.floor(term/ (1000* 60* 60* 24))).padStart(2, "0");
    const hours= String(Math.floor(term/ (1000* 60* 60))% 24).padStart(2, "0");
    const minutes= String(Math.floor(term/ (1000* 60))% 60).padStart(2, "0");
    const seconds= String(Math.floor(term/ 1000% 60)).padStart(2, "0");

    clock.innerText= `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
calDate();
setInterval(calDate, 1000);