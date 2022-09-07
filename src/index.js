import './style.css';
import { taskFactory } from './factory/taskFactory.js';
import { createForm, appendTask, appendProjects, addProjectFormOptions } from './htmlGenerator';
import { projectFactory } from './factory/projectFactory';
import { storageAvailable, saveProjects, loadProjects } from './localStorage';

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


export { createTask, createProject, projects };