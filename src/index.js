import './style.css';
import { taskFactory } from './factory/taskFactory.js';
import { createForm, appendTask, appendProjects, addProjectFormOptions } from './htmlGenerator';
import { projectFactory } from './factory/projectFactory';

/* const defaultProject = []; */


const projects = [];





function createProject(projectName) {
    let newProject = projectFactory(projectName);
    projects.push(newProject);
}


function createTask(taskTitle, taskDescription, taskPriority, taskTimeDate, project) {

    let newTask = taskFactory(taskTitle, taskDescription, taskPriority, taskTimeDate);

    if (project == undefined) {
        project = projects[0].project;
    }
     project.push(newTask);
    appendTask(project);
}


document.querySelector('.addTask').addEventListener('click', () => {

    createForm();
});

function init() {
createProject('Default Project', 'Default Project');
createProject('New Project', 'For planning event');
appendProjects(projects);
}

init();


export { createTask, createProject, projects };