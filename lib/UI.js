import state from "./state.js";

const UI = {
    lift: document.querySelector('#lift'),
    buttons: document.querySelector('#buttons')
}

function toggleLiftActiveStyle() {
    UI.lift.classList.toggle('active-lift');
}

function setupUIButtons() {
    UI.buttons.addEventListener('click', (e) => {
        const li=e.target;
        if(li.nodeName=='UL') return;

        const floorNumber=+li.textContent;
        if(state.floors.includes(floorNumber)) return;

        state.floors.push(floorNumber);
        toggleButtonActive(floorNumber)
    })
}


function toggleButtonActive(floorNumber){
    const li=UI.buttons.children[floorNumber-1];
    li.classList.toggle('active-button')
}
export default UI;
export { toggleLiftActiveStyle, setupUIButtons, toggleButtonActive }