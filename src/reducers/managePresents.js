export function managePresents(state={numberOfPresents:0}, action){
    switch (action.type) {
        case "INCREASE":
            let increaseNum = Object.assign({}, state, {numberOfPresents: state.numberOfPresents + 1})
            return increaseNum
        default:
            return state
    }
}
