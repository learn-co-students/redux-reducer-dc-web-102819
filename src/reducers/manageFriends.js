export function manageFriends(oldState={friends: []}, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return {friends: [...oldState.friends, action.friend] }
        case 'REMOVE_FRIEND':
            if (oldState.friends.length == 0) {return oldState} else { return {friends: oldState.friends.filter(friend => friend.id !== action.id)}}
        default:
            return oldState
    }
}
