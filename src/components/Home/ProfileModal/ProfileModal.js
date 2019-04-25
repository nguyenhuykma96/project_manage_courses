import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actEditProfileRequest } from '../../../store/action/profile.acation.js';
import './ProfileModal.css';


const hoTenRegex = RegExp(
    /^(([A-Za-z]+[\-\']?)*([a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀẾỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
);
const emailRegex = RegExp(
    /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/
);
const soDTRegex = RegExp(
    /(09|01[2|6|8|9])+([0-9]{8})\b/im
);
class ProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TaiKhoan: '',
            MatKhau: '',
            HoTen: '',
            Email: '',
            SoDT: '',
            MaLoaiNguoiDung: 'HV',
            formErrors: {
                HoTen: '',
                Email: '',
                SoDT: '',
                TaiKhoan: '',
                MatKhau: ''
            }
        }
    }
    componentWillReceiveProps = nextProps => {
        this.setState({
            TaiKhoan: nextProps.userProfileFromStore.TaiKhoan,
            // MatKhau: nextProps.userProfileFromStore.MatKhau,
            HoTen: nextProps.userProfileFromStore.HoTen,
            Email: nextProps.userProfileFromStore.Email,
            SoDT: nextProps.userProfileFromStore.SoDT,
            MaLoaiNguoiDung: nextProps.userProfileFromStore.MaLoaiNguoiDung
        })
    }

    onSubmit = e => {
        e.preventDefault();
        let nguoiDung = {
            TaiKhoan: this.state.TaiKhoan,
            MatKhau:  this.state.MatKhau === '' ? this.props.loginUser.MatKhau : this.state.MatKhau , // !== " " bang voi null, undefind, co value
            HoTen:  this.state.HoTen, 
            Email:  this.state.Email,
            SoDT:  this.state.SoDT,
            MaLoaiNguoiDung:  this.state.MaLoaiNguoiDung
        };
        this.props.editProfile(nguoiDung);
        this.refs.btnClose.click();   
        this.props.history.push('/');
        
    }
    handleOnChange = e => {
        let { name, value } = e.target;
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
            case "MatKhau":
                formErrors.MatKhau =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }
        this.setState({
            formErrors,
            [name]: value
        })

    }
    render() {
        var { TaiKhoan, HoTen, Email, SoDT, MatKhau,formErrors } = this.state
        return (
            <div className="modal fade" id="editprofile">
                <div className="modal-dialog  bg-modal ">
                    <div className="modal-content">
                        <form onSubmit={this.onSubmit}>

                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title" style={{ fontSize: '25px', fontWeight: '700' }}>Edit Profile</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>User</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={TaiKhoan}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={Email}
                                        name="Email"
                                        onChange={this.handleOnChange}
                                    />
                                    {formErrors.Email.length > 0 && (
                                    <span className="errorMessage" style={{ marginLeft: '17%' }}>{formErrors.Email}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>Full name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={HoTen}
                                        name="HoTen"
                                        onChange={this.handleOnChange}
                                    />
                                    {formErrors.HoTen.length > 0 && (
                                    <span className="errorMessage" style={{ marginLeft: '17%' }}>{formErrors.HoTen}</span>
                                )}
                                </div>
                                <div className="form-group">
                                    <label >Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={SoDT}
                                        name="SoDT"
                                        onChange={this.handleOnChange}
                                    />
                                    {formErrors.SoDT.length > 0 && (
                                    <span className="errorMessage" style={{ marginLeft: '17%' }}>{formErrors.SoDT}</span>
                                )}
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input
                                        type="password"
                                        className="form-control input-placeholder"
                                        placeholder="Enter password if don't want default password"
                                        value={MatKhau}
                                        name="MatKhau"
                                        onChange={this.handleOnChange}
                                    />
                                    {formErrors.MatKhau.length > 0 && (
                                    <span className="errorMessage" style={{ marginLeft: '17%' }}>{formErrors.MatKhau}</span>
                                )}
                                </div>

                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary"
                                    disabled={
                                            formErrors.HoTen !== '' ||
                                            formErrors.Email !== '' ||
                                            formErrors.SoDT !== '' ||
                                            formErrors.MatKhau !== '' ||
                                            HoTen === '' ||
                                            Email === '' ||
                                            SoDT === '' ||
                                            MatKhau === ''
                                        }
                                    >Change</button>
                                <button type="button" ref="btnClose" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userProfileFromStore: state.getProfileUser,
        loginUser : state.loginUser
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        editProfile: user => {
            dispatch(actEditProfileRequest(user));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);