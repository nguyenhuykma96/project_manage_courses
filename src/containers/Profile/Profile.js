import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ProfilePage from './../../pages/ProfilePage/ProfilePage';
import Auth from './../../components/Home/Auth/auth';

class ProfileContainer extends Component {
    render() {
        var data = sessionStorage.getItem('UserLogin');
        // var maLoaiNguoiDung = (JSON.parse(data)).MaLoaiNguoiDung;
        if (data) {
            return (
                <Fragment>
                    <Route component={ProfilePage} />
                </Fragment>
            );
        } else {
            alert('Please login');
            return <Redirect to="/" />
        }
    }
}
export default ProfileContainer;
