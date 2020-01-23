export function managePresents(oldState= {numberOfPresents: 0}, action){

    switch(action.type){
        case 'INCREASE':
            return {numberOfPresents: oldState.numberOfPresents +1}
        default:
            return oldState
    }
    
    
}
