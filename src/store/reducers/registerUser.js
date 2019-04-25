import * as Types from './../constants/ActionTypes';


let initialState = {};
const registerUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.REGISTER_USER :
            // console.log(state);
            state = action.user;
            return {...state};
        default: return state;
    }
}
export default registerUserReducer;