
let projects = [];

function createProject(projectName, projectDescription) {
    let newProject = projectFactory(projectName, projectDescription);

    projects.push(newProject);
    saveProjects(projects);

}


function createTask(taskTitle, taskDescription, taskPriority, taskTimeDate, project) {

    let newTask = taskFactory(taskTitle, taskDescription, taskPriority, taskTimeDate);
    if (project == undefined) {
        project = projects[0].project;
    }
    project.push(newTask);
    appendTask(project);
    saveProjects(projects);
}

function updateProjects() {
    saveProjects(projects);
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