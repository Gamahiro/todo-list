import './style.css';
import { taskFactory } from './factory/taskFactory.js';
import { createForm, appendTask, appendProjects } from './htmlGenerator';
import { projectFactory } from './factory/projectFactory';
import { saveProjects, loadProjects } from './localStorage';

/* const defaultProject = []; */



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


document.querySelector('.addTask').addEventListener('click', () => {

    createForm();
    saveProjects(projects);

});

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


function init() {
    if (!localStorage.getItem('projects')) {
        createProject('Default Project', 'The default project');
        saveProjects(projects);
      } else {
        projects = loadProjects();
      }
    appendProjects(projects);

}

init();


export { createTask, createProject, projects, updateProjects, compareTasks };