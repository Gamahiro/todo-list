import './view/style.css';
import { taskFactory } from './model/factory/taskFactory.js';
import { createForm, appendTask, appendProjects } from './view/htmlGenerator';
import { projectFactory } from './model/factory/projectFactory';
import { saveProjects, loadProjects } from './localStorage';

/* const defaultProject = []; */















function init() {
    if (!localStorage.getItem('projects')) {
        createProject('Default Project', 'The default project');
        saveProjects(projects);
      } else {
        projects = loadProjects();
      }
    appendProjects(projects);

}

init();


export { createTask, createProject, projects, updateProjects, compareTasks };