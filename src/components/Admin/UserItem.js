import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    actDeleteUserRequest,
    actGetUserEditing,
    actUpdateUserRequest,
    actChangeEditStatusTrue,
} from '../../store/action/user.action';
import { actGetRegistedCourseRequest } from '../../store/action/course.action';

class UserItem extends Component {
    onDeleteUser = (taiKhoan) => {
        this.props.deleteUser(taiKhoan)
    }
    onSaveUserEditing = (account) => {
        this.props.changeEditStatus()
        this.props.userEditing(this.props.user);
        var userRegistedCourse = {
            TaiKhoan: account,
        }
        this.props.onGetRegistedCourse(userRegistedCourse);


    }
    render() {
        var { user, index } = this.props

        return (
            <tr className="text-center">
                <td>{index}</td>
                <td>{user.TaiKhoan}</td>
                <td>{user.Email}</td>
                <td>{user.HoTen}</td>
                <td>{user.SoDT}</td>
                <td>{user.MaLoaiNguoiDung}</td>
                <td>
                    <i className="far fa-trash-alt mr-2"
                        onClick={this.onDeleteUser.bind(this, user.TaiKhoan)}
                        style={{ cursor: 'pointer' }}>
                    </i>
                    <i className="far fa-edit"
                        style={{ cursor: 'pointer' }}
                        data-toggle="modal"
                        data-target="#action_user"
                        onClick={this.onSaveUserEditing.bind(this, user.TaiKhoan)}>
                    </i>
                </td>
            </tr>
        )
    }
}
const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteUser: (taiKhoan) => {
            dispatch(actDeleteUserRequest(taiKhoan));
        },
        userEditing: (userEditing) => {
            dispatch(actGetUserEditing(userEditing));
        },
        userUpdate: (user) => {
            dispatch(actUpdateUserRequest(user));
        },
        changeEditStatus: () => {
            dispatch(actChangeEditStatusTrue());
        },
        onGetRegistedCourse: (userRegistedCourse) => {
            dispatch(actGetRegistedCourseRequest(userRegistedCourse));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserItem);