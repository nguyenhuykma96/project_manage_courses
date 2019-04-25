import React, { Component } from 'react';
import CourseItem from './CourseItem';
import {connect} from 'react-redux';

class Courses extends Component {
    renderCourseComponent = () => {
        var {coursesList} = this.props;
        return coursesList.map((course, index) => {
            return <CourseItem
                key={index}
                course={course}
                />
        }) 
    }
    render() {
        return (
            <section className="popular-courses-area section-padding-100-0" style={{ backgroundImage: 'url(img/core-img/texture.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h3>Popular Online Courses</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Single Popular Course */}
                        {this.renderCourseComponent()}
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        coursesList : state.coursesList
    } 
}
export default connect(mapStateToProps, null)(Courses);