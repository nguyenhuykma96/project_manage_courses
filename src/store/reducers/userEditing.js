import * as Types from './../constants/ActionTypes';
let initialState = {};

const userEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_USER : 
            state = action.userEditing
            return {...state};
    default: return {...state}
    }
} 
export default userEditing;
