const toDoForm= document.getElementById("todo-form");
const toDoInput= toDoForm.querySelector("input"); // document.qerySelector("#todo-form input");
const toDoList= document.getElementById("todo-list");

let toDos= [];
const TODOS_KEY= "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // console.dir(event.target.parentElement.innerText);
  const li= event.target.parentElement;
  // console.log(li.id);   
  toDos= toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
  saveToDos();

  li.remove();

}
function paintTodo(newTodo) {
  // console.log("I will paint", newTodo);
  const li= document.createElement("li");
  const span= document.createElement("span");
  const button= document.createElement("button");
  button.innerText= "❌";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  li.id= newTodo.id;
  span.innerText= newTodo.text;
  // console.log(li);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) { 
  event.preventDefault();
  // console.log(toDoInput.value);
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
  // console.log(parsedTodos);
  parsedTodos.forEach((item) => {
    // console.log("this is the turn of", item);
    paintTodo(item);
  });
}

