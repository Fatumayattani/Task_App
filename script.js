const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
        
        listContainer.appendChild(li);
        
        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    const tasks = Array.from(listContainer.querySelectorAll("li")).map(li => li.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTask() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;
            
            const span = document.createElement("span");
            span.textContent = "\u00d7";
            li.appendChild(span);
            
            listContainer.appendChild(li);
        });
    }
}

showTask();




