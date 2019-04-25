import * as Types from './../constants/ActionTypes';

let initialState = [];

const UserReducer = (state = initialState, action) => {
    var index = 0;
    switch (action.type) {
        case Types.GET_ALL_USER:
            state = action.userList
            return [...state];
        case Types.ADD_USER:
            state.push(action.user);
            return [...state];
        case Types.DELETE_USER:
             index = state.findIndex(e => e.TaiKhoan === action.taiKhoan);
            state.splice(index, 1);
            return [...state];
        case Types.UPDATE_USER:
            index = state.findIndex(e => e.TaiKhoan === action.user.TaiKhoan);
            state[index] = action.user
            return  [...state];
    default: return state;
    }
}
export default UserReducer;