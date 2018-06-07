export default function(state = {}, action){
    switch(action.type){
        case 'GET_BOOKS':
            return { 
                ...state,
                list: action.payload 
            };
        case 'GET_BOOK':
            return {
                ...state,
                book: action.payload
            };
        default:
            return state;
    }
}