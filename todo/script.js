
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    const taskDate =document.getElementById("task1")
    const taskText1 = taskDate.value

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText} </span>
            <span>${taskText1}</span>
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
    }
}


function deleteTask(button) {
    const taskList = document.getElementById("task-list");
    const li = button.parentElement;
    taskList.removeChild(li);
}
