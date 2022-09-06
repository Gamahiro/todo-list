import { createTask } from ".";
const content = document.querySelector('.content');
const tasks = document.querySelector('.tasks');
const addTask = document.querySelector('.addTask');

function createForm() {
    const divForm = document.createElement('div');
    divForm.innerHTML = form;
    content.append(divForm);
    addTask.style.display = 'none';

    content.insertBefore(divForm, content.firstChild);

    document.querySelector('form').onsubmit = function (e) {
        e.preventDefault();

        createTask(
            document.querySelector('#title').value,
            document.querySelector('#description').value,
            document.querySelector('#priority').value,
            document.querySelector('#dateTime').value
        )
       /*  let divSubmitted = document.createElement('div');
        divSubmitted.textContent = 'Submitted';
        content.appendChild(divSubmitted); */
        content.removeChild(divForm);
        addTask.style.display = 'block';
    }
}

function appendToProject(defaultProject) {

    let project = defaultProject;

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



// 2022-09-07T09:42

const form = `<form>
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
<input type="datetime-local" id="dateTime" name="dateTime" value="" required>



<label for="project"></label>
<select id="project" name="project" value="Default Project">
    <option value="default">Default Project</option>
</select>

<input type="submit" value="submit">
</form>`;

export { createForm, appendToProject };