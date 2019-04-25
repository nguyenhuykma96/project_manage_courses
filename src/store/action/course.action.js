import * as Types from '../constants/ActionTypes';
import CourseService from './../../services/course.services';

const courseService = new CourseService();

export const actGetCourses = (courseList) => {
    return {
        type : Types.GET_COURSES,
        courseList
    }
}
export const actGetCoursesRequest = () => {
    return dispatch => {
        return courseService.getCourses()
            .then( res => {
                dispatch(actGetCourses(res.data))
            })
            .catch( err => {
                console.log(err);
            })
    }
}