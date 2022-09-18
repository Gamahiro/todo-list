import { uiProjectForm, removeAllChildren } from "../view/htmlGenerator";
import { modelEditProject, getProjectCollection } from "../model/model";

function controllerEditProject(project, newName, newDescription) {
    editedProject = modelEditProject(project, newName, newDescription);

}



function uiEditProjectFormSubmitEvent(project) {
    const submitBtn = document.querySelector('#submitForm');

    submitBtn.addEventListener('click', () => {

        document.querySelector('#projectForm').onsubmit = function (e) {
            e.preventDefault();

            modelEditProject(getProjectCollection().indexOf(''),
                document.querySelector('#title').value,
                document.querySelector('#description').value);
        }

    })

}

function uiEditProjectFormEvent() {
    //selector edit btn.addeventlistener ....
    removeAllChildren(document.querySelector('.divForm'));
    uiProjectForm(); //check if works
    uiEditProjectFormSubmitEvent()
}

function projectSettingsBtn() {
    document.querySelector('.projectSettingsBtn').addEventListener('click', uiEditProjectFormEvent);
}

export {projectSettingsBtn}