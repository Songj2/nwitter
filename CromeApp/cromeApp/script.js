const clock= document.querySelector("#clock");
const loginForm= document.querySelector("#login-form");
const loginInput= document.querySelector("input");
const infoArea= document.querySelector(".infoBefore");
const greeting= document.querySelector("#greeting"); 
const toDoForm= document.querySelector("#todo-form");
const toDoInput= toDoForm.querySelector("input");
const toDoList= document.querySelector("#todo-list");
const HIDDEN_CLASSNAME= "hidden";
const USERNAME_KEY= "userName";
const API_KEY= "38be1d01167c8afaa95c2c633bda8829";
const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];
const quote= document.querySelector("#quote span:first-child");
const author= document.querySelector("#quote span:last-child");

const todaysQuote= quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText= todaysQuote.quote;
author.innerText= todaysQuote.author;

function getClock(){
    const date= new Date();
    const hours= String(date.getHours()).padStart(2, "0");
    const minutes= String(date.getMinutes()).padStart(2, "0");
    const seconeds= String(date.getSeconds()).padStart(2, "0");

    clock.innerText= `${hours}:${minutes}:${seconeds}`;
}
getClock();
setInterval(getClock, 1000);

function onLoginSubmit(event){ 
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName= loginInput.value;

    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function paintGreetings(userName) {
    greeting.innerText= `Hello, ${userName}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    infoArea.className= "infoAfter";
}

const saveUserName= localStorage.getItem(USERNAME_KEY);
if (saveUserName=== null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}else{
    paintGreetings(saveUserName);
}
loginForm.addEventListener("submit", onLoginSubmit);

let toDos= [];
const TODOS_KEY= "todos";
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li= event.target.parentElement;   
  toDos= toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
  saveToDos();

  li.remove();

}
function paintTodo(newTodo) {
  const li= document.createElement("li");
  const span= document.createElement("span");
  const button= document.createElement("button");
  button.innerText= "❌";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  li.id= newTodo.id;
  span.innerText= newTodo.text;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) { 
  event.preventDefault();
  const newTodo= toDoInput.value;
  toDoInput.value= "";
  const newObject= {
    text:newTodo,
    id: Date.now()
  };
  toDos.push(newObject);
  paintTodo(newObject);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);


const savedTodos= localStorage.getItem(TODOS_KEY);

if (savedTodos!== null){
  const parsedTodos= JSON.parse(savedTodos);
  toDos= parsedTodos;
  parsedTodos.forEach((item) => {
    paintTodo(item);
  });
}

function onGeoOk(position) {
  const lat= position.coords.latitude;
  const lng= position.coords.longitude;
  const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response=> response.json()).then(data=> {
      const weather= document.querySelector("#weather");
      weather.innerText =  `${data.name}, ${data.weather[0].main}\ ${data.main.temp }°C`;
  });
    
}
function onGeoError() {
    alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const images= ["tree.jpg", "forest.jpg", "trees.jpg"]
const choseImage= images[Math.floor(Math.random()*images.length)]

const bgImage= `img/${choseImage}`;
document.body.style.background = "url('" + bgImage + "')";
console.log("url('" + bgImage + "')");