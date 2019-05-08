import * as Types from '../constants/ActionTypes';

let initialState = [];
const coursesUserRegistedReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_REGISTED_COURSE:
            // check khi click user có đc ghi danh khóa học mà click vào user khác ko có khóa nào đc ghi thì hiện rỗng
            if(typeof(action.userRegistedCourse) === 'string'){
                return state = [];
            }
            state = action.userRegistedCourse;

            return [...state];
        default: return state;
    }
}
export default coursesUserRegistedReducer;
