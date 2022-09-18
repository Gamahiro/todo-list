import { uiEditProjectForm, removeAllChildren, uiAppendProjects, uiUpdateTasks, uiCreateProjectInfo } from "../view/htmlGenerator";
import { modelEditProject, getProjectCollection } from "../model/model";

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

function projectSettingsBtn(project) {
    document.querySelector('#projectSettingsBtn').addEventListener('click', () => { 
        uiEditProjectFormEvent(project)

    });
}

export {projectSettingsBtn}