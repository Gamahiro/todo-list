import { modelNewProject, modelNewTask, modelEditProject, getProjectCollection, compareTasks, saveProjectCollection } from '../model/model';
import { uiAppendProjects, removeAllChildren, uiAppendTask, uiCreateTaskForm, uiProjectForm } from '../view/htmlGenerator';
import { uiVisibleDetailsToggle } from './uiController';
import { saveCheck } from './saveController';








//**task functions**

//creates modelTask and updates uiTasks
function controllerCreateTask(modelTaskTitle, modelTaskDescription, modelTaskPriority, modelTaskTimeDate, modelProject) {

    modelNewTask(modelTaskTitle, modelTaskDescription, modelTaskPriority, modelTaskTimeDate, modelProject);

    uiUpdateTasks(modelProject);

}


function uiUpdateTasks(modelProject) {
    removeAllChildren(document.querySelector('.tasks'));
    sortSmallToBig(modelProject);
    modelProject.forEach(function (element, i) {
        uiAppendTask(element, i);

        let card = document.querySelector('#card' + i);
        card.addEventListener('click', function(e) {
            if (e.target !== this)
            return;
            uiVisibleDetailsToggle(i);
        });




        let btn = document.querySelector('#rmTaskbtn' + i);
        btn.addEventListener('click', () => {
            modelProject.splice(i, 1);
            document.querySelector('.tasks').removeChild(document.querySelector('#card' + i));
            saveProjectCollection();
        });
    });
}

//submitevent creates new modelTask
function uiTaskFormSubmitEvent() {
    document.querySelector('#taskForm').onsubmit = function (e) {
        e.preventDefault();

        controllerCreateTask(
            document.querySelector('#title').value,
            document.querySelector('#description').value,
            document.querySelector('#priority').value,
            document.querySelector('#dateTime').value,
            getProjectCollection()[document.querySelector('.selectProject').value].project
        )
    }
}

//creates form options for projects from the projectCollection. for creating tasks
function controllerGenerateFormProjectOptions() {

    let labelProject = document.createElement('label');
    labelProject.for = 'project';
    labelProject.textContent = 'Project:';


    let selectProject = document.createElement('select');
    selectProject.className = 'selectProject';
    getProjectCollection().forEach((element, i) => {
        let projectOption = document.createElement('option');
        projectOption.value = i;
        projectOption.textContent = element.name;
        selectProject.appendChild(projectOption);
    })
    document.querySelector('#taskForm').insertBefore(labelProject, document.querySelector('#submitForm'));
    document.querySelector('#taskForm').insertBefore(selectProject, document.querySelector('#submitForm'));
}

//event to create/append the taskform when addtask button clicked
function uiCreateTaskFormEvent() {
    document.querySelector('.addTask').addEventListener('click', () => {
        removeAllChildren(document.querySelector('.divForm'));
        uiCreateTaskForm();
        controllerGenerateFormProjectOptions();
        uiTaskFormSubmitEvent();

    });
}

function sortSmallToBig(project) {
    project.sort(compareTasks);
}


//*** Project functions ***

function controllerCreateProject(modelProjectName, modelProjectDescription) {
    modelNewProject(modelProjectName, modelProjectDescription);
    uiAppendProjects(getProjectCollection());
}



function controllerEditProject(project, newName, newDescription) {
    editedProject = modelEditProject(project, newName, newDescription);

}

function uiProjectFormSubmitEvent() {
    const submitBtn = document.querySelector('#submitForm');

    submitBtn.addEventListener('click', () => {

        document.querySelector('#projectForm').onsubmit = function (e) {
            e.preventDefault();

            controllerCreateProject(
                document.querySelector('#title').value,
                document.querySelector('#description').value,
            )
        }
    });

}

function uiCreateProjectFormEvent() {
    document.querySelector('#newProjectBtn').addEventListener('click', () => {
        removeAllChildren(document.querySelector('.divForm'));
        uiProjectForm();
        uiProjectFormSubmitEvent();
    })
}



function showProjectsBtnInit() {
    uiAppendProjects(getProjectCollection())
    }

function controllerInit() {

    saveCheck();
    uiCreateTaskFormEvent();
    uiCreateProjectFormEvent();
    showProjectsBtnInit();
};


export { controllerInit, uiUpdateTasks }