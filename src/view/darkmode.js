
function toggleDarkMode() {
    let body = document.body;
    body.classList.toggle('dark-mode');

    let content = document.querySelector('.content');
    content.classList.toggle('dark-mode-content');
    
    let divForm = document.querySelector('.divForm');
    divForm.classList.toggle('dark-mode-content');
  
}


export {toggleDarkMode}