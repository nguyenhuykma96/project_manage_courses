import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { actLoginUserRequest } from '../../store/action/auth.action';
// css
import './Login.css';

const taiKhoanRegex = RegExp(
    /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
);
// const formValid = ({ formErrors, ...rest }) => {
//     let valid = true;

//     // mẫu lỗi
//     Object.values(formErrors).forEach(val => {
//         val.length > 0 && (valid = false);
//     });

//     // Mẫu đã được điền
//     Object.values(rest).forEach(val => {
//         val === null && (valid = false);
//     });
//     return valid;
// };


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TaiKhoan: '',
            MatKhau: '',
            isLogined: false,
            formErrors: {
                TaiKhoan: '',
                MatKhau: ''
            },
        }
    }

    handleOnChange = e => {
        let { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        switch (name) {

            case "TaiKhoan":
                formErrors.TaiKhoan = taiKhoanRegex.test(value) ? "" : "invalid user name "
                break;
            case "MatKhau":
                formErrors.MatKhau =
                    value.length < 4 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    }
    onSubmit = e => {
        e.preventDefault();
        // if (formValid(this.state)) {
        //     console.log(`
        //       --SUBMITTING--
        //         Name: ${this.state.TaiKhoan}
        //       Password: ${this.state.MatKhau}
        //     `);
        // } else {
        //     console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        // }
        if(!this.state.isLogined){
            this.setState({
                isLogined: true
            });
        }
        let user = {
            TaiKhoan: this.state.TaiKhoan,
            MatKhau: this.state.MatKhau,
            isLogined: true
        };
        e.preventDefault();
        this.props.onLogin(user);
        // this.onClearForm();
    }

    onClearForm = () => {
        this.setState({
            TaiKhoan: '',
            MatKhau: '',
        })
    }

    render() {

        if (this.state.isLogined) {
            return <Redirect to="/" />
        }
        if (sessionStorage.getItem('UserLogin')) {
            return <Redirect to="/" />
        }
        var { TaiKhoan, MatKhau, formErrors } = this.state;
        return (
            <Fragment>
                {/* Validation */}

                <section className="login-block">
                    <div className="container container-login">
                        <div className="row">
                            <div className="col-md-4 login-sec">
                                <h2 className="text-center">Login Now</h2>
                                <form className="login-form" onSubmit={this.onSubmit} noValidate>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className={formErrors.TaiKhoan.length > 0 ? "form-control error" : "form-control"}
                                            name="TaiKhoan"
                                            noValidate
                                            value={TaiKhoan}
                                            onChange={this.handleOnChange}
                                            placeholder="Username"
                                        />
                                        {formErrors.TaiKhoan.length > 0 && (
                                            <span className="errorMessage">{formErrors.TaiKhoan}</span>
                                        )}

                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className={formErrors.MatKhau.length > 0 ? "form-control error" : "form-control"}
                                            name="MatKhau"
                                            noValidate
                                            value={MatKhau}
                                            onChange={this.handleOnChange}
                                            placeholder="Password"
                                        />
                                        {formErrors.MatKhau.length > 0 && (
                                            <span className="errorMessage">{formErrors.MatKhau}</span>
                                        )}
                                    </div>

                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <small>Remember Me</small>
                                        </label>
                                        <button 
                                            type="submit" 
                                            disabled=
                                                {formErrors.TaiKhoan !== '' || formErrors.MatKhau !== '' || TaiKhoan === '' || MatKhau === ''}
                                            className="btn btn-login float-right"
                                        >Login
                                        </button>
                                    </div>
                                    <p className="text-center">Have't account? <Link to="/register">Register now</Link> </p>

                                </form>
                            </div>
                            <div className="col-md-8 banner-sec">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="https://static.pexels.com/photos/33972/pexels-photo.jpg" alt="First slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="banner-text">
                                                    <h2>This is Heaven</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg" alt="First slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="banner-text">
                                                    <h2>This is Heaven</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg" alt="First slide" />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="banner-text">
                                                    <h2>This is Heaven</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    console.log(state);
    
    return {
        
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: user => {
            dispatch(actLoginUserRequest(user));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);