 import * as Types from '../constants/ActionTypes';

let initialState = {
    nameCourse : '',
};
const filterCourseReducer  = (state = initialState, action) => {
    switch(action.type){
        case Types.FILTER_COURSE :
            return {
                nameCourse : action.filter.nameCourse.toLowerCase()
            };
        
        default : return state;
    }
}
export default filterCourseReducer;