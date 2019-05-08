import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actGetCoursesRequest } from '../../store/action/course.action';
import CourseItem from './../../components/Admin/CourseItem';
import ModalCourseContainer from './Modal_course';
import { actChangeEditStatus } from '../../store/action/user.action';
import { actFilter, actFilterCourse } from '../../store/action/filter.action';


class CourseContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterCourse: ''
        }
    }

    componentDidMount = () => {
        this.props.getAllCourse();
    }
    onChangeStatusEdit = () => {
        this.props.changeEditStatus();
    }
    handleOnChange = (e) => {
        let { name, value } = e.target;
        let filter = {
            nameCourse: name === 'filterCourse' ? value : this.state.filterCourse
        }
        this.props.onFilterCourse(filter);
        this.setState({
            [name]: value
        })
    }
    render() {
        var { courseList, filterCourseByName } = this.props;
        var courseElm = null;
        //filter Course
        if(filterCourseByName){      
            courseList = courseList.filter( course => {
                return course.TenKhoaHoc.toLowerCase().indexOf(filterCourseByName) !== -1;
            })
        }
        courseElm = courseList.map((course, index) => {
            return <CourseItem
                key={index}
                index={index}
                course={course}
            />
        })
        return (
            <Fragment>
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Manage Users</h6>
                        <div className="dropdown dropright">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                Sort User
                        </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">A->Z</a>
                                <a className="dropdown-item" href="#">Z->A</a>
                                <a className="dropdown-item" href="#">Position : HV</a>
                                <a className="dropdown-item" href="#">Position : GV</a>
                            </div>
                        </div>
                        <button
                            className="btn btn-primary"
                            data-toggle="modal" data-target="#action_course"
                            onClick={this.onChangeStatusEdit}
                        >
                            Add Course <i className="fas fa-laptop-code nl-2"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <div className="row">
                                <div className="col-12">
                                    <table className="table" id="dataTable" width="100%" cellSpacing={0} style={{ fontSize: '13px' }}>
                                        <thead>
                                            <tr className="text-center" style={{ color: 'black' }}>
                                                <th>Index</th>
                                                <th>Course Name</th>
                                                <th>Image</th>
                                                <th>Creator</th>
                                                <th>View</th>
                                                <th>Description</th>
                                                <th>Action</th>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>
                                                    {/* <!-- Search form --> */}
                                                    <div className="md-form active-cyan-2 mb-3">
                                                        <input
                                                            className="form-control search-user"
                                                            type="text" placeholder="Search ..." aria-label="Search"
                                                            name="filterCourse"
                                                            value={this.state.filterCourse}
                                                            onChange={this.handleOnChange}
                                                        />
                                                    </div>
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {courseElm}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalCourseContainer />
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        courseList: state.coursesList,
        filterCourseByName : state.filterCourse.nameCourse
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllCourse: () => {
            dispatch(actGetCoursesRequest());
        },
        changeEditStatus: () => {
            dispatch(actChangeEditStatus());
        },
        onFilterCourse: (filter) => {
            dispatch(actFilterCourse(filter));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);
