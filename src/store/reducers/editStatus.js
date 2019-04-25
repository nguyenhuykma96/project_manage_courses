import * as Types from '../constants/ActionTypes';
let initialState = null;

const statusReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.CHANGE_EDIT_STATUS :
            state = action.status
            return state;
        
    default: return state;
    }
} 
export default statusReducer;
