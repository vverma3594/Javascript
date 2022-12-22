let formTask= document.querySelector('#formTask');
let InputTask= document.querySelector('#InputTask');
let listItem= document.querySelector('#listItem');
formTask.addEventListener('submit', (event)=>{
  event.preventDefault();
  let InputTaskVal=InputTask.value;
  let webTask= localStorage.getItem("localtask");
  if(webTask== null){
    taskObj=[];
  }
  else{
    taskObj= JSON.parse(webTask);
  }
  taskObj.push(InputTaskVal);
  localStorage.setItem("localtask", JSON.stringify(taskObj) );
  taskShow()
})

let taskShow= ()=>{
  let webTask= localStorage.getItem("localtask");
  if(webTask== null){
    taskObj=[];
  }
  else{
    taskObj= JSON.parse(webTask);
  }
  let listItem='';
  taskObj.forEach((item, index) => {
    listItem += `
      <li>
      <span>${index + 1}</span>
      <span>${item}</span>
      </li>
    `;
  });
  listItem.innerHTML=listItem;
}

taskShow();