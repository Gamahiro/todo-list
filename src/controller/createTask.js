import { removeAllChildren, uiCreateTaskForm } from "../view/htmlGenerator";
import { getProjectCollection, modelNewTask } from "../model/model";
import {uiUpdateTasks} from "./updateTask";

function controllerCreateTask(modelTaskTitle, modelTaskDescription, modelTaskPriority, modelTaskTimeDate, modelProject) {

    modelNewTask(modelTaskTitle, modelTaskDescription, modelTaskPriority, modelTaskTimeDate, modelProject);

    uiUpdateTasks(modelProject);

}

//submitevent creates new modelTask
function uiTaskFormSubmitEvent() {
    document.querySelector('#taskForm').onsubmit = function (e) {
        e.preventDefault();

        controllerCreateTask(
            document.querySelector('#title').value,
            document.querySelector('#description').value,
            document.querySelector('#priority').value,
            document.querySelector('#dateTime').value,
            getProjectCollection()[document.querySelector('.selectProject').value].project
        )
    }
}


//creates form options for projects from the projectCollection. for creating tasks
function controllerGenerateFormProjectOptions() {

    let labelProject = document.createElement('label');
    labelProject.for = 'project';
    labelProject.textContent = 'Project:';


    let selectProject = document.createElement('select');
    selectProject.className = 'selectProject';
    getProjectCollection().forEach((element, i) => {
        let projectOption = document.createElement('option');
        projectOption.value = i;
        projectOption.textContent = element.name;
        selectProject.appendChild(projectOption);
    })
    document.querySelector('#taskForm').insertBefore(labelProject, document.querySelector('#submitForm'));
    document.querySelector('#taskForm').insertBefore(selectProject, document.querySelector('#submitForm'));
}

//event to create/append the taskform when addtask button clicked
function uiCreateTaskFormEvent() {
    document.querySelector('#addTask').addEventListener('click', () => {
        removeAllChildren(document.querySelector('.divForm'));
        uiCreateTaskForm();
        controllerGenerateFormProjectOptions();
        uiTaskFormSubmitEvent();

    });
}

export {uiCreateTaskFormEvent}