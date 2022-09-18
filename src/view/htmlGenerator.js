import { projectSettingsBtn } from "../controller/updateProject";
import { uiUpdateTasks } from "../controller/updateTask";

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



function uiAppendTask(modelTask, index) {

    let card = document.createElement('div');
    card.className = 'card';
    card.id = 'card' + index;

    let priority = document.createElement('div');
    priority.className = 'cardPriority';
    priority.id = 'cardPriority' + index;
    if (modelTask.taskPriority === '1') {
        priority.style.backgroundColor = 'red';
    }
    else if (modelTask.taskPriority === '2') {
        priority.style.backgroundColor = 'yellow';
    }
    else if (modelTask.taskPriority === '3') {
        priority.style.backgroundColor = 'green';
    }
    card.appendChild(priority);

    let title = document.createElement('div');
    title.textContent = `${modelTask.taskTitle}`;
    title.className = 'cardTitle';
    title.id = 'cardTitle' + index;
    title.style.fontWeight = '900';
    card.appendChild(title);

    let description = document.createElement('div');
    description.textContent = `${modelTask.taskDescription}`;
    description.className = 'cardDescription';
    description.id = 'cardDescription' + index;
    description.style.display = 'none'
    card.appendChild(description);

    let dateTime = document.createElement('div');
    dateTime.textContent = `${modelTask.taskTimeDate}`;
    dateTime.className = 'cardDateTime';
    dateTime.id = 'cardDateTime' + index;
    dateTime.style.display = 'none'
    card.appendChild(dateTime);

    let btnContainer = document.createElement('div');
    btnContainer.className = 'btnContainer';
    btnContainer.style.display = 'flex';

    let btn = document.createElement('button');
    btn.className = 'material-icons';
    btn.textContent = 'delete';
    btn.id = 'rmTaskbtn' + index;
    btn.style.display = 'none'
    btnContainer.appendChild(btn);

    let editBtn = document.createElement('button');
    editBtn.className = 'material-icons';
    editBtn.textContent = 'settings';
    editBtn.id = 'editTaskBtn' + index;
    editBtn.style.display = 'none';  
    btnContainer.appendChild(editBtn);

    card.appendChild(btnContainer);
    tasks.appendChild(card);

}


function uiAppendProjects(projectCollection) {

    const projectList = document.querySelector('#projects');

    let child = projectList.lastElementChild;
    while (child) {
        projectList.removeChild(child);
        child = projectList.lastElementChild;
    }

    for (let i = projectCollection.length - 1; i >= 0; i--) {

        let projectListElement = document.createElement('li');
        projectListElement.textContent = `${projectCollection[i].name}`;
        projectListElement.className = 'projectListElement';

        
        projectListElement.addEventListener('click', () => {
            uiUpdateTasks(projectCollection[i].project);
            uiCreateProjectInfo(projectCollection[i]);
            projectSettingsBtn();
        });

        projectList.appendChild(projectListElement);
    }
}

function uiCreateProjectInfo(project) {
    removeAllChildren(divForm);

    let projectContainer = document.createElement('div');
    let projectDisplayedName = document.createElement('div');
    let projectDisplayedDescr = document.createElement('p');

    projectContainer.className = 'projectContainer';


    projectDisplayedName.textContent = project.name;
    projectDisplayedDescr.textContent = project.description;

    let settingsBtn = document.createElement('button');
    settingsBtn.className = 'projectSettingsBtn';
    settingsBtn.textContent = 'Settings';

    projectContainer.appendChild(settingsBtn);
    projectContainer.appendChild(projectDisplayedName);
    projectContainer.appendChild(projectDisplayedDescr);
    divForm.appendChild(projectContainer); 

}

function uiCreateEditTaskForm(index, taskTitle, taskDescription, taskPriority, taskTimeDate) {
    
    let cardEditForm = document.createElement('form')
    cardEditForm.id = 'cardEditForm' + index;
    cardEditForm.className = 'cardEditForm';

    let inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'title';
    inputTitle.name = 'title';
    inputTitle.value = taskTitle;
    inputTitle.required = true;


    let inputDescription = document.createElement('input');
    inputDescription.type = 'text';
    inputDescription.id = 'description';
    inputDescription.name = 'description';
    inputDescription.value = taskDescription;

    let selectPriority = document.createElement('select');
    selectPriority.id = 'priority';
    selectPriority.name = 'priority';
    selectPriority.value = taskPriority;

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

    let inputDateTime = document.createElement('input');
    inputDateTime.type = 'datetime-local';
    inputDateTime.id = 'dateTime';
    inputDateTime.name = 'dateTime';
    inputDateTime.value = taskTimeDate;


    

    let submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Submit';
    submitBtn.id = 'submitEditForm';

    cardEditForm.appendChild(inputTitle);
    cardEditForm.appendChild(inputDescription);
    cardEditForm.appendChild(selectPriority);
    cardEditForm.appendChild(inputDateTime);
    cardEditForm.appendChild(submitBtn);

    let card = document.querySelector(`#card${+ index}`);
    card.appendChild(cardEditForm);
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

    projectForm.appendChild(labelTitle);
    projectForm.appendChild(inputTitle);
    projectForm.appendChild(labelDescription);
    projectForm.appendChild(inputDescription);
    projectForm.appendChild(submitBtn);   
    document.querySelector('.divForm').appendChild(projectForm);
    
}

export { uiAppendProjects, removeAllChildren, uiAppendTask, uiFormCreateProjectOptions, uiCreateTaskForm, uiProjectForm, uiCreateEditTaskForm }