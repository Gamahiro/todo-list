import {modelNewProject, modelNewTask, modelEditProject, getProjectCollection} from '../model/model';
import {uiAppendProjects,  removeAllChildren,  uiAppendTask, uiCreateTaskForm } from '../view/htmlGenerator';
import { saveCheck } from './saveController';

/* 
functions for creating and updating tasks and projects
 */


function controllerCreateProject(modelProjectName, modelProjectDescription) {
newProject = modelNewProject(modelProjectName, modelProjectDescription);
uiAppendProjects(newProject);
}



function controllerEditProject(project, newName, newDescription) {
editedProject = modelEditProject(project, newName, newDescription);
uiAppendProjects(editedProject);

}

//creates modelTask and updates uiTasks
function controllerCreateTask(modelTaskTitle, modelTaskDescription, modelTaskPriority, modelTaskTimeDate, modelProject) {

    modelNewTask(modelTaskTitle, modelTaskDescription, modelTaskPriority, modelTaskTimeDate, modelProject);

    uiUpdateTasks(modelProject);

}

//removes and rebuilds all tasks to DOM
function uiUpdateTasks(modelProject) {
    removeAllChildren(document.querySelector('.tasks'));
    modelProject.forEach(function(element, i) {
        uiAppendTask(element, i);
        let btn = document.querySelector('#rmTaskbtn' + i);
        btn.addEventListener('click', () => {
    
            modelProject.splice(i, 1);
            document.querySelector('.tasks').removeChild(document.querySelector('#card' + i));
        });
    });
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

//creates form options for projects from the projectCollection
function controllerGenerateFormProjectOptions() {
    
    let labelProject = document.createElement('label');
    labelProject.for = 'project';
    labelProject.textContent = 'Project:';


    let selectProject = document.createElement('select');
    selectProject.className = 'selectProject';
    getProjectCollection().forEach((element,i) => {
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
    document.querySelector('.addTask').addEventListener('click', () => {
        removeAllChildren(document.querySelector('.divForm'));
        uiCreateTaskForm();
        controllerGenerateFormProjectOptions();
        uiTaskFormSubmitEvent();

    });
}

function controllerInit(){

    saveCheck();
    uiCreateTaskFormEvent();
};


export {controllerInit}