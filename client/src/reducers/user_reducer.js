export default function(state = {}, action){
    switch(action.type){
        case 'USER_REGISTER':
            return {
                ...state,
                register: action.payload.success,
                users: action.payload.users
            };
        default:
            return state;    
    }
}