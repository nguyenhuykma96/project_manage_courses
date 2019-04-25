import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddUserRequest, actUpdateUserRequest } from '../../store/action/user.action';

const taiKhoanRegex = RegExp(
    /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/
);
const hoTenRegex = RegExp(
    /^(([A-Za-z]+[\-\']?)*([a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀẾỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
);
const emailRegex = RegExp(
    /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/
);
const soDTRegex = RegExp(
    /(09|01[2|6|8|9])+([0-9]{8})\b/im
);

class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TaiKhoan: '',
            MatKhau: '',
            HoTen: '',
            Email: '',
            SoDT: '',
            MaLoaiNguoiDung: '',
            formErrors: {
                HoTen: '',
                Email: '',
                SoDT: '',
                TaiKhoan: '',
                MatKhau: '',
            }
        }
    }
    onClearForm = () => {
        this.setState({
            TaiKhoan: '',
            MatKhau: '',
            HoTen: '',
            Email: '',
            SoDT: '',
            MaLoaiNguoiDung: '',
            formErrors: {
                HoTen: '',
                Email: '',
                SoDT: '',
                TaiKhoan: '',
                MatKhau: '',
                MaLoaiNguoiDung: ''
            }
        })
    }
    onSubmit = e => {
        e.preventDefault();
        var { TaiKhoan, HoTen, Email, SoDT, MatKhau, MaLoaiNguoiDung } = this.state
        var user = {
            TaiKhoan: TaiKhoan,
            MatKhau: MatKhau,
            HoTen: HoTen,
            Email: Email,
            SoDT: SoDT,
            MaLoaiNguoiDung: MaLoaiNguoiDung
        }
        if (this.props.statusEditing){
            this.props.updateUser(user);
        } else {
            this.props.addUser(user);
            this.onClearForm();
        }
        this.refs.btnClose.click();
    }
    handleOnChange = e => {
        let { name } = e.target;
        let value = e.target.value;
        let formErrors = { ...this.state.formErrors };
        switch (name) {
            case "TaiKhoan":
                formErrors.TaiKhoan = taiKhoanRegex.test(value) ? "" : "invalid username!"
                break;
            case "HoTen":
                formErrors.HoTen = hoTenRegex.test(value) ? "" : "invalid full name !"
                break;
            case "Email":
                formErrors.Email = emailRegex.test(value) ? "" : "invalid email address!"
                break;
            case "SoDT":
                formErrors.SoDT = soDTRegex.test(value) ? "" : "invalid phone!"
                break;
            case "MatKhau":
                formErrors.MatKhau =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            case "MaLoaiNguoiDung":
                formErrors.MaLoaiNguoiDung =
                    !value ? "Please select !" : "";
                break;
            default:
                break;
        }
        this.setState({
            [name]: value,
            formErrors
        })

    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.saveUserEditing){
            this.setState({
                TaiKhoan: nextProps.saveUserEditing.TaiKhoan,
                Email: nextProps.saveUserEditing.Email,
                HoTen: nextProps.saveUserEditing.HoTen,
                SoDT: nextProps.saveUserEditing.SoDT,
                MatKhau: nextProps.saveUserEditing.MatKhau,
                MaLoaiNguoiDung: nextProps.saveUserEditing.MaLoaiNguoiDung
            })
        }
        // khi modal update hiện click vào add reset lại form
        if(nextProps.statusEditing === false){
            this.onClearForm()
        }
    }
    render() {
        var { TaiKhoan, HoTen, Email, SoDT, MatKhau, formErrors, MaLoaiNguoiDung } = this.state

        return (
            <div className="modal fade" id="action_user">
                <div className="modal-dialog  bg-modal ">
                    <div className="modal-content">
                        <form onSubmit={this.onSubmit}>
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title" style={{ fontSize: '25px', fontWeight: '700' }}>{this.props.statusEditing ? 'Update User' : 'Add User'}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Account</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="TaiKhoan"
                                        value={TaiKhoan}
                                        onChange={this.handleOnChange}
                                    />
                                    {formErrors.TaiKhoan.length > 0 && (
                                        <span className="errorMessage">{formErrors.TaiKhoan}</span>
                                    )}
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
                                        <span className="errorMessage">{formErrors.Email}</span>
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
                                        <span className="errorMessage">{formErrors.HoTen}</span>
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
                                        <span className="errorMessage">{formErrors.SoDT}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label >Password</label>
                                    <input
                                        type="password"
                                        className="form-control input-placeholder"
                                        value={MatKhau}
                                        name="MatKhau"
                                        onChange={this.handleOnChange}
                                    />
                                    {formErrors.MatKhau.length > 0 && (
                                        <span className="errorMessage">{formErrors.MatKhau}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input
                                                type="radio"
                                                onChange={this.handleOnChange}
                                                name="MaLoaiNguoiDung"
                                                value="HV"
                                                checked={MaLoaiNguoiDung === 'HV'}
                                            />Học viên
                                        </label>
                                    </div>
                                    <div className="form-check-inline">
                                        <label className="form-check-label">
                                            <input
                                                type="radio"
                                                onChange={this.handleOnChange}
                                                name="MaLoaiNguoiDung"
                                                value="GV"
                                                checked={MaLoaiNguoiDung === 'GV'}
                                            />Giáo vụ
                                        </label>
                                    </div>
                                    {/* {formErrors.MaLoaiNguoiDung.length > 0 && (
                                        <span className="errorMessage">{formErrors.MaLoaiNguoiDung}</span>
                                    )} */}
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
                                        MatKhau === '' ||
                                        TaiKhoan === ''
                                        // MaLoaiNguoiDung === ''
                                    }
                                >{this.props.statusEditing ? 'Change' : 'Add new '}</button>
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
        saveUserEditing: state.userEditing,
        statusEditing: state.status
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addUser: (user) => {
            dispatch(actAddUserRequest(user));
        },
        updateUser: (user) => {
            dispatch(actUpdateUserRequest(user));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalUser)
