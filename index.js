import state from "./lib/state.js";
import UI, { setupUIButtons } from "./lib/UI.js";
import { getExactFloor, updateLiftWaitingStatus } from "./lib/utility.js";


init();

function init() {
    setupUIButtons();
    requestAnimationFrame(animate);

}

function animate() {

    if (state.waiting || state.floors.length == 0) return requestAnimationFrame(animate);

    const floor = getExactFloor(state.height);
    if (floor) {
        updateLiftWaitingStatus(floor)

    }

    UI.lift.style.marginTop = `${state.height}px`;

    if (state.height <= 0) {
        state.direction = 'bottom'
    }

    if (state.height >= state.maxHeight) {
        state.direction = 'top'
    }

    if (state.direction == 'bottom') {
        state.height += state.speed;
    }

    if (state.direction == 'top') {
        state.height -= state.speed;
    }

    requestAnimationFrame(animate);

}



