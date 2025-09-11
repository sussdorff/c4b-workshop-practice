// Simple Todo App - needs improvements!
// Issues to fix:
// 1. No persistence (todos disappear on refresh)
// 2. No input validation
// 3. No edit functionality
// 4. Missing keyboard shortcuts
// 5. No priority or categories

let todos = [];
let nextId = 1;

// Get DOM elements
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const clearCompletedButton = document.getElementById('clearCompleted');

// Add todo function
function addTodo() {
    const text = todoInput.value;
    
    // TODO: Add validation
    
    const todo = {
        id: nextId++,
        text: text,
        completed: false
    };
    
    todos.push(todo);
    todoInput.value = '';
    render();
}

// Toggle todo completion
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        render();
    }
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    render();
}

// Clear completed todos
function clearCompleted() {
    todos = todos.filter(t => !t.completed);
    render();
}

// Render todos
function render() {
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => toggleTodo(todo.id));
        
        const span = document.createElement('span');
        span.textContent = todo.text;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '×';
        deleteBtn.className = 'delete';
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
    
    updateCount();
}

// Update todo count
function updateCount() {
    const activeTodos = todos.filter(t => !t.completed).length;
    todoCount.textContent = `${activeTodos} ${activeTodos === 1 ? 'item' : 'items'} left`;
}

// Event listeners
addButton.addEventListener('click', addTodo);
clearCompletedButton.addEventListener('click', clearCompleted);

// TODO: Add enter key support for adding todos
// TODO: Add localStorage for persistence
// TODO: Add drag-and-drop to reorder
// TODO: Add filters (all/active/completed)