import * as Types from './../constants/ActionTypes';

let initialState = [];
const coursesReducer = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.GET_COURSES:
            state = action.courseList
            return [...state];
        case Types.ADD_COURSE:
            state.push(action.course);
            return [...state];
        case Types.DELETE_COURSE:
            index = state.findIndex(course => course.MaKhoaHoc === action.course.MaKhoaHoc);
            state.splice(index, 1);
            return [...state];
        case Types.UPDATE_COURSE :
            index = state.findIndex(course => course.MaKhoaHoc === action.course.MaKhoaHoc);
            state[index] = action.course; 
            return [...state];
        default: return state;
    }
}
export default coursesReducer;