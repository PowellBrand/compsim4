import axios from 'axios';

//43G
const initialState = {
    name: '',
    password: ''
};

const NAME = 'NAME';
const GET_USER = "GET_USER";


//Create Character function
export function createUser(name, password) {
    // console.log(value)
    let body = {
        "name": name,
        "password": password
    }
    let user = axios.post(`/api/creatUser`, body).then(res => {
        return res.data
    })

    return {
        type: NAME,
        payload: user.name
    }
}

export function getUser(){
    let name = axios.get('/api/getUser').then(res=>{
        return res.data
    })
    return{
        type: GET_USER,
        payload: name
    }
}




function reducer(state = initialState, action) {
    switch (action.type) {
        case NAME + '_FULFILLED':
        return Object.assign({}, state, { user: action.payload });

        case GET_USER + '_FULFILLED':
        return Object.assign({}, state, {name: action.payload})
       

        default: return state;
    }
}


export default reducer;