const tableBody = document.querySelector('#taskTable tbody');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  tableBody.innerHTML = '';
  tasks.forEach((task, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.name}</td>
      <td>${task.dueDate}</td>
      <td>${task.priority}</td>
      <td>${task.completed ? '✔️' : '❌'}</td>
      <td><button onclick="completeTask(${index})">Complete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

function completeTask(index) {
  tasks[index].completed = true;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

renderTasks();