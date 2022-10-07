import state from "./state.js"
import { toggleButtonActive, toggleLiftActiveStyle } from "./UI.js";

function updateLiftStatus(floor) {

    if (!state.floors.includes(floor)) return;

    state.floor = floor;
    state.waiting = true;


    toggleLiftActiveStyle();
    setTimeout(() => {
        state.waiting = false;
        toggleLiftActiveStyle()
        removeFloor(floor)
    }, 1000);

}

function removeFloor(floor) {
    toggleButtonActive(floor);
    const floorIndex = state.floors.findIndex(f => f == floor);
    state.floors.splice(floorIndex, 1);
}

function getExactFloor(height) {
    const decimal = height / (3 * 16);
    if (decimal != Math.trunc(decimal)) return null;
    return 10 - decimal
}

function updateDirection() {
    const floor = state.floor;

    if (state.direction == 'top') {
        if (!state.floors.some(f => f > floor)) state.direction = 'bottom'
    }
    else {
        if (!state.floors.some(f => f < floor)) state.direction = 'top'

    }
}

export { updateLiftStatus, getExactFloor, updateDirection, removeFloor }