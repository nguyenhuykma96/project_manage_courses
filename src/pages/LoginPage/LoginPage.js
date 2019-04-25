import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Login from '../../components/Login/Login';

class LoginPage extends Component {
    render() {
        // check auth owr day
        return (
            <Route render={ (props) =>  <Login {...props} />} />
        );
    }
}
export default LoginPage;