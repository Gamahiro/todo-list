import { projectFactory } from "./factory/projectFactory";
import { taskFactory } from "./factory/taskFactory";
//main array, holds projects
let projectCollection = [];




function modelNewProject(projectName, projectDescription) {

    let newProject = projectFactory(projectName, projectDescription);
    projectCollection.push(newProject);
    return newProject;
}

function modelEditProject(project, newName, newDescription) {
    if (newName === undefined) {
        newName = project.name;
    }
    if (newDescription === undefined) {
        newDescription = project.description;
    }
    project.name = newName;
    project.description = newDescription;
    return project;
}

function modelNewTask(taskTitle, taskDescription, taskPriority, taskTimeDate, project) {

    let newTask = taskFactory(taskTitle, taskDescription, taskPriority, taskTimeDate);
    if (project == undefined) {
        project = projectCollection[0].project;
    }
    project.push(newTask);
}

function modelEditTask(modelTaskObject, newTaskTitle, newTaskDescription, newTaskPriority, newTaskTimeDate, newAssignedProject) {


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

export {modelNewProject, modelNewTask, modelEditProject};