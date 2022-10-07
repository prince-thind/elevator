import state from "./state.js";
import { chooseDirection } from "./utility.js";

const UI = {
    lift: document.querySelector('#lift'),
    buttons: document.querySelector('#buttons')
}

function toggleLiftActiveStyle() {
    UI.lift.classList.toggle('active-lift');
}

function setupUIButtons() {
    UI.buttons.addEventListener('click', (e) => {

        const li = e.target;
        if (li.nodeName == 'UL') return;

        const floorNumber = +li.textContent;
        if (state.floors.includes(floorNumber)) return;

        state.floors.push(floorNumber);
        state.floors.sort((a, b) => a - b);
        toggleButtonActive(floorNumber);

        if (state.floors.length == 1) {
            state.direction = chooseDirection(floorNumber)
            if (!state.direction) {
                toggleLiftActiveStyle();
                state.floors.length = 0;

                setTimeout(() => {
                    toggleButtonActive(floorNumber)
                    toggleLiftActiveStyle()
                }, 1000)
            }
        }


    })
}


function toggleButtonActive(floorNumber) {
    const li = UI.buttons.children[floorNumber - 1];
    li.classList.toggle('active-button')
}
export default UI;
export { toggleLiftActiveStyle, setupUIButtons, toggleButtonActive }