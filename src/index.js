import './style.css';

const defaultProject = [];

const taskFactory = (taskTitle, taskDescription, taskPriority, taskTimeDate) => {

    return { taskTitle, taskDescription, taskPriority, taskTimeDate };

};


function createTask(taskTitle, taskDescription, taskPriority, taskTimeDate, project) {

    let newTask = taskFactory(taskTitle, taskDescription, taskPriority, taskTimeDate);

    if (project == undefined) {
        project = defaultProject;
    }
    project.push(newTask);
    console.log(project);
}

createTask('Dentist', 'At 123 road', '1', '2pm');

