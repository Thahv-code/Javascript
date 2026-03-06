let tasks = ["Quét nhà", "Giặt quần áo"];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addBtn = document.querySelector("button");

function renderList() {
  taskList.innerHTML = "";

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

function addTask() {
  let taskName = taskInput.value.trim();

  if (taskName === "") {
    alert("Vui lòng nhập tên công việc");
    return;
  }

  tasks.push(taskName);

  renderList();

  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

renderList();
