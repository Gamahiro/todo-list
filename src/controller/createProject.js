import { uiProjectForm, removeAllChildren, uiAppendProjects } from "../view/htmlGenerator";
import { modelNewProject, getProjectCollection } from "../model/model";
import { projectSettingsBtn } from "./updateProject";


function controllerCreateProject(modelProjectName, modelProjectDescription) {
    modelNewProject(modelProjectName, modelProjectDescription);
    uiAppendProjects(getProjectCollection());
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

export {uiCreateProjectFormEvent}