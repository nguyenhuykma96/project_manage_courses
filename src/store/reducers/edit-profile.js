import * as Types from './../constants/ActionTypes';

let initialState = {
    TaiKhoan : '',
    MatKhau : '',
    HoTen : '',
    Email : '',
    SoDT : '',
    MaLoaiNguoiDung : ''
}
const editProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_PROFILE : 
            state = action.user
        return {...state};
        default: return state;
    }
}
export default editProfileReducer;