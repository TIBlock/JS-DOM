/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/




var addButton = document.getElementById("add-button");
//This adds a new list element after pulling the value of the description field.//


// first I want to make sure I can add something to my todolist
// I laid out my element ID and will make sure i can pull the right information

addButton.addEventListener('click', function(){
    var todoList = document.getElementById("todo-list");
    var listEl = document.createElement("li");
    var fieldInput = document.getElementById("description").value;
    if (fieldInput === '') {
        null
    }
    else {
        document.getElementById("description").value = "";
        listEl.innerHTML = fieldInput;
        todoList.appendChild(listEl);
    }
});

//In this function I would like to set the li elements to strikethrough when clicked using a .this or .targetself//

var todoList = document.getElementById('todo-list');

todoList.addEventListener('click', function(event){
        event.target.classList.toggle('strikethrough')
});


