import * as Types from './../constants/ActionTypes';

let initialState = {};
const loginUserReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.LOGIN :
            state = action.user;      
            return {...state};
        default : return {...state};
    }
}
export default loginUserReducer;