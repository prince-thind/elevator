import state from "./lib/state.js";
import UI, { addFloor, setupUIButtons } from "./lib/UI.js";
import { getExactFloor, updateDirection, updateLiftStatus } from "./lib/utility.js";


init();

function init() {
    setupUIButtons();
    requestAnimationFrame(animate);
    window.addEventListener('keydown', addFloorViaKey)
}

function animate() {
    if (state.waiting || state.floors.length == 0) return requestAnimationFrame(animate);

    updateDirection();

    const floor = getExactFloor(state.height);
    if (floor!=null) {
        updateLiftStatus(floor)
    }

    moveLift();
    requestAnimationFrame(animate);

}

function moveLift() {
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
}



function addFloorViaKey(e) {
    const pressed = +String.fromCharCode(e.keyCode);
    if (![0,1, 2, 3, 4, 5, 6, 7, 8, 9].includes(pressed)) return;
    addFloor(pressed)
}