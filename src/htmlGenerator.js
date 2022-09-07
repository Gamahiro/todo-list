import { createTask, createProject} from ".";
const content = document.querySelector('.content');
const tasks = document.querySelector('.tasks');
const newProjectBtn = document.querySelector('#newProjectBtn');
const divForm = document.querySelector('.divForm');


//@todo fix multiplying form
function createForm() {
    divForm.innerHTML = taskForm;

    content.insertBefore(divForm, content.firstChild);

    document.querySelector('#taskForm').onsubmit = function (e) {
        e.preventDefault();

        createTask(
            document.querySelector('#title').value,
            document.querySelector('#description').value,
            document.querySelector('#priority').value,
            document.querySelector('#dateTime').value
        )

    }
}

function appendTask(project) {

    console.log(project);

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

        console.log(project[i].name);

        let projectListElement = document.createElement('li');
        projectListElement.textContent = `${project[i].name}`;
        projectListElement.className = 'projectListElement';
        console.log();
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


// 2022-09-07T09:42

let formOptions = ``;
let defaultProject;

function addProjectFormOptions(project) {
console.log(project);
defaultProject = project[0];
    project.forEach((element) => {
        formOptions += `<option value="${element.name.replace(/\s/g, '')}">${element.name}</option>`;
    })
}


const taskForm = `<form id ="taskForm">
<label for="title">Title:</label>
<input type="text" id="title" name="title" >

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
<select id="project" name="project" value="${defaultProject}">
    ${formOptions}
</select>

<input type="submit" value="Submit" id="submitForm">
</form>`;

const projectForm = `<form id ="projectForm">
<label for="title">Title:</label>
<input type="text" id="title" name="title" >

<label for="description">Description:</label>
<input type="text" id="description" name="description">
<input type="submit" value="Submit" id="submitForm">
</form>`;



export { createForm, appendTask, appendProjects, addProjectFormOptions };