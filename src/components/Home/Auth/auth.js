import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(routeProps) => {
                var data = localStorage.getItem('UserLogin');
                if (data) {
                    var maLoaiNguoiDung = (JSON.parse(data)).MaLoaiNguoiDung;
                    if (maLoaiNguoiDung === 'GV') {
                        return <Component {...routeProps} />
                    }
                    if (maLoaiNguoiDung === 'HV') {
                        return <Redirect to="/profile" />
                    }
                }
                else {
                    return <Redirect to="/" />;
                }
                // if(data && maLoaiNguoiDung === 'GV'){
                //     return <Component {...routeProps} />
                // }else if(data && maLoaiNguoiDung === 'HV'){
                //     return <Redirect to="/profile" />
                // }
                // else{
                //     alert('please login')
                //     return <Redirect to="/" />;
                // }
            }}
        />
    );
};

export default Auth;