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
    $(".lane .task-card").remove(); // Clear existing cards
    $.each(taskList, function(index, task) {
        let lane = $("#" + task.progress); // Find the lane based on the task's progress
        let card = createTaskCard(task); // Create card for the task
        $("#" + task.progress + "-cards").append(card); // Append card to the lane's inner div
    });

    // Make cards draggable
    $(".task-card").draggable({
        revert: "invalid",
        containment: ".swim-lanes",
        scroll: false,
    });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    event.preventDefault();
    let title = $("#task-title").val();
    let description = $("#task-description").val();
    let deadline = $("#datepicker").val();
    let id = generateTaskId(); // Generate unique id for the task
    let newTask = {
        id: id,
        title: title,
        description: description,
        deadline: deadline,
        progress: "to-do", // Initial progress state
    };
    taskList.push(newTask); // Add new task to the task list
    localStorage.setItem("tasks", JSON.stringify(taskList)); // Save task list to localStorage
    renderTaskList(); // Render updated task list
    $("#formModal").modal("hide"); // Hide modal after adding task
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    let taskId = $(this).closest(".task-card").attr("id");
    taskList = taskList.filter((task) => task.id !== taskId); // Remove task from task list
    localStorage.setItem("tasks", JSON.stringify(taskList)); // Save task list to localStorage
    renderTaskList(); // Render updated task list
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    let taskId = ui.draggable.attr("id");
    let newLaneId = $(this).attr("id");
    let taskIndex = taskList.findIndex((task) => task.id === taskId);
    taskList[taskIndex].progress = newLaneId; // Update task's progress
    localStorage.setItem("tasks", JSON.stringify(taskList)); // Save task list to localStorage
    renderTaskList(); // Render updated task list
} 

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // Your code here
});
