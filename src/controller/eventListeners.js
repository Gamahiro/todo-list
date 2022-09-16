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

function initEvents() {
    
    toggleHideProjectsEvent();
}

export {initEvents}