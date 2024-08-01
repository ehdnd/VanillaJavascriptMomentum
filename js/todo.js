const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  handleTodoLimit();
}

function paintToDo(newTodoObject) {
  const li = document.createElement("li");
  li.id = newTodoObject.id;
  const span = document.createElement("span");
  span.innerText = newTodoObject.text;
  const button = document.createElement("button");
  button.innerText = Math.floor(Math.random() * 10);
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObject);
  paintToDo(newTodoObject);
  saveToDos();
  handleTodoLimit();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function handleTodoLimit() {
  const liCount = toDos.length;
  if (liCount >= 8) {
    toDoInput.disabled = true;
    toDoInput.placeholder = "Max ToDos. Please finish your work 🔥";
  } else {
    toDoInput.disabled = false;
    toDoInput.placeholder = "Write a To Do and Press Enter";
  }
}

handleTodoLimit();
