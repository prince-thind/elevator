import state from "./state.js"
import { toggleButtonActive, toggleLiftActiveStyle } from "./UI.js";

function updateLiftStatus(floor) {

    if (!state.floors.includes(floor)) return;

    state.waiting = true;

    if (state.floors.length > 1) {
        updateDirection(floor);
    }
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

function updateDirection(floor) {
    if (state.floors.some(f => f > floor)) state.direction = 'top'
    if (state.floors.some(f => f < floor)) state.direction = 'bottom'
}

function chooseDirection(floor) {
    const closestFloor = Math.round(10 - state.height / (3 * 16));
    if (floor - closestFloor > 0) {
        return 'top'
    }

    if (floor - closestFloor < 0) {
        return 'bottom';
    }

    return null;
}

function handleSingleFloorCase(floorNumber) {
    const direction = chooseDirection(floorNumber);
    if (direction) {
        state.direction = direction;
    }
    else {
        toggleLiftActiveStyle();
        state.floors.length = 0;
        setTimeout(() => {
            toggleLiftActiveStyle();
            toggleButtonActive(floorNumber);
        }, 1000);
    }

}

export { updateLiftStatus, getExactFloor, handleSingleFloorCase, updateDirection, removeFloor }