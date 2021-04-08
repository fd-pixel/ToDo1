//def.
let content = document.getElementById("content");
let btn1 = document.getElementById("btn1");
let toDoList = document.querySelector(".toDoList");
//let todos= document.querySelector(".todos")
//let checkButton = document.querySelector(".checkButton");

btn1.addEventListener("click", add);

// functions
function add() {
  if (content.value === ""){
      alert("Please write down stg to do!!");
  }else if (content.value!== ""){
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = content.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  const checkButton = document.createElement("button");
  checkButton.innerHTML = "Check";
  checkButton.classList.add("check-btn");
  todoDiv.appendChild(checkButton);
  //Delete button
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);
  //append to ul
  toDoList.appendChild(todoDiv);

  content.value = "";

  //eventlisteners
  deleteButton.addEventListener("click", delFunc);
  checkButton.addEventListener("click", checkFunc);
  function delFunc() {
    toDoList.removeChild(todoDiv);
    toDoList.style
  }
  function checkFunc() {
    newTodo.style.textDecoration = "line-through";
    newTodo.style.opacity = "0.4";
  };
}
}
