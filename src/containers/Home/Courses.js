import React, { Component } from 'react';
import Courses from './../../components/Home/Courses';
import {connect} from 'react-redux';
import {actGetCoursesRequest} from './../../store/action/course.action';

class CoursesContainer extends Component {
    componentDidMount(){
        this.props.coursesList();
    }
    render() {
        var {coursesList} = this.props;
        return (
            <Courses coursesList={coursesList}/>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        coursesList : () => {
            dispatch(actGetCoursesRequest());
        }
    }
}
export default connect(null, mapDispatchToProps)(CoursesContainer);