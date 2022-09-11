import {modelNewProject, modelNewTask, modelEditProject} from '../model/model';
import {appendProjects,  removeAllChildren,  uiAppendTask } from '../view/htmlGenerator';


document.querySelector('.addTask').addEventListener('click', () => {
    createForm();
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

removeAllChildren(document.querySelector('.tasks'));

modelProject.forEach(function(i) {
    uiAppendTask(modelProject[i]);
    btn = document.querySelector('#rmTaskbtn' + i)
    btn.addEventListener('click', () => {

        project.splice(i, 1);
        tasks.removeChild(card);
    });
});
}
















function init() {

}