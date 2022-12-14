import { getProjectCollection, compareTasks } from '../model/model';
import { uiAppendProjects } from '../view/htmlGenerator';
import { saveCheck } from './saveController';
import { uiCreateTaskFormEvent } from "./createTask";
import { uiCreateProjectFormEvent } from "./createProject";




function sortSmallToBig(project) {
    if (project[0] === undefined)
    return;
    
    project.sort(compareTasks);
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


export { controllerInit, sortSmallToBig }