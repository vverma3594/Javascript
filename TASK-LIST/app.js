let formTaskEl = document.querySelector("#formTask");
let option = [];
formTaskEl.addEventListener("submit", (event) => {
  event.preventDefault();
  let InputTaskEl = document.querySelector("#InputTask");
  let task = InputTaskEl.value.trim();
  let tasklist = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  tasklist.unshift(task);
  localStorage.setItem("tasks", JSON.stringify(tasklist));
addItem();

});


let addItem=()=>{
  let listItemEl= document.querySelector('#listItem');
  let tasklist = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
  if(tasklist.length !==0){
    let eachtask='';
    for(let task of tasklist){
      eachtask += `
      <li>${task} <span>X</span></li>
      ` 
    }
    listItemEl.innerHTML=eachtask;
  }

}

addItem();