import axios from 'axios';

// BOOK ACTIONS
export function getBooks(limit = 10, start = 0, order = 'asc', list = ''){
    const request = axios.get(`/api/books?limit=${limit}&skip=${start}&order=${order}`)
        .then(response => {
            if(list){
                return [...list, ...response.data];    
            } else {
                return response.data;
            }
        });
        
        return {
            type: 'GET_BOOKS',
            payload: request
        };
}

export function addBook(book){
    const request = axios.post('/api/book',book)
        .then(response => response.data);

    return {
        type: 'ADD_BOOK',
        payload:request
    };
}

export function getBook(id){
    const request = axios.get(`/api/getBook?id=${id}`)
        .then(response => response.data);
        
    return {
        type: 'GET_BOOK',
        payload: request
    };
}

export function getUserPosts(userId){
    const request = axios.get(`/api/user_posts?user=${userId}`)
        .then(response => response.data);
    
    return {
        type: 'GET_USER_POSTS',
        payload: request
    };
}


// USER ACTIONS
export function loginUser({email, password}){
    const request = axios.post('/api/ login', {email, password})
        .then(response => response.data);
    
    return {
        type:'USER_LOGIN',
        payload: request
    };
}

export function auth(){
    const request = axios.get('/api/auth')
        .then(response => response.data);
    
    return {
        type: 'USER_AUTH',
        payload: request        
    };
}

export function getUsers(){
    const request = axios.get('/api/users')
        .then(response => response.data);
    
    return {
        type: 'GET_USER',
        payload: request
    }
}

export function userRegister(user,userList){
    const request =axios.post('/api/register', user);
    
    return (dispatch) => {
        request
            .then(({data}) => {
                let users = data.success ? [...userList,data.user] : userList;
                
                let response = {
                    success: data.success,
                    users
                };
                
                dispatch ({
                    type: 'USER_REGISTER',
                    payload: response
                });
            });
    };
}
