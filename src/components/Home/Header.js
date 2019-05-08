import React, { Component } from 'react';
import Search from './Search';
import BtnAuth from './btn-Auth';
import UserCheckined from './UserCheckined';
import {connect} from 'react-redux';

// const menus = [
//     {
//         name : 'Home',
//         to : '/',
//         exact : true
//     },
//     {
//         name : 'Courses',
//         to : '/courses',
//         exact : false
//     },
//     {
//         name : 'Instructors',
//         to : '/instructors',
//         exact : false
//     },

// ];


// const menuStyle = {
//     width: '1519px',
//     position: 'fixed',
//     top: '0px'
// }

class Header extends Component {
    render() {
        var {isLogined} = this.props;
        return (
            <header className="header-area">
                {/* Top Header Area */}
                <div className="top-header-area d-flex justify-content-between align-items-center">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <a href="#"><span>Phone:</span> +44 300 303 0266</a>
                        <a href="#"><span>Email:</span> info@clever.com</a>
                    </div>
                    {/* Follow Us */}
                    <div className="follow-us">
                        <span>Follow us</span>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                    </div>
                </div>
                {/* Navbar Area */}
                <div className="clever-main-menu" >
                    <div className="classy-nav-container breakpoint-off">
                        {/* Menu */}
                        <nav className="classy-navbar justify-content-between" id="cleverNav">
                            {/* Logo */}
                            <a className="nav-brand" href="index.html"><img src="img/core-img/logo.png" /></a>
                            {/* Navbar Toggler */}
                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span /><span /><span /></span>
                            </div>
                            {/* Menu */}
                            <div className="classy-menu">
                                {/* Close Button */}
                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                                </div>
                                {/* Nav Start */}
                                <div className="classynav">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="courses.html">Courses</a></li>
                                        <li><a href="instructors.html">Instructors</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                    {/* Search Button */}
                                    <Search />
                                    {/* Register / Login */}
                                    { (isLogined || localStorage.getItem('UserLogin')) ?  <UserCheckined/> : <BtnAuth/>}
                                    {/* Nav End */}
                                </div>
                                {/* Nav End */}
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogined : state.loginUser.isLogined
    }
}

export default connect(mapStateToProps, null)(Header); 