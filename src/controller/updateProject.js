import { uiEditProjectForm, removeAllChildren, uiAppendProjects, uiUpdateTasks, uiCreateProjectInfo } from "../view/htmlGenerator";
import { modelEditProject, getProjectCollection, removeProjectCollectionElement } from "../model/model";

function controllerEditProject(project, newProjectName, newProjectDescription) {
    modelEditProject(project, newProjectName, newProjectDescription);
    uiAppendProjects(getProjectCollection());
    uiUpdateTasks(project.project);
    uiCreateProjectInfo(project);
}



function uiEditProjectFormSubmitEvent(project) {
    const submitBtn = document.querySelector('#submitForm');

    submitBtn.addEventListener('click', () => {

        document.querySelector('#projectForm').onsubmit = function (e) {
            e.preventDefault();

            controllerEditProject(project,
                document.querySelector('#title').value,
                document.querySelector('#description').value);
        }

    })

}

function uiEditProjectFormEvent(project) {
    //selector edit btn.addeventlistener ....
    removeAllChildren(document.querySelector('.divForm'));
    uiEditProjectForm(project);
    uiEditProjectFormSubmitEvent(project)
}

function projectEditBtn(project) {
    projectSettingsBtn();
    deleteProjectBtn(project);
    document.querySelector('#projectEditBtn').addEventListener('click', () => {
        uiEditProjectFormEvent(project)

    });
}

function deleteProjectBtn(project) {
    document.querySelector('#projectDeleteBtn').addEventListener('click', () => {
        let projectToDelete = getProjectCollection().indexOf(project);
        removeProjectCollectionElement(projectToDelete);
        uiAppendProjects(getProjectCollection());
    })
}

function projectSettingsBtn() {
    document.querySelector('#projectSettingsBtn').addEventListener('click', toggleProjectSettings)
}


function toggleProjectSettings() {
    let buttonContainer = document.querySelector('#projectButtonsContainer');

    if (buttonContainer.style.display === 'none') {
        buttonContainer.style.display = 'block';
    } else {
        buttonContainer.style.display = 'none';
    }



}

export { projectEditBtn }