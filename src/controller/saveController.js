import { saveProjectCollection, loadProjectCollection, modelNewProject } from "../model/model";

function saveCheck(){
    if (!localStorage.getItem('projectCollection')) {
        modelNewProject('Default Project', 'The default project');
        saveProjectCollection();
      } else {
        loadProjectCollection();
      }};

      export {saveCheck}