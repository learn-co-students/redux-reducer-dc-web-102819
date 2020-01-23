export function manageFriends(state={ friends: [] }, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return { friends: [...state.friends, action.friend] }
        case 'REMOVE_FRIEND':
            let updatedFriends = state.friends.filter( friend => {
                return friend.id !== action.id
            })
            return { ...state, friends: updatedFriends}
        default:
            return state
    }
}
