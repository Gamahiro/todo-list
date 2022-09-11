

//main array, holds projects
let projects = [];




function modelNewProject(projectName, projectDescription) {

    let newProject = projectFactory(projectName, projectDescription);
    projects.push(newProject);
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
        project = projects[0].project;
    }
    project.push(newTask);
}

function modelEditTask(task) {


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