
// Po naciśnięciu guzika Remove finished tasks wszystkie zrobione zadania mają zniknąć z listy.
// Ponad listą ma się znajdować licznik pokazujący, ile zadań zostało nam do zrobienia.


document.addEventListener("DOMContentLoaded", function() {

var addButton = document.getElementById("addTaskButton");
var removeButton = document.getElementById("removeFinishedTasksButton");

var counter = 1;
var taskCounter = 0;
var counterDisplay = document.getElementById("counter");

addButton.addEventListener("click", addNewTask);
removeButton.addEventListener("click", removeAll);

function addNewTask() {

       
    var taskInput = document.getElementById("taskInput");
    if (taskInput.value.length > 5 && taskInput.value.length < 100) {

    var newTaskList = document.createElement("li");
    newTaskList.classList.add("list")
    var newTaskName = document.createElement("h1");
    newTaskName.innerText = "("+counter+") " + taskInput.value;
    var newDeleteButton = document.createElement("button");
    newDeleteButton.innerText = "Delete";
    var newCompleteButton = document.createElement("button");
    newCompleteButton.innerText = "Complete";
    newTaskList.appendChild(newTaskName);
    newTaskList.appendChild(newDeleteButton);
    newTaskList.appendChild(newCompleteButton);
    taskList.appendChild(newTaskList);
    counter++;
    taskCounter++;
    taskInput.value = "";
    //set initial value to "Tasks to finish:"
    counterDisplay.innerHTML = taskCounter; 
    focus(taskInput);
    newDeleteButton.addEventListener("click", deleteTask);
    newCompleteButton.addEventListener("click", completeTask);
}   else {
    taskInput.value = "";
    taskInput.placeholder = "Treść zadania musi posiadadać 6-99 znaków."

}
}

function deleteTask() {
    this.parentElement.remove();
    counter--;
    if (this.parentElement.classList.contains('done') == false) {
        counter--;
    taskCounter--;
    counterDisplay.innerHTML = taskCounter;
    }
}
function completeTask() {
    this.parentElement.classList.toggle("done");
    if (document.getElementById("taskList").children.length == counterDisplay.innerHTML) {
    taskCounter--;
    counterDisplay.innerHTML = taskCounter;
    } else {
        taskCounter++;
    counterDisplay.innerHTML = taskCounter;
    }
}

function removeAll() {
    var ulChildren = document.getElementsByClassName("done");
    var ulChildren2 = document.getElementById("taskList");

    for (var i = 0; i < ulChildren.length; i++) {
        ulChildren2.children[i].remove();  //tu trzeba zmienic
        counter--;
    }
    counterDisplay.innerHTML = taskCounter;
}


});


