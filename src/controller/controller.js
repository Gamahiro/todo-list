import {modelNewProject, modelNewTask, modelEditProject} from '../model/model';
import {appendProjects,  appendTask } from '../view/htmlGenerator';


document.querySelector('.addTask').addEventListener('click', () => {

    createForm();
    saveProjects(projects);

});


//functions for creating and updating tasks and projects

function controllerCreateProject(modelProjectName, modelProjectDescription) {
newProject = modelNewProject(modelProjectName, modelProjectDescription);
appendProjects(newProject);
}


function controllerEditProject(project, newName, newDescription) {
editedProject = modelEditProject(project, newName, newDescription);
appendProjects(editedProject);

}


function controllerCreateTask(modelTaskTitle, modelTaskDescription, modelTaskPriority, modelTaskTimeDate, modelProject) {
newTask = modelNewTask(modelTaskTitle, modelTaskDescription, modelTaskPriority, modelTaskTimeDate, modelProject);
appendTask(modelProject);
}
















function init() {

}