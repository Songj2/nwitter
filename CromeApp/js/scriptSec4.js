const loginForm= document.getElementById("login-form");
const loginInput=  loginForm.querySelector("input"); //document.querySelector("#login-form input");
// const loginButton=  loginForm.querySelector("button");

function onLoginBtnClick(){
    // console.log("Hello, ", loginInput.value); //4.0
    // const value= loginInput.value; //4.1
    // if (value===""){
    //     alert("Please writ your name.");
    // }else if (value.length> 15) {
    //     alert("Your name is too long.");
    // }
    const userName= loginInput.value;
    console.log(userName);
}
// loginButton.addEventListener("click", onLoginBtnClick); //4.1
const greeting= document.querySelector("#greeting"); //4.4
const HIDDEN_CLASSNAME= "hidden";
const USERNAME_KEY= "userName";
function onLoginSubmit(event){ 
    // event.preventDefault(); //4.3
    // console.log(event);
    // const userName= loginInput.value;
    // console.log(userName);
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName= loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
    console.log(userName);
}
function paintGreetings(userName) {
    greeting.innerText= `Hello, ${userName}`; //"Hello, "+ userName;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const saveUserName= localStorage.getItem(USERNAME_KEY);
if (saveUserName=== null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}else{
    paintGreetings(saveUserName);
}
loginForm.addEventListener("submit", onLoginSubmit);


// const link= document.querySelector("a"); //4.3
// function handleLinkClick(event) { 
//     event.preventDefault();
//     console.dir(event);
// }
// link.addEventListener("click", handleLinkClick);