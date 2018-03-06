import axios from 'axios';
const initialState = {
    name: '',
};

const NAME = 'NAME';



//Create Character function
export function createChar(value) {
    // console.log(value)
    let body = {
        "name": value
    }
    let user = axios.post(`/api/createChar`, body).then(res => {
        // console.log(res.data, "Character Created");
        return res.data
    })

    return {
        type: NAME,
        payload: user.name
    }
}




function reducer(state = initialState, action) {
    switch (action.type) {
      
       

        default: return state;
    }
}


export default reducer;