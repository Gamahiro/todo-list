import { createTask, createProject, projects, updateProjects, compareTasks } from "..";
const content = document.querySelector('.content');
const tasks = document.querySelector('.tasks');
const newProjectBtn = document.querySelector('#newProjectBtn');
const divForm = document.querySelector('.divForm');


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

function removeAllChildren(elementToRemoveFrom) {
    let child = elementToRemoveFrom.lastElementChild;
    while (child) {
        elementToRemoveFrom.removeChild(child);
        child = elementToRemoveFrom.lastElementChild;
    }
}

function sortSmallToBig() {
    project.sort(compareTasks);

}

function appendTask(project) {

        let card = document.createElement('div');
        card.className = 'card';
        card.id = 'card' + indexOf(project);

        if(project.taskPriority === '1') {
            card.style.border = '2px solid red';
        }
        else if (project.taskPriority === '2') {
            card.style.border = '2px solid yellow';
        }

        let title = document.createElement('div');
        title.textContent = `Title: ${project.taskTitle}`;
        title.className = 'cardTitle';
        card.appendChild(title);

        let description = document.createElement('div');
        description.textContent = `Description: ${project.taskDescription}`;
        description.className = 'cardDescription';
        card.appendChild(description);

        let priority = document.createElement('div');
        priority.textContent = `Priority: ${project.taskPriority}`;
        priority.className = 'cardPriority';
        card.appendChild(priority);

        let dateTime = document.createElement('div');
        dateTime.textContent = `Time and Date: ${project.taskTimeDate}`;
        dateTime.className = 'cardDateTime';
        card.appendChild(dateTime);

        tasks.appendChild(card);

        let btn = document.createElement('button');
        btn.className = 'rmTaskBtn';
        btn.textContent = 'Remove Task';
        btn.id = 'rmbtn' + indexOf(project);
        card.appendChild(btn);

        btn.addEventListener('click', () => {

            project.splice(i, 1);
            tasks.removeChild(card);
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

            let projectContainer = document.createElement('div');
            let projectDisplayedName = document.createElement('div');
            let projectDisplayedDescr = document.createElement('p');

            projectContainer.className = 'projectContainer';
            divForm.innerHTML = '';


            projectDisplayedName.textContent = project[i].name;
            projectDisplayedDescr.textContent = project[i].description;

            projectContainer.appendChild(projectDisplayedName);
            projectContainer.appendChild(projectDisplayedDescr);
            divForm.appendChild(projectContainer);

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


function toggleHideProjects() {
    let projectsList = document.querySelector('#projects');

    if (projectsList.style.display != 'none') {
        projectsList.style.display = 'none';
    }
    else {
        projectsList.style.display = 'block';
    }

}
document.querySelector('#projectsBtn').addEventListener('click', function (e) {

    if (e.target !== this)
        return;

    toggleHideProjects();

});

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



export { createForm, appendTask, appendProjects};