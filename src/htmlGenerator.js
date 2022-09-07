import { createTask, createProject, projects } from ".";
const content = document.querySelector('.content');
const tasks = document.querySelector('.tasks');
const newProjectBtn = document.querySelector('#newProjectBtn');
const divForm = document.querySelector('.divForm');


//@todo fix multiplying form
function createForm() {
    divForm.innerHTML = addProjectFormOptions();

    content.insertBefore(divForm, content.firstChild);

    document.querySelector('#taskForm').onsubmit = function (e) {
        e.preventDefault();

        createTask(
            document.querySelector('#title').value,
            document.querySelector('#description').value,
            document.querySelector('#priority').value,
            document.querySelector('#dateTime').value,
            projects[document.querySelector('#project').value].project
        )

    }
}

function appendTask(project) {


    let child = tasks.lastElementChild;
    while (child) {
        tasks.removeChild(child);
        child = tasks.lastElementChild;
    }

    project.forEach(function (value, i) {

        let card = document.createElement('div');
        card.className = 'card';
        card.id = 'card' + i;

        let title = document.createElement('div');
        title.innerHTML = `Title: ${value.taskTitle}`;
        title.className = 'cardTitle';
        card.appendChild(title);

        let description = document.createElement('div');
        description.innerHTML = `Description: ${value.taskDescription}`;
        description.className = 'cardDescription';
        card.appendChild(description);

        let priority = document.createElement('div');
        priority.innerHTML = `Priority: ${value.taskPriority}`;
        priority.className = 'cardPriority';
        card.appendChild(priority);

        let dateTime = document.createElement('div');
        dateTime.innerHTML = `Time and Date: ${value.taskTimeDate}`;
        dateTime.className = 'cardDateTime';
        card.appendChild(dateTime);

        tasks.appendChild(card);

    });

}

function appendProjects(project) {

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


        projectListElement.addEventListener('click', () => {
            appendTask(project[i].project);
        });
    }
}

newProjectBtn.addEventListener('click', () => {
    divForm.innerHTML = projectForm;

    document.querySelector('#projectForm').onsubmit = function (e) {
        e.preventDefault();

        createProject(
            document.querySelector('#title').value,
            document.querySelector('#description').value,
        )
        appendProjects(projects);
    }
});

document.querySelector('#projectsBtn').addEventListener('click', toggleHideProjects);

function toggleHideProjects() {
    let projectsList = document.querySelector('#projects');

    if (projectsList.style.display != 'none') {
        projectsList.style.display = 'none';
    }
 else {
    projectsList.style.display = 'block';
}

}


function addProjectFormOptions() {
    let formOptions = ``;

    projects.forEach((element, i) => {
        formOptions += `<option value="${i}">${element.name}</option>`;
    })

    let taskForm = `<form id ="taskForm">
<label for="title">Title:</label>
<input type="text" id="title" name="title" required>

<label for="description">Description:</label>
<input type="text" id="description" name="description">


<label for="priority">Priority:</label>
<select id="priority" name="priority" value="1">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>

<label for="dateTime">Time and Date:</label>
<input type="datetime-local" id="dateTime" name="dateTime" value="" >



<label for="project"></label>
<select id="project" name="project">
    ${formOptions}
</select>

<input type="submit" value="Submit" id="submitForm">
</form>`;

    return taskForm;
}





const projectForm = `<form id ="projectForm">
<label for="title">Title:</label>
<input type="text" id="title" name="title" required>

<label for="description">Description:</label>
<input type="text" id="description" name="description">
<input type="submit" value="Submit" id="submitForm">
</form>`;



export { createForm, appendTask, appendProjects };