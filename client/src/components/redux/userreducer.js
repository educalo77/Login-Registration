import { USER_ADD } from './userconstants';


function userListReducer(state = { users: "" }, action) {
console.log(action)
  switch (action.type) {
   case USER_ADD:
          return {
              users: action.payload
          };
      
    default:
      return state;
    } 
    
}

export { userListReducer };