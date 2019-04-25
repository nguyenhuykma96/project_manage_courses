import * as Types from './../constants/ActionTypes';

let initialState = {};
const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_INFO_USER :
            state = action.userProfile;
            return {...state};
        default : return state;
    }
}
export default profileReducer;