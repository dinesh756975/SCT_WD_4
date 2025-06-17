function addTask() {
  const taskText = document.getElementById("taskInput").value;
  const taskTime = document.getElementById("taskTime").value;

  if (taskText === "" || taskTime === "") {
    alert("Please enter both task and time.");
    return;
  }

  const li = document.createElement("li");

  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";
  taskInfo.innerHTML = `<strong>${taskText}</strong><br><small>${new Date(taskTime).toLocaleString()}</small>`;

  const btns = document.createElement("div");
  btns.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "complete";
  completeBtn.onclick = () => {
    taskInfo.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", taskText);
    if (newTask) {
      taskInfo.innerHTML = `<strong>${newTask}</strong><br><small>${new Date(taskTime).toLocaleString()}</small>`;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => {
    li.remove();
  };

  btns.appendChild(completeBtn);
  btns.appendChild(editBtn);
  btns.appendChild(deleteBtn);

  li.appendChild(taskInfo);
  li.appendChild(btns);

  document.getElementById("taskList").appendChild(li);

  document.getElementById("taskInput").value = "";
  document.getElementById("taskTime").value = "";
}
