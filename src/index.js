import './style.css';
import { taskFactory } from './factory/taskFactory.js';
import { createForm, appendToProject } from './htmlGenerator';
import { projectFactory } from './factory/projectFactory';

/* const defaultProject = []; */

const projects = [];
console.log(projects);
projects.push(createProject('Default Project'));

function createProject(name) {
    let newProject = projectFactory(name);
    projects.push(newProject);
}


function createTask(taskTitle, taskDescription, taskPriority, taskTimeDate, project) {

    let newTask = taskFactory(taskTitle, taskDescription, taskPriority, taskTimeDate);

    if (project == undefined) {
        project = projects[0].project;
    }
    project.push(newTask);
    appendToProject(project);
    console.log(project);
console.log(projects);

}


document.querySelector('.addTask').addEventListener('click', () => {

    createForm();
});


createProject('test');
createTask('test', 'testing descr', 2, '', projects[2].project);


export { createTask };