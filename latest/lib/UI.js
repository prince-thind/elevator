import state from "./state.js";

const UI = {
    lift: document.querySelector('#lift'),
    buttons: document.querySelector('#buttons')
}


function setupUIButtons() {
    UI.buttons.addEventListener('click', (e) => {

        const li = e.target;
        if (li.nodeName == 'UL') return;

        const floorNumber = +li.textContent;
        addFloor(floorNumber)

    })
}

function addFloor(floorNumber) {
    if (state.floors.includes(floorNumber)) return;

    state.floors.push(floorNumber);
    state.floors.sort((a, b) => a - b);
    toggleButtonActive(floorNumber);
}


function toggleButtonActive(floorNumber) {
    const li = UI.buttons.children[floorNumber];
    li.classList.toggle('active-button')
}

function toggleLiftActiveStyle() {
    UI.lift.classList.toggle('active-lift');
}


export default UI;
export { addFloor,toggleLiftActiveStyle, setupUIButtons, toggleButtonActive }