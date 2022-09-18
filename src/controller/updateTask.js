import { removeAllChildren, uiAppendTask, uiCreateEditTaskForm } from "../view/htmlGenerator";
import { saveProjectCollection, modelEditTask} from "../model/model";
import { sortSmallToBig } from "./controller";
import {uiVisibleDetailsToggle} from "./uiController";


function uiUpdateTasks(modelProject) {
    removeAllChildren(document.querySelector('.tasks'));
    sortSmallToBig(modelProject);
    modelProject.forEach(function (element, i) {
        uiAppendTask(element, i);

        let card = document.querySelector('#card' + i);
        card.addEventListener('click', function(e) {
            if (e.target !== this/* document.querySelector('.rmTaskBtn') || e.target == document.querySelector('.editTaskBtn') */)
            return;
            uiVisibleDetailsToggle(i);
        });

        let editBtn = document.querySelector('#editTaskBtn' + i)
        editBtn.addEventListener('click', () => {

            removeAllChildren(document.querySelector('#card' + i));
            uiCreateEditTaskForm(i, element.taskTitle, element.taskDescription, element.taskPriority, element.taskTimeDate);
            uiEditTaskFormSubmitEvent(element, modelProject, i);
            saveProjectCollection();
        });


        let rmBtn = document.querySelector('#rmTaskbtn' + i);
        rmBtn.addEventListener('click', () => {
            modelProject.splice(i, 1);
            document.querySelector('.tasks').removeChild(document.querySelector('#card' + i));
            saveProjectCollection();
        });
    });
}
function uiEditTaskFormSubmitEvent(modelTaskObject, modelProject, i) {
    document.querySelector('#card' + i).onsubmit = function (e) {

        e.preventDefault();

        modelEditTask(
            modelTaskObject,
            document.querySelector('#title').value,
            document.querySelector('#description').value,
            document.querySelector('#priority').value,
            document.querySelector('#dateTime').value
            );

            uiUpdateTasks(modelProject);
    }
}

export {uiUpdateTasks}