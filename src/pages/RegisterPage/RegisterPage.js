import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Register from './../../components/Register/Register';



class RegisterPage extends Component {
    
    render() {
        return ( 
           
            <Route render={ (props) =>  <Register {...props} />} />
        )
    }
}

export default RegisterPage;