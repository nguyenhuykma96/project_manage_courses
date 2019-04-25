import React, { Component } from 'react';


class CourseItem extends Component {
    render() {
        var {course} = this.props;
        return (
            <div className="col-12 col-md-6 col-lg-4">
                <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="750ms">
                    <img src={course.HinhAnh} style={{height:'250px'}} />
                    {/* Course Content */}
                    <div className="course-content">
                        <h4>{course.TenKhoaHoc}</h4>
                        <div className="meta d-flex align-items-center">
                            <a href="#">{course.NguoiTao}</a>
                        </div>
                        <p style={{minHeight: '200px'}}>{course.MoTa}</p>
                    </div>
                    {/* Seat Rating Fee */}
                    <div className="seat-rating-fee d-flex justify-content-between">
                        <div className="seat-rating h-100 d-flex align-items-center">
                            <div className="seat">
                                <i className="fa fa-user" aria-hidden="true" /> {course.LuotXem}
                            </div>
                            <div className="rating">
                                <i className="fa fa-star" aria-hidden="true" /> 4.5
                            </div>
                        </div>
                        <div className="course-fee h-100">
                            <a href="#" className="free">$45</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CourseItem
