import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const auth = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest} 
            render={ (routeProps) => {
                let data = sessionStorage.getItem('UserLogin');
                if(data){
                    var maLoaiNguoiDung = (JSON.parse(data)).MaLoaiNguoiDung;
                }
                if(data && maLoaiNguoiDung === 'HV'){
                    return <Component {...routeProps} />
                }else if(data && maLoaiNguoiDung === 'GV'){
                    return <Redirect to="/admin/profile" />
                }else{
                    alert('Vui long login');
                    return <Redirect to="/login" />;
            }}}
        />
    );
};

export default auth;