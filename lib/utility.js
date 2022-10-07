import state from "./state.js"

function updateLiftWaitingStatus(floor){
    if(state.floors.includes(floor)){
        state.waiting=false;
    
    }
}

export {updateLiftWaitingStatus}