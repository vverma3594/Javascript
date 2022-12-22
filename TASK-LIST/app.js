let formTaskEl = document.querySelector("#formTask");
let option = [];
formTaskEl.addEventListener("submit", (event) => {
  let InputTaskEl = document.querySelector("#InputTask");
  let task = InputTaskEl.value.trim();
  let tasklist = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  tasklist.unshift(task);
  localStorage.setItem("tasks", JSON.stringify(tasklist));
  addItem();

});


let addItem = () => {
  let listItemEl = document.querySelector('#listItem');
  let tasklist = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  if (tasklist.length !== 0) {
    let eachtask = '';
    for (let task of tasklist) {
      eachtask += `
      <li>${task} <span><i class="fa-solid fa-rectangle-xmark"></i></span>

      </li>
      `
    }
    listItemEl.innerHTML = eachtask;
  }

}

addItem();

// Remove item
let listItemEl = document.querySelector('#listItem');
let editCard = document.querySelector("#edit-card");
let addCard = document.querySelector("#add-card");
listItemEl.addEventListener('click', (event) => {
  let targetEl = event.target;
  if (targetEl.classList.contains('fa-rectangle-xmark')) {
    let actualL = targetEl.parentElement.parentElement;
    let selectText = actualL.innerText;
    console.log(selectText);
    let tasklist = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
    tasklist = tasklist.filter((task) => {
      return task.trim() !== selectText.trim();
    })
    localStorage.setItem("tasks", JSON.stringify(tasklist));
    addItem();
    location.reload();

  }

})




