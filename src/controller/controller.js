import {modelNewProject, modelNewTask, modelEditProject, checkIfSaveExist, save, load, getProjectCollection} from '../model/model';
import {uiAppendProjects,  removeAllChildren,  uiAppendTask, viewInit, uiFormCreateProjectOptions, uiCreateTaskForm } from '../view/htmlGenerator';

const projectCollection = getProjectCollection();




//functions for creating and updating tasks and projects

function controllerCreateProject(modelProjectName, modelProjectDescription) {
newProject = modelNewProject(modelProjectName, modelProjectDescription);
uiAppendProjects(newProject);
}


function controllerEditProject(project, newName, newDescription) {
editedProject = modelEditProject(project, newName, newDescription);
uiAppendProjects(editedProject);

}


function controllerCreateTask(modelTaskTitle, modelTaskDescription, modelTaskPriority, modelTaskTimeDate, modelProject) {
newTask = modelNewTask(modelTaskTitle, modelTaskDescription, modelTaskPriority, modelTaskTimeDate, modelProject);


modelProject.forEach(function(i) {
    uiAppendTask(modelProject[i]);
    btn = document.querySelector('#rmTaskbtn' + i)
    btn.addEventListener('click', () => {

        modelProject.splice(i, 1);
        tasks.removeChild(card);
    });
});
}

function uiTaskFormSubmitEvent() {
    document.querySelector('#taskForm').onsubmit = function (e) {
        e.preventDefault();

        controllerCreateTask(
            document.querySelector('#title').value,
            document.querySelector('#description').value,
            document.querySelector('#priority').value,
            document.querySelector('#dateTime').value,
            projectCollection[document.querySelector('#project').value].project
        )
    }
}

function controllerGenerateFormProjectOptions() {
    let labelProject = document.createElement('select');
    labelProject.for = 'project';
    labelProject.className = 'labelProject';

    projectCollection.forEach((element,i) => {
        let projectOption = document.createElement('option');
        projectOption.value = i;
        projectOption.name = element.name;
        labelProject.appendChild(projectOption);
    })


}

function uiCreateTaskFormEvent() {
    document.querySelector('.addTask').addEventListener('click', () => {
        removeAllChildren(document.querySelector('.divForm'));
        controllerGenerateFormProjectOptions();
        uiCreateTaskForm();
    });
}

function controllerInit(){
    checkIfSaveExist();
    viewInit();
    uiCreateTaskFormEvent();
};


function init() {

}

export {controllerInit}