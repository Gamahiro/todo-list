import {modelNewProject, modelNewTask, modelEditProject, checkIfSaveExist, save, load} from '../model/model';
import {uiAppendProjects,  removeAllChildren,  uiAppendTask } from '../view/htmlGenerator';
import { saveCheck } from '../model/localStorage';


document.querySelector('.addTask').addEventListener('click', () => {
    createForm();
});


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


function controllerInit(){
    checkIfSaveExist();
};


function init() {

}

export {controllerInit}