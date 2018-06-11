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
        case 'CLEAR_BOOK':
            return {
                ...state,
                updateBook: action.payload.updateBook,
                book: action.payload.book,
                postDeleted: action.payload.postDeleted
            };
        default:
            return state;
    }
}