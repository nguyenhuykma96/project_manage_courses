import * as Types from './../constants/ActionTypes';

let initialState = [];
const coursesRegistedReducer = (state = initialState, action) => {
    switch (action.type) {
        // case Types.GET_REGISTED_COURSE:
        //     state = action.userRegistedCourse.coursesRegisted.TenKhoaHoc;


        //     return [...state];
        case Types.REGISTER_COURSE:
            state.push(action.data.TenKhoaHoc);
            return [...state];
        default: return state;
    }
}
export default coursesRegistedReducer;