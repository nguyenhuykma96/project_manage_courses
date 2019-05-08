import * as Types from '../constants/ActionTypes';
let initialState = {};

const courseEditing = (state = initialState, action) => {
    switch(action.type){
        case Types.EDITING_COURSE : 
            state = action.courseEditing
            return {...state};
        default: return state;
    }
} 
export default courseEditing;
