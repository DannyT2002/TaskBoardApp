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
    let card = $('<div>').addClass('card task-card').attr('id', task.id);
    let cardBody = $('<div>').addClass('card-body');
    let title = $('<h5>').addClass('card-title').text(task.title);
    let description = $('<p>').addClass('card-text').text(task.description);
    let deadline = $('<p>').addClass('card-text').text('Deadline: ' + task.deadline);

    // Calculate due date status
    let dueDate = new Date(task.deadline);
    let currentDate = new Date();
    let today = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()); // Set today's date without time

    if (dueDate < today && (task.progress === "to-do" || task.progress === "in-progress")) {
        card.css('background-color', 'maroon');
        card.css('color', 'white')
    } else if (dueDate.getTime() === today.getTime() && (task.progress === "to-do" || task.progress === "in-progress")) {
        card.css('background-color', '#FFDB58');
        card.css('color', 'white')
    } else if (dueDate > today && (task.progress === "to-do" || task.progress === "in-progress")) {
        card.css('background-color', 'white');
    }

    let deleteBtn = $('<button>').addClass('btn btn-danger delete-btn').text('Delete').click(handleDeleteTask);
    cardBody.append(title, description, deadline, deleteBtn);
    card.append(cardBody);
    return card; // Just return the card, don't wrap it in a container
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
