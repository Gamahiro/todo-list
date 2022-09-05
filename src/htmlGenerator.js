import { createTask } from ".";

const newForm = document.createElement('div');
const submit = document.createElement('div');
const newCard = document.createElement('div');
const content = document.querySelector('.content');

function createForm () {
    let divForm = newForm;
    divForm.innerHTML = form;
    content.append(divForm);
    
    document.querySelector('form').onsubmit = function (e) {
        e.preventDefault();

        createTask(
            document.querySelector('#title').value,
            document.querySelector('#description').value,
            document.querySelector('#priority').value,
            document.querySelector('#dateTime').value
        )
        let divSubmitted = submit;
        divSubmitted.textContent = 'Submitted';
        content.appendChild(divSubmitted);
    }
}

function appendToProject(defaultProject) {

    let project = defaultProject;

        project.forEach(function(value, i) {
  
        let card = newCard;
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
    
        content.append(card);
    
    });

}



const form = `<form>
<label for="title">Title:</label>
<input type="text" id="title" name="title">

<label for="description">Description:</label>
<input type="text" id="description" name="description">


<label for="priority">Priority:</label>
<select id="priority" name="priority" value="1">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</select>

<label for="dateTime">Time and Date:</label>
<input type="datetime-local" id="dateTime" name="dateTime" value="">



<label for="project"></label>
<select id="project" name="project" value="Default Project">
    <option value="default">Default Project</option>
</select>

<input type="submit" value="submit">
</form>`;

export {createForm, appendToProject};