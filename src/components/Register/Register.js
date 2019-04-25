import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actRegisterUserRequest } from './../../store/action/auth.action';
// import swal from 'sweetalert';
import Swal from 'sweetalert2';
import './Register.css';

const hoTenRegex = RegExp(
    /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/
);
const emailRegex = RegExp(
    /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/
);
const soDTRegex = RegExp(
    /(09|01[2|6|8|9])+([0-9]{8})\b/im
);
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

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HoTen: '',
            Email: '',
            SoDT: '',
            TaiKhoan: '',
            MatKhau: '',
            MaLoaiNguoiDung: 'HV',
            formErrors: {
                HoTen: '',
                Email: '',
                SoDT: '',
                TaiKhoan: '',
                MatKhau: ''
            },
        }
    }
    handleOnChange = e => {
        var { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        switch (name) {
            case "HoTen":
                formErrors.HoTen = hoTenRegex.test(value) ? "" : "invalid full name address"
                break;
            case "Email":
                formErrors.Email = emailRegex.test(value) ? "" : "invalid email address"
                break;
            case "SoDT":
                formErrors.SoDT = soDTRegex.test(value) ? "" : "invalid phone address"
                break;
            case "TaiKhoan":
                formErrors.TaiKhoan = taiKhoanRegex.test(value) ? "" : "invalid user name address"
                break;
            case "MatKhau":
                formErrors.MatKhau =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }
    onSubmit = e => {
        let { HoTen, Email, SoDT, TaiKhoan, MatKhau, isRegister } = this.state;
        let user = {
            HoTen: HoTen,
            Email: Email,
            SoDT: SoDT,
            TaiKhoan: TaiKhoan,
            MatKhau: MatKhau,
            MaLoaiNguoiDung: this.state.MaLoaiNguoiDung,
            isRegister: !isRegister
        }
        e.preventDefault();
        this.props.registerUser(user);
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Register successfully!',
            showConfirmButton: false,
            timer: 1500
        })
        this.props.history.replace("/login");

    }
    render() {
        var { HoTen, Email, SoDT, TaiKhoan, MatKhau, formErrors } = this.state;
        return (
            <Fragment>
                <div className="container">
                    <div className="card bg-light">
                        <article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
                            <h4 className="card-title mt-3 text-center">Create Account</h4>
                            <p className="text-center">Get started with your free account</p>
                            <p>
                                <a href="#twitter" className="btn btn-block btn-twitter"> <i className="fa fa-twitter"></i>   Login via Twitter</a>
                                <a href="#facebook" className="btn btn-block btn-facebook"> <i className="fa fa-facebook"></i>   Login via facebook</a>
                            </p>
                            <p className="divider-text">
                                <span className="bg-light">OR</span>
                            </p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                    </div>
                                    <input
                                        name="HoTen"
                                        value={HoTen}
                                        onChange={this.handleOnChange}
                                        className={formErrors.HoTen.length > 0 ? "form-control error" : "form-control"}
                                        placeholder="Full name"
                                        type="text"
                                        noValidate
                                    />

                                </div>
                                {formErrors.HoTen.length > 0 && (
                                    <span className="errorMessage" style={{ marginLeft: '17%' }}>{formErrors.HoTen}</span>
                                )}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                    </div>
                                    <input
                                        className={formErrors.Email.length > 0 ? "form-control error" : "form-control"}
                                        placeholder="Email address"
                                        type="email"
                                        name="Email"
                                        value={Email}
                                        onChange={this.handleOnChange}
                                        noValidate
                                    />

                                </div>
                                {formErrors.Email.length > 0 && (
                                    <span className="errorMessage" style={{ marginLeft: '17%' }}>{formErrors.Email}</span>
                                )}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                                    </div>
                                    <input
                                        className={formErrors.SoDT.length > 0 ? "form-control error" : "form-control"}
                                        placeholder="Phone number"
                                        type="number"
                                        name="SoDT"
                                        value={SoDT}
                                        onChange={this.handleOnChange}
                                        noValidate
                                    />

                                </div>
                                {formErrors.SoDT.length > 0 && (
                                    <span className="errorMessage" style={{ marginLeft: '17%' }}>{formErrors.SoDT}</span>
                                )}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                    </div>
                                    <input
                                        className={formErrors.TaiKhoan.length > 0 ? "form-control error" : "form-control"}
                                        placeholder="User name"
                                        type="text"
                                        name="TaiKhoan"
                                        value={TaiKhoan}
                                        onChange={this.handleOnChange}
                                        noValidate
                                    />

                                </div>
                                {formErrors.TaiKhoan.length > 0 && (
                                    <span className="errorMessage" style={{ marginLeft: '17%' }}>{formErrors.TaiKhoan}</span>
                                )}
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                    </div>
                                    <input
                                        className={formErrors.MatKhau.length > 0 ? "form-control error" : "form-control"}
                                        placeholder="Create password"
                                        type="password"
                                        name="MatKhau"
                                        value={MatKhau}
                                        onChange={this.handleOnChange}
                                        noValidate
                                    />

                                </div>
                                {formErrors.MatKhau.length > 0 && (
                                    <span className="errorMessage" style={{ marginLeft: '17%' }}>{formErrors.MatKhau}</span>
                                )}
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        disabled={
                                            formErrors.HoTen !== '' ||
                                            formErrors.Email !== '' ||
                                            formErrors.SoDT !== '' ||
                                            formErrors.TaiKhoan !== '' ||
                                            formErrors.MatKhau !== '' ||
                                            HoTen === '' ||
                                            Email === '' ||
                                            SoDT === '' ||
                                            TaiKhoan === '' ||
                                            MatKhau === ''
                                        }
                                    > Create Account  </button>
                                </div>
                                <p className="text-center">Have an account? <Link to="/login">Log In</Link> </p>
                            </form>
                        </article>
                    </div>
                </div>
            </Fragment>

        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        registerUser: user => {
            dispatch(actRegisterUserRequest(user));
        }
    }
}
export default connect(null, mapDispatchToProps)(Register);