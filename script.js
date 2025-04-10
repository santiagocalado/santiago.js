let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function addTask() {
    const input = document.getElementById("taskInput");
    const category = document.getElementById("categoryInput").value;
    const dueDate = document.getElementById("dueDateInput").value;
    const text = input.value.trim();

    if (!text) return;

    tasks.push({
        text,
        done: false,
        category,
        dueDate
    });

    input.value = "";
    saveTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    let filtered = tasks.filter(task => {
        if (filter === "all") return true;
        if (filter === "done") return task.done;
        return !task.done;
    });

    filtered.sort((a, b) => a.done - b.done); // pendentes antes das concluídas

    filtered.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.done ? "done" : "";
        li.innerHTML = `
            <span onclick="toggleDone(${index})" contenteditable="true" onblur="editTask(${index}, this.innerText)">
                ${task.text} 
                <small>(${task.category}) ${task.dueDate ? " - " + task.dueDate : ""}</small>
            </span>
            <button onclick="removeTask(${index})">X</button>
        `;
        list.appendChild(li);
    });

    updateCounter();
}

function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
}

function clearTasks() {
    if (confirm("Tem certeza que deseja apagar todas as tarefas?")) {
        tasks = [];
        saveTasks();
    }
}

function updateCounter() {
    const total = tasks.length;
    const done = tasks.filter(t => t.done).length;
    document.getElementById("taskCounter").innerText = `${total} tarefas (${done} concluídas)`;
}

function editTask(index, newText) {
    tasks[index].text = newText.trim();
    saveTasks();
}

function filterTasks(type) {
    filter = type;
    renderTasks();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

// Restaurar modo escuro
if (JSON.parse(localStorage.getItem("darkMode"))) {
    document.body.classList.add("dark");
}

renderTasks();
