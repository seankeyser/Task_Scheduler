const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    dueDate: document.getElementById('dueDate').value,
    duration: document.getElementById('duration').value,
    priority: document.getElementById('priority').value,
    recurrence: document.getElementById('recurrence').value,
    category: document.getElementById('category').value,
    completed: false
  };
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  taskForm.reset();
  alert('Task added!');
});