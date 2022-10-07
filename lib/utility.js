import state from "./state.js"
import { toggleLiftActiveStyle } from "./UI.js";

function updateLiftWaitingStatus(floor) {
    if (state.floors.includes(floor)) {
        state.waiting = true;
        toggleLiftActiveStyle()
        setTimeout(() => {
            state.waiting = false;
            toggleLiftActiveStyle()

        }, 1000)
    }
}

function getExactFloor(height) {
    const decimal = height / (3 * 16);
    if (decimal != Math.trunc(decimal)) return null;

    return 10 - decimal
}

export { updateLiftWaitingStatus, getExactFloor }