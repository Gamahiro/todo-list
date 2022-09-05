import { createTask } from ".";

const newDiv = document.createElement('div');
const content = document.querySelector('.content');

function createForm () {
    let divForm = newDiv;
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
    }
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

export {createForm};