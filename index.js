import state from "./lib/state.js";
import UI from "./lib/UI.js";
import { updateLiftWaitingStatus } from "./lib/utility.js";


function animate() {


    if (state.waiting) return requestAnimationFrame(animate)

    UI.lift.style.marginTop = `${state.height}rem`;

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


requestAnimationFrame(animate);

