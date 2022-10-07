import state from "./state.js"
import UI, { toggleButtonActive, toggleLiftActiveStyle } from "./UI.js";

function updateLiftWaitingStatus(floor) {
    if (state.floors.includes(floor)) {
        state.waiting = true;
        toggleLiftActiveStyle()
        setTimeout(() => {
            state.waiting = false;
            toggleLiftActiveStyle()
            removeFloor(floor)
        }, 1000)
    }
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

export { updateLiftWaitingStatus, getExactFloor }