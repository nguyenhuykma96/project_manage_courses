import * as Types from './../constants/ActionTypes';

 let initialState = [];
const coursesReducer = ( state = initialState, action) => {
    switch(action.type){
        case Types.GET_COURSES :
            state = action.courseList
            return [...state];
        default : return state;
    }
} 
export default coursesReducer;