function toggleHideProjectsEvent() {
    document.querySelector('#projectsBtn').addEventListener('click', function (e) {

        if (e.target !== this)
            return;

        let projectsList = document.querySelector('#projects');

        if (projectsList.style.display != 'none') {
            projectsList.style.display = 'none';
        }
        else {
            projectsList.style.display = 'block';
        }
    });

}

function submitBtnClickEvenet() {
    const submitBtn = document.querySelector('#submitForm');
    const divForm = document.querySelector('.divForm');

    submitBtn.addEventListener('click', () => {
    
        document.querySelector('#projectForm').onsubmit = function (e) {
            e.preventDefault();
    
            modelNewProject(
                document.querySelector('#title').value,
                document.querySelector('#description').value,
            )
            uiAppendProjects(xxxx);
        }
    });

}


projectListElement.addEventListener('click', () => {
    uiAppendTask(project[i].project);

    let projectContainer = document.createElement('div');
    let projectDisplayedName = document.createElement('div');
    let projectDisplayedDescr = document.createElement('p');

    projectContainer.className = 'projectContainer';
    divForm.innerHTML = '';


    projectDisplayedName.textContent = project[i].name;
    projectDisplayedDescr.textContent = project[i].description;

    projectContainer.appendChild(projectDisplayedName);
    projectContainer.appendChild(projectDisplayedDescr);
    divForm.appendChild(projectContainer);

});









function initEvents() {
    toggleHideProjectsEvent();

}