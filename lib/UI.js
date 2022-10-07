const UI = {
    lift: document.querySelector('#lift')
}

function toggleLiftActiveStyle(){
    UI.lift.classList.toggle('active-lift');
}

export default UI;
export {toggleLiftActiveStyle}