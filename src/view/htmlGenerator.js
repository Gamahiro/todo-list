import { modelNewTask, modelNewProject, modelEditProject, compareTasks } from "../model/model";

const content = document.querySelector('.content');
const tasks = document.querySelector('.tasks');
const divForm = document.querySelector('.divForm');


function removeAllChildren(elementToRemoveFrom) {
    let child = elementToRemoveFrom.lastElementChild;
    while (child) {
        elementToRemoveFrom.removeChild(child);
        child = elementToRemoveFrom.lastElementChild;
    }
}

function sortSmallToBig(project) {
    project.sort(compareTasks);

}

function uiAppendTask(modelTask) {

    let card = document.createElement('div');
    card.className = 'card';
    card.id = 'card' + indexOf(modelTask);

    if (modelTask.taskPriority === '1') {
        card.style.border = '2px solid red';
    }
    else if (modelTask.taskPriority === '2') {
        card.style.border = '2px solid yellow';
    }

    let title = document.createElement('div');
    title.textContent = `Title: ${modelTask.taskTitle}`;
    title.className = 'cardTitle';
    card.appendChild(title);

    let description = document.createElement('div');
    description.textContent = `Description: ${modelTask.taskDescription}`;
    description.className = 'cardDescription';
    card.appendChild(description);

    let priority = document.createElement('div');
    priority.textContent = `Priority: ${modelTask.taskPriority}`;
    priority.className = 'cardPriority';
    card.appendChild(priority);

    let dateTime = document.createElement('div');
    dateTime.textContent = `Time and Date: ${modelTask.taskTimeDate}`;
    dateTime.className = 'cardDateTime';
    card.appendChild(dateTime);

    tasks.appendChild(card);

    let btn = document.createElement('button');
    btn.className = 'rmTaskBtn';
    btn.textContent = 'Remove Task';
    btn.id = 'rmTaskbtn' + indexOf(modelTask);
    card.appendChild(btn);


}


function uiAppendProjects(project) {

    const projectList = document.querySelector('#projects');

    let child = projectList.lastElementChild;
    while (child) {
        projectList.removeChild(child);
        child = projectList.lastElementChild;
    }

    for (let i = project.length - 1; i >= 0; i--) {


        let projectListElement = document.createElement('li');
        projectListElement.textContent = `${project[i].name}`;
        projectListElement.className = 'projectListElement';
        projectList.appendChild(projectListElement);



    }
}







function uiFormCreateProjectOptions() {

    let projectOption = document.createElement('option');
    projectOption.value = i;
    projectOption.name = element.name;
}


function uiCreateTaskForm() {


    let taskForm = document.createElement('form');
    taskForm.id = 'taskForm';

    let labelTitle = document.createElement('label');
    labelTitle.for = 'title';
    labelTitle.textContent = 'Title:';

    let inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'title';
    inputTitle.name = 'title';
    inputTitle.required = true;

    let labelDescription = document.createElement('label');
    labelDescription.for = 'description';
    labelDescription.textContent = 'Description:';

    let inputDescription = document.createElement('input');
    inputDescription.type = 'text';
    inputDescription.id = 'description';
    inputDescription.name = 'description';

    let labelPriority = document.createElement('label');
    labelPriority.for = 'priority';
    labelPriority.textContent = 'Priority';

    let selectPriority = document.createElement('select');
    selectPriority.id = 'priority';
    selectPriority.name = 'priority';
    selectPriority.value = '1';

    let priorityOption1 = document.createElement('option');
    priorityOption1.value = '1';
    priorityOption1.textContent = '1';

    let priorityOption2 = document.createElement('option');
    priorityOption2.value = '2';
    priorityOption2.textContent = '2';

    let priorityOption3 = document.createElement('option');
    priorityOption3.value = '3';
    priorityOption3.textContent = '3';

    selectPriority.appendChild(priorityOption1);
    selectPriority.appendChild(priorityOption2);
    selectPriority.appendChild(priorityOption3);

    let labeldateTime = document.createElement('label');
    labeldateTime.for = 'dateTime';
    labeldateTime.textContent = 'Time and Date:';

    let inputDateTime = document.createElement('input');
    inputDateTime.type = 'datetime-local';
    inputDateTime.id = 'dateTime';
    inputDateTime.name = 'dateTime';
    inputDateTime.value = '';

    let labelProject = document.querySelector('.labelProject');
    

    let submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Submit';
    submitBtn.id = 'submitForm';

    taskForm.appendChild(labelTitle);
    taskForm.appendChild(inputTitle);
    taskForm.appendChild(labelDescription);
    taskForm.appendChild(inputDescription);
    taskForm.appendChild(labelPriority);
    taskForm.appendChild(selectPriority);
    taskForm.appendChild(labeldateTime);
    taskForm.appendChild(inputDateTime);
    taskForm.appendChild(labelProject);
    taskForm.appendChild(submitBtn);

    divForm.insertBefore(taskForm, divForm.firstChild);


}


function uiProjectForm() {
    let projectForm = document.createElement('form');
    projectForm.id = 'projectForm';

    let labelTitle = document.createElement('label');
    labelTitle.for = 'title';
    labelTitle.textContent = 'Title:';

    let inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'title';
    inputTitle.name = 'title';
    inputTitle.required = true;

    let labelDescription = document.createElement('label');
    labelDescription.for = 'description';
    labelDescription.textContent = 'Description';

    let inputDescription = document.createElement('input');
    inputDescription.type = 'text';
    inputDescription.id = 'description';
    inputDescription.name = 'description';

    let submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Submit';
    submitBtn.id = 'submitForm';



}





function initEvents() {


}

function viewInit() {
    initEvents();

}


export { uiAppendProjects, removeAllChildren, uiAppendTask, viewInit, uiFormCreateProjectOptions, uiCreateTaskForm }