
//@todo create a popup element in center of the screen and append the details of the clicked task element


function uiVisibleDetailsToggle(i) {
    let card = document.querySelector('#card' + i);
    let cardDescription = document.querySelector('#cardDescription' + i);
    let cardDateTime = document.querySelector('#cardDateTime' + i);
    let rmTaskBtn = document.querySelector('#rmTaskbtn' + i);
    let editBtn = document.querySelector('#editTaskBtn' + i);

    

    if(document.querySelector('#cardDescription' + i).style.display === 'none') {
        card.style.transform = 'scale(1.50)';
        card.style.zIndex = '10';


        cardDescription.style.display = 'block';
        cardDateTime.style.display = 'block';
        rmTaskBtn.style.display = 'block';
        editBtn.style.display = 'block';
    }else {
        card.style.transform = 'scale(1)';
        card.style.zIndex = '1';

        cardDescription.style.display = 'none';
        cardDateTime.style.display = 'none';
        rmTaskBtn.style.display = 'none';
        editBtn.style.display = 'none';
    }
    
}



export {uiVisibleDetailsToggle}









