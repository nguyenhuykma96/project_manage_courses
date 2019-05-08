import * as Types from '../constants/ActionTypes';
import CourseService from './../../services/course.services';
import Swal from 'sweetalert2';

const courseService = new CourseService();

export const actGetCourses = (courseList) => {
    return {
        type: Types.GET_COURSES,
        courseList
    }
}
export const actGetCoursesRequest = () => {
    return dispatch => {
        return courseService.getCourses()
            .then(res => {
                // console.log(res);

                dispatch(actGetCourses(res.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const actAddCourse = course => {
    return {
        type: Types.ADD_COURSE,
        course
    }
}
export const actAddCourseRequest = course => {
    return dispatch => {
        return courseService.addCourse(course)
            .then(res => {
                console.log(res);
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });

                Toast.fire({
                    type: 'success',
                    title: 'Add course successfully'
                })
                dispatch(actAddCourse(course));
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export const actDeleteCourse = id => {
    return {
        type: Types.ADD_COURSE,
        id
    }
}
export const actDeleteCourseRequest = id => {
    return dispatch => {
        Swal.fire({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.value) {
                //click ok
                return courseService.deleteCourse(id)
                    .then(res => {
                        dispatch(actDeleteCourse(id));
                        Swal.fire(
                            'Deleted!',
                            'User select has been deleted.',
                            'success'
                        )
                    })
                    .catch(err => {
                        console.log(err);

                    })
            } else {
                //click cancel
                Swal.fire({
                    type: 'error',
                    title: 'Fail...',
                    text: 'Deleted Fail',
                })
            }
        })
    }
}


export const actGetCourseEditing = courseEditing => {
    return {
        type: Types.EDITING_COURSE,
        courseEditing
    }
}
export const actUpdateCourse = course => {
    return {
        type: Types.UPDATE_COURSE,
        course
    }
}
export const actUpdateCourseRequest = course => {
    return dispatch => {
        return courseService.updateCourse(course)
            .then(res => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });

                Toast.fire({
                    type: 'success',
                    title: 'Updated course successfully'
                })
                dispatch(actUpdateCourse(course));
            })
            .catch(err => {
                console.log(err);
            })
    }
}

// ghi danh
export const actRegisterCourse = (data) => {
    return {
        type: Types.REGISTER_COURSE,
        data
    }
}
export const actRegisterCourseRequest = (data) => {
    return dispatch => {
        return courseService.registerCourse(data.MaKhoaHoc, data.TaiKhoan)
            .then(res => {
                console.log(res);
                dispatch(actRegisterCourse(data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}
//  các khóa học mà user đã đc ghi danh
export const actGetRegistedCourse = (userRegistedCourse) => {
    return {
        type: Types.GET_REGISTED_COURSE,
        userRegistedCourse
    }
}
export const actGetRegistedCourseRequest = userRegistedCourse => {
    return dispatch => {
        return courseService.getRegistedCourse(userRegistedCourse.TaiKhoan)
            .then(res => {
                console.log(res);
                if (typeof (res.data) === 'string') {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });

                    Toast.fire({
                        type: 'warning',
                        title: 'Not course registed'
                    })
                    dispatch(actGetRegistedCourse(res.data))
                } else {
                    dispatch(actGetRegistedCourse(res.data)); // get dc data
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
}