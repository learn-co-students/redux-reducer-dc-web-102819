export function manageFriends(state = {friends: []}, action){
    switch(action.type){
       case "ADD_FRIEND":

       let new_state = state
       new_state.friends.push(action.friend)
       return new_state
        break;
       
        case "REMOVE_FRIEND":
            const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
            return (
              {...state,
                  friends: [
                    ...state.friends.slice(0, removalIndex),
                    ...state.friends.slice(removalIndex + 1)
                  ]
              }
            )
      
          default:
            return state;
      
        }
      };

// action = {
//     type: "ADD_FRIEND",
//     friend: {
//       name: "Chrome Boi"
//       homewtown: "NYC",
//       id: 1
//     }
//   }