import * as Types from './../constants/ActionTypes';
import UserService from '../../services/user.services';
import Swal from 'sweetalert2';
import { resolve } from 'url';
import { reject } from 'q';



const userService = new UserService();
export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }
}
export const actAddUserRequest = (user) => {
    return dispatch => {
        return userService.addUser(user)
            .then(res => {
                dispatch(actAddUser(res.data));
                if (typeof (res.data) === 'string') {
                    Swal.fire({
                        type: 'error',
                        title: 'Fail...',
                        text: 'Username existed!',
                    })
                } else {
                    Swal.fire(
                        'Successfully!',
                        'Add user success!',
                        'success'
                    )
                }
            })
            .catch(err => {
                console.log('server fail');
            })
    }
}

export const actGetAllUsers = (userList) => {
    return {
        type: Types.GET_ALL_USER,
        userList
    }
}
export const actGetAllUsersRequest = () => {
    return dispatch => {
        return userService.getAllUsers()
            .then(res => {
                dispatch(actGetAllUsers(res.data));
            })
            .catch(err => {
                console.log(err);

            })
    }

}

export const actDeleteUser = (taiKhoan) => {
    return {
        type: Types.DELETE_USER,
        taiKhoan
    }
}
export const actDeleteUserRequest = taiKhoan => {
    return dispatch => {
        Swal.fire({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.value) {
                //click ok
                return userService.deleteUser(taiKhoan)
                    .then(res => {
                        dispatch(actDeleteUser(taiKhoan));
                        Swal.fire(
                            'Deleted!',
                            'User select has been deleted.',
                            'success'
                        )
                    })
                    .catch(err => {
                        console.log(err);

                    })
            } else {
                //click cancel
                Swal.fire({
                    type: 'error',
                    title: 'Fail...',
                    text: 'Deleted Fail',
                })
            }
        })

    }


}
// export const actDeleteUserRequest = taiKhoan => {
//     Swal.fire({
//         title: 'Are you sure?',
//         type: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!',
//     }).then(() => {
//         return dispatch => {
//             return userService.deleteUser(taiKhoan)
//                 .then(res => {
//                     dispatch(actDeleteUser(taiKhoan));
//                     Swal.fire(
//                         'Deleted!',
//                         'User select has been deleted.',
//                         'success'
//                     )
//                 })
//                 .catch(err => {
//                     console.log(err);

//                 })
//         }
//     }, (dismiss) => {
//         if (dismiss == 'cancel') {

//             Swal.fire({
//                 type: 'error',
//                 title: 'Fail...',
//                 text: 'Deleted Fail',
//             })
//         }
//     })

// }
export const actGetUserEditing = userEditing => {
    return {
        type: Types.EDIT_USER,
        userEditing
    }
}
export const actUpdateUser = user => {
    return {
        type: Types.UPDATE_USER,
        user
    }
}
export const actUpdateUserRequest = user => {
    return dispatch => {
        return userService.updateUser(user)
            .then(res => {
                console.log(res.data);
                dispatch(actUpdateUser(res.data));

            })
            .catch(err => {
                console.log(err);

            })
    }
}
// edit status update user
export const actChangeEditStatus = () => {
    return {
        type: Types.CHANGE_EDIT_STATUS,
        status: false
    }
}
export const actChangeEditStatusTrue = () => {
    return {
        type: Types.CHANGE_EDIT_STATUS,
        status: true
    }
}
