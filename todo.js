async function onClickHandler() {
    const taskInput = document.getElementById("taskInput");
    const taskContainer = document.getElementById("taskContainer");
    const taskCount = document.getElementById("taskCount");

    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskElement = document.createElement("div");
        taskElement.className = "taskItem";

        const taskText = document.createElement("textarea");
        taskText.textContent = taskValue;
        taskText.className = "taskText";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteTaskButton";
        deleteButton.onclick = function () {
            taskContainer.removeChild(taskElement);
            updateTaskCount();
        };

        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.className = "updateTaskButton";
        updateButton.onclick = function () {
            const newTaskValue = prompt("Update your task:", taskText.textContent);
            if (newTaskValue && newTaskValue.trim() !== "") {
                taskText.textContent = newTaskValue.trim();
            } else {
                alert("Task cannot be empty!");
            }
        };

        taskElement.appendChild(taskText);
        taskElement.appendChild(deleteButton);
        taskElement.appendChild(updateButton);
        taskContainer.appendChild(taskElement);

        taskInput.value = "";

        updateTaskCount();
    } else {
        alert("Please enter a task!");
    }
}

function updateTaskCount() {
    const taskContainer = document.getElementById("taskContainer");
    const taskCount = document.getElementById("taskCount");
    const totalTasks = taskContainer.children.length;
    taskCount.textContent = `Total Tasks: ${totalTasks}`;
}
