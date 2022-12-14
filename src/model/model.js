import { projectFactory } from "./factory/projectFactory";
import { taskFactory } from "./factory/taskFactory";
import { save, load, saveCheck } from "./localStorage";
//main array, holds projects
let projectCollection = [];

function getProjectCollection() {
    return projectCollection;
}

function removeProjectCollectionElement(index) {
    projectCollection.splice(index, 1);
}

function saveProjectCollection() {
save(projectCollection);
}
function loadProjectCollection() {
    projectCollection = load();
}

function modelNewProject(projectName, projectDescription) {

    let newProject = projectFactory(projectName, projectDescription);
    projectCollection.push(newProject);
    saveProjectCollection();
    return newProject;
}

function modelEditProject(project, newProjectName, newProjectDescription) {
    project.name = newProjectName;
    project.description = newProjectDescription;
    saveProjectCollection();
    return project;
}

function modelNewTask(taskTitle, taskDescription, taskPriority, taskTimeDate, project) {

    let newTask = taskFactory(taskTitle, taskDescription, taskPriority, taskTimeDate);
    if (project == undefined) {
        project = projectCollection[0].project;
    }
    project.push(newTask);
    saveProjectCollection();
}

function modelEditTask(modelTaskObject, newTaskTitle, newTaskDescription, newTaskPriority, newTaskTimeDate) {

    modelTaskObject.taskTitle = newTaskTitle;
    modelTaskObject.taskDescription = newTaskDescription;
    modelTaskObject.taskPriority = newTaskPriority;
    modelTaskObject.taskTimeDate = newTaskTimeDate;

}




function compareTasks(taskA, taskB) {
    if (taskA.taskTimeDate < taskB.taskTimeDate) {
        return -1;
    }
    if (taskA.taskTimeDate < taskB.taskTimeDate) {
        return 1;
    }
    return 0;
}

export {modelNewProject, modelNewTask, modelEditProject, modelEditTask, compareTasks, saveProjectCollection, loadProjectCollection, getProjectCollection, removeProjectCollectionElement};