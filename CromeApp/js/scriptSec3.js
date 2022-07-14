// // document Object 
// const title= document.getElementById("title");
// console.log(title);
// console.log(title.id, title.class);
// title.innerText= "got it!";

// const hellos= document.getElementsByClassName("hello");
// console.log(hellos);

// const title= document.getElementsByTagName("h1");
// const title= document.querySelector(".hello h1");

// console.log(title);


// /Event
// function handleTitleClick(){
//     // console.log("title was clicked!");
//     title.style.color= "blue";
// }
// function handleMouseEnter() {
//     title.innerText= "The cursor is here!"
// }
// function handleMouseLeave() {
//     title.innerText= "The cursor is gone!"
// }
// function handleWindowResize() {
//     document.body.style.background= "ttomato";
// }
// function handleWindowCopy() {
//     alert("copier!");
// }
// function handleWindowOffLine() {
//     alert("SOS, no Wi-Fi");
// }
// function handleWindowOnLine() {
//     alert("Wi-Fi so Goooooood!");
// }
// title.addEventListener("click", handleTitleClick);
// title.onClick= handleTitleClick;
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mounseleave", handleMouseLeave);
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offLine", handleWindowOffLine);
// window.addEventListener("onLine", handleWindowOnLine);



// // Css
const h1= document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    // const currentColor= h1.style.color; //style을 여러번 호출하지 않고 1번만 호출
    // let newColor;
    // if (h1.currentColor === "blue") {
    //     newColor="tomato";
    // }else{
    //     newColor= "blue";
    // }

    // h1.style.color= newColor; //깔끔 코드st
    const clickedClass= "clicked"; //오류 줄이기_ 반복적으로 사용하는 String을 변수로 지정
    // if(h1.className===clickedClass){
    //     h1.className= "";
    // }else{
    //     h1.className= clickedClass; //class를 교체하기 때문에 기존에 있던 class가 사라져 좋지 못한 방법임
    // }

    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle("clicked");
} 
h1.addEventListener("click", handleTitleClick);