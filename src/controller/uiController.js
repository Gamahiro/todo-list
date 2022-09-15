



function uiVisibleDetailsToggle(i) {
    let cardDescription = document.querySelector('#cardDescription' + i);
    let cardDateTime = document.querySelector('#cardDateTime' + i);
    let rmTaskBtn = document.querySelector('#rmTaskbtn' + i);
    let editBtn = document.querySelector('#editTaskBtn' + i);


    if(document.querySelector('#cardDescription' + i).style.display === 'none') {
        cardDescription.style.display = 'block';
        cardDateTime.style.display = 'block';
        rmTaskBtn.style.display = 'block';
        editBtn.style.display = 'block';
    }else {
        cardDescription.style.display = 'none';
        cardDateTime.style.display = 'none';
        rmTaskBtn.style.display = 'none';
        editBtn.style.display = 'none';
    }
    
}


export {uiVisibleDetailsToggle}









