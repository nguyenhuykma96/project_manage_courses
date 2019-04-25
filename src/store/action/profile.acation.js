import * as Types from './../constants/ActionTypes';
import { Profile } from "./../../services/auth.service";

import Swal from 'sweetalert2';


const profile = new Profile();
export const actGetInfoUser = (userProfile) => {
    return {
        type : Types.GET_INFO_USER,
        userProfile,
    } 
}
export const actGetInfoUserRequest = taiKhoan => {
    return dispatch => {
        return profile.getProfile(taiKhoan)
        .then( res => {
            dispatch(actGetInfoUser(res.data[0]));
        })
        .catch( err => {
            console.log(err);  
        })
    }
}

export const actEditProfile = user =>{
    return {
        type : Types.EDIT_PROFILE,
        user
    }
}
export const actEditProfileRequest = user => {
    return dispatch => {
        return profile.updateProfile(user)
        .then(res =>{
            dispatch(actEditProfile(res.data));
            if(res.data){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Change Profile Done !'
                });
            }
        })
        .catch( err => {
            alert("Server fail")            
        })
    }
}