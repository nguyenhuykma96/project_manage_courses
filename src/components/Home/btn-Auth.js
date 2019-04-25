import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonAuth extends Component {
    render() {
        return (
            <div className="register-login-area">
                <Link to="/register" className="btn">Register</Link>
                <Link to="/login" className="btn active">Login</Link>
            </div>
        )
    }
}
export default ButtonAuth;
