import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { actLoginUser } from "./../../store/action/auth.action";
import { connect } from 'react-redux';
class UserCheckined extends Component {
    onLogOut = () => {
        localStorage.setItem('UserLogin', '');
        localStorage.clear();
        this.props.logout({
            TaiKhoan: '',
            MatKhau: '',
            isLogined: false
        })
    }

    render() {
        var user = JSON.parse(localStorage.getItem('UserLogin'));
        return (
            <Fragment>
                <div className="login-state d-flex align-items-center" >
                    <div className="user-name mr-30">
                        <div className="dropdown">
                            <a className="dropdown-toggle" href="#" role="button" id="userName"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{user ? user.TaiKhoan : ""}
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userName">
                                <Link to="/profile" className="dropdown-item" >{user.MaLoaiNguoiDung === 'HV' ? 'Profile' : ''}</Link>
                                <Link to="/admin" className="dropdown-item">{user.MaLoaiNguoiDung === 'GV' ? 'Manage' : ''}</Link>
                                <Link to="/" className="dropdown-item" onClick={this.onLogOut}>Logout</Link>
                            </div>
                        </div>
                    </div>
                    <div className="userthumb">
                        <img src="./../img/bg-img/t1.png" alt="user login" />
                    </div>
                </div>
            </Fragment>
        )
    }
}



const mapStateToProps = state => {
    return {
        // UserLogin: state.loginUser
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: (user) => {
            dispatch(actLoginUser(user));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserCheckined); 