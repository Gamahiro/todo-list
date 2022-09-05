import './style.css';
import { taskFactory } from './factory/taskFactory';
import { createForm } from './htmlGenerator';


const defaultProject = [];




function createTask(taskTitle, taskDescription, taskPriority, taskTimeDate, project) {

    let newTask = taskFactory(taskTitle, taskDescription, taskPriority, taskTimeDate);

    if (project == undefined) {
        project = defaultProject;
    }
    project.push(newTask);
    console.log(project);
}

createTask('Dentist', 'At 123 road', '1', '2pm');

document.querySelector('.addTask').addEventListener('click', () => {
    
    createForm();
    });

    export {createTask};