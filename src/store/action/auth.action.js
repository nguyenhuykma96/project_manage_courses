import * as Types from '../constants/ActionTypes';
import AuthService from './../../services/auth.service';
import Swal from 'sweetalert2';

const authService = new AuthService();
export const actRegisterUser = user => {
    return {
        type: Types.REGISTER_USER,
        user
    }
}
export const actRegisterUserRequest = user => {
    return dispatch => {
        authService.registerUser(user)
            .then(res => {
                if (res.data) {
                    const newUser = {
                        TaiKhoan: user.TaiKhoan,
                        HoTen: user.HoTen,
                        Email: user.Email,
                        SoDT: user.SoDT,
                        MaLoaiNguoiDung: user.MaLoaiNguoiDung,
                    }
                    dispatch(actRegisterUser(newUser));
                }
                else {
                    Swal.fire({
                        type: 'error',
                        title: 'Fail...',
                        text: 'Register fail!'
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}
// login
export const actLoginUser = (user) => {
    console.log(user);
    
    return {
        type: Types.LOGIN,
        user
    }
}
export const actLoginUserRequest = (user) => {
    return dispatch => {
        authService.loginUser(user)
            .then(res => {
                if (typeof res.data !== 'string') {
                    dispatch(actLoginUser(user));
                    //alert
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'success',
                        title: 'Welcome to CyberSoft'
                    })
                    sessionStorage.setItem('UserLogin', JSON.stringify(res.data[0]));

                } else {
                    console.log('err');
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Login went wrong!',
                    })
                }
            })
            .catch(err => {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Login went wrong!',
                })
            })
    }
}
