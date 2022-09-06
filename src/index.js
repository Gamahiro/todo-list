import './style.css';
import { taskFactory } from './factory/taskFactory.js';
import { createForm, appendToProject } from './htmlGenerator';


const defaultProject = [];




function createTask(taskTitle, taskDescription, taskPriority, taskTimeDate, project) {

    let newTask = taskFactory(taskTitle, taskDescription, taskPriority, taskTimeDate);

    if (project == undefined) {
        project = defaultProject;
    }
    project.push(newTask);
    appendToProject(project);
    console.log(project);
}


document.querySelector('.addTask').addEventListener('click', () => {
    
    createForm();
    });

    export {createTask};