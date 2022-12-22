let formTask = document.querySelector("#formTask");
let InputTask = document.querySelector("#InputTask");
let listItem = document.querySelector("#listItem");
let updateBtn = document.querySelector("#update");
let saveTask = document.querySelector("#saveTask");
let addBtn = document.querySelector("#add");

// add to localStorage
formTask.addEventListener("submit", (event) => {
  event.preventDefault();
  let InputTaskVal = InputTask.value;
  let webTask = localStorage.getItem("localtask");
  if (InputTaskVal.trim() != 0) {
    webTask == null ? (taskObj = []) : (taskObj = JSON.parse(webTask));
    taskObj.push(InputTaskVal);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    InputTask.value = "";
    taskShow();
  }
});

// display list
let taskShow = () => {
  let webTask = localStorage.getItem("localtask");
  if (webTask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webTask);
  }
  let lists = "";
  taskObj.forEach((item, index) => {
    lists += `
      <li>
      <span>${index + 1}. ${item}</span>
      <span><i class="fa-solid fa-pen-to-square"  onclick="edittask(${index})"></i> &nbsp;
      <i class="fa-solid fa-rectangle-xmark" onclick="deleteTask(${index})"></i></span>
      </li>
    `;
  });
  listItem.innerHTML = lists;
};

taskShow();

// edit list
let edittask = (index) => {
  let webTask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webTask);
  InputTask.value = taskObj[index];
  updateBtn.style.display = "block";
  addBtn.style.display = "none";
  saveTask.value = index;
};
updateBtn.addEventListener("click", () => {
  let webTask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webTask);
  let indexValue = saveTask.value;
  taskObj[indexValue] = InputTask.value;
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  updateBtn.style.display = "none";
  addBtn.style.display = "block";
  InputTask.value = "";
  taskShow();
});

// deletetask
let deleteTask = (index) => {
  let webTask = localStorage.getItem("localtask");
  let taskObj = JSON.parse(webTask);
  taskObj.splice(index, 1);
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  taskShow();
};
