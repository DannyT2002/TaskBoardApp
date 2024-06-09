// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    let id = nextId || 1; // Initialize id with nextId or default to 1 if nextId is not set
    nextId++; // Increment nextId for the next task
    localStorage.setItem("nextId", nextId); // Save the updated nextId in localStorage
    return 'id' + id; // Return the generated ID
}
// Todo: create a function to create a task card
function createTaskCard(task) {
    // Your code here
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // Your code here
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    // Your code here
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    // Your code here
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    // Your code here
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // Your code here
});
