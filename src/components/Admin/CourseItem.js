import React, { Component } from 'react';
import {connect} from 'react-redux';
import { actDeleteCourseRequest, actGetCourseEditing } from '../../store/action/course.action';
import { actChangeEditStatusTrue } from '../../store/action/user.action';

class Course extends Component {
    onDeleteCourse = (id) => {
        this.props.deleteCourse(id);
    }
    onSaveCourseEditing = () => {
        this.props.changeStatus();
        this.props.getCourseEditing(this.props.course);
    }
    render() {
        var { course, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{course.TenKhoaHoc}</td>
                <td style={{ maxWidth: '300px' }}>{course.HinhAnh}</td>
                <td>{course.NguoiTao}</td>
                <td>{course.LuotXem}</td>
                <td>{course.MoTa}</td>
                <td>
                    <i className="far fa-trash-alt mr-2"
                        style={{ cursor: 'pointer' }}
                        onClick={this.onDeleteCourse.bind(this, course.MaKhoaHoc)}>
                    </i>
                    <i className="far fa-edit"
                        style={{ cursor: 'pointer' }}
                        data-toggle="modal"
                        data-target="#action_course"
                        onClick={this.onSaveCourseEditing}
                    >
                    </i>
                </td>
            </tr>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        deleteCourse : (id) => {
            dispatch(actDeleteCourseRequest(id));
        },
        changeStatus : () => {
            dispatch(actChangeEditStatusTrue());
        },
        getCourseEditing : (courseEditing) => {
            dispatch(actGetCourseEditing(courseEditing));
        }
    }
}
export default connect(null, mapDispatchToProps)(Course);