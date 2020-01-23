export function managePresents(state = {numberOfPresents: 0}, action){
    switch(action.type){
    case "INCREASE":
      let newState = {numberOfPresents: 0}
      newState.numberOfPresents +=  1;
       return newState
        break;
        default:
            return state
    }
}
