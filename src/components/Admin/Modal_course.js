import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddCourseRequest, actUpdateCourseRequest } from '../../store/action/course.action';

class ModalCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MaKhoaHoc: '',
            TenKhoaHoc: '',
            LuotXem: '',
            MoTa: '',
            HinhAnh: '',
            NguoiTao: ''
        }
    }
    handleOnChange = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    onSubmit = e => {
        e.preventDefault();
        let { MaKhoaHoc, TenKhoaHoc, LuotXem, MoTa, HinhAnh, NguoiTao } = this.state;
        let course = {
            MaKhoaHoc: MaKhoaHoc,
            TenKhoaHoc: TenKhoaHoc,
            LuotXem: LuotXem,
            MoTa: MoTa,
            HinhAnh: HinhAnh,
            NguoiTao: NguoiTao
        }
        var { statusEditing } = this.props;
        if (statusEditing === false) {
            this.props.addCourse(course);
            this.onClearForm();
        } else {
            this.props.updateCourse(course);
        }
        this.refs.btnClose.click();

    }
    onClearForm = () => {
        this.setState({
            MaKhoaHoc: '',
            TenKhoaHoc: '',
            LuotXem: '',
            MoTa: '',
            HinhAnh: '',
        })
    }
    componentDidMount() {
        let { getUserLogining } = this.props;
        // get Creator
        if (getUserLogining.TaiKhoan !== undefined) {
            this.setState({
                NguoiTao: getUserLogining.TaiKhoan
            }, () => console.log(this.state)
            )
        } else {
            let user = JSON.parse(localStorage.getItem('UserLogin'));
            this.setState({
                NguoiTao: user.TaiKhoan
            }, () => console.log(this.state))
        }
    }
    componentWillReceiveProps = nextProps => {
        this.setState({
            MaKhoaHoc: nextProps.getCourseEditing.MaKhoaHoc,
            TenKhoaHoc: nextProps.getCourseEditing.TenKhoaHoc,
            LuotXem: nextProps.getCourseEditing.LuotXem,
            MoTa: nextProps.getCourseEditing.MoTa,
            HinhAnh: nextProps.getCourseEditing.HinhAnh,
        })
    }
    render() {
        var { MaKhoaHoc, TenKhoaHoc, LuotXem, MoTa, HinhAnh, NguoiTao } = this.state;
        var { statusEditing } = this.props;
        return (
            <div className="modal fade" id="action_course">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <form onSubmit={this.onSubmit}>
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">{statusEditing === false ? 'Add new course' : 'Update course'}</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                                        <label>ID</label>
                                        <input
                                            type="text"
                                            className="form-control "
                                            name="MaKhoaHoc"
                                            value={MaKhoaHoc}
                                            onChange={this.handleOnChange}
                                        // { statusEditing === false ? '' : 'disabled'}
                                        />
                                    </div>
                                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group" >
                                        <label>Name Course</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="TenKhoaHoc"
                                            value={TenKhoaHoc}
                                            onChange={this.handleOnChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                                        <label>View</label>
                                        <input
                                            type="number"
                                            className="form-control "
                                            name="LuotXem"
                                            value={LuotXem}
                                            onChange={this.handleOnChange}
                                        />
                                    </div>
                                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group" >
                                        <label>Creator</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="NguoiTao"
                                            value={NguoiTao}
                                            onChange={this.handleOnChange}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group">
                                        <label>Image</label>
                                        <input
                                            type="text"
                                            className="form-control "
                                            name="HinhAnh"
                                            value={HinhAnh}
                                            onChange={this.handleOnChange}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group">
                                        <label>Description</label>
                                        <input
                                            type="text"
                                            className="form-control "
                                            name="MoTa"
                                            value={MoTa}
                                            onChange={this.handleOnChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-outline-success">{statusEditing === false ? 'Add' : 'Update'}</button>
                                <button type="button" ref="btnClose" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
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
        getUserLogining: state.loginUser,
        getCourseEditing: state.courseEditing,
        statusEditing: state.status
    }
}
const mapDispatToProps = dispatch => {
    return {
        addCourse: (course) => {
            dispatch(actAddCourseRequest(course));
        },
        updateCourse: course => {
            dispatch(actUpdateCourseRequest(course));
        }
    }
}
export default connect(mapStateToProps, mapDispatToProps)(ModalCourse)