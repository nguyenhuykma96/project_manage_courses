import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import CoursesContainer from './../../containers/Home/Courses';

class HomePage extends Component {
    render() {
        
        return (
            <div>
                {/* Preloader */}
                {/* <div id="preloader">
                    <div className="spinner" />
                </div> */}
                {/* ##### Header Area Start ##### */}

                {/* ##### Header Area End ##### */}
                {/* ##### Hero Area Start ##### */}
                <section className="hero-area bg-img bg-overlay-2by5" style={{ backgroundImage: 'url(img/bg-img/bg1.jpg)' }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12">
                                {/* Hero Content */}
                                <div className="hero-content text-center">
                                    <h2>Let's Study Together</h2>
                                    <a href="#" className="btn clever-btn">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Hero Area End ##### */}
                {/* ##### Cool Facts Area Start ##### */}
                <section className="cool-facts-area section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            {/* Single Cool Facts Area */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-cool-facts-area text-center mb-100 wow fadeInUp" data-wow-delay="250ms">
                                    <div className="icon">
                                        <img src="img/core-img/docs.png" />
                                    </div>
                                    <h2><span className="counter">1912</span></h2>
                                    <h5>Success Stories</h5>
                                </div>
                            </div>
                            {/* Single Cool Facts Area */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-cool-facts-area text-center mb-100 wow fadeInUp" data-wow-delay="500ms">
                                    <div className="icon">
                                        <img src="img/core-img/star.png" />
                                    </div>
                                    <h2><span className="counter">123</span></h2>
                                    <h5>Dedicated Tutors</h5>
                                </div>
                            </div>
                            {/* Single Cool Facts Area */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-cool-facts-area text-center mb-100 wow fadeInUp" data-wow-delay="750ms">
                                    <div className="icon">
                                        <img src="img/core-img/events.png" />
                                    </div>
                                    <h2><span className="counter">89</span></h2>
                                    <h5>Scheduled Events</h5>
                                </div>
                            </div>
                            {/* Single Cool Facts Area */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-cool-facts-area text-center mb-100 wow fadeInUp" data-wow-delay="1000ms">
                                    <div className="icon">
                                        <img src="img/core-img/earth.png" />
                                    </div>
                                    <h2><span className="counter">56</span></h2>
                                    <h5>Available Courses</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Cool Facts Area End ##### */}
                {/* ##### Popular Courses Start ##### */}
                <CoursesContainer />
                {/* ##### Popular Courses End ##### */}
                {/* ##### Best Tutors Start ##### */}
                <section className="best-tutors-area section-padding-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h3>The Best Tutors in Town</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="tutors-slide owl-carousel wow fadeInUp" data-wow-delay="250ms">
                                    {/* Single Tutors Slide */}
                                    <div className="single-tutors-slides">
                                        {/* Tutor Thumbnail */}
                                        <div className="tutor-thumbnail">
                                            <img src="img/bg-img/t1.png" />
                                        </div>
                                        {/* Tutor Information */}
                                        <div className="tutor-information text-center">
                                            <h5>Alex Parker</h5>
                                            <span>Teacher</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.</p>
                                            <div className="social-info">
                                                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Tutors Slide */}
                                    <div className="single-tutors-slides">
                                        {/* Tutor Thumbnail */}
                                        <div className="tutor-thumbnail">
                                            <img src="img/bg-img/t2.png" />
                                        </div>
                                        {/* Tutor Information */}
                                        <div className="tutor-information text-center">
                                            <h5>Alex Parker</h5>
                                            <span>Teacher</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.</p>
                                            <div className="social-info">
                                                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Tutors Slide */}
                                    <div className="single-tutors-slides">
                                        {/* Tutor Thumbnail */}
                                        <div className="tutor-thumbnail">
                                            <img src="img/bg-img/t3.png" />
                                        </div>
                                        {/* Tutor Information */}
                                        <div className="tutor-information text-center">
                                            <h5>Alex Parker</h5>
                                            <span>Teacher</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.</p>
                                            <div className="social-info">
                                                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Tutors Slide */}
                                    <div className="single-tutors-slides">
                                        {/* Tutor Thumbnail */}
                                        <div className="tutor-thumbnail">
                                            <img src="img/bg-img/t4.png" />
                                        </div>
                                        {/* Tutor Information */}
                                        <div className="tutor-information text-center">
                                            <h5>Alex Parker</h5>
                                            <span>Teacher</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.</p>
                                            <div className="social-info">
                                                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single Tutors Slide */}
                                    <div className="single-tutors-slides">
                                        {/* Tutor Thumbnail */}
                                        <div className="tutor-thumbnail">
                                            <img src="img/bg-img/t5.png" />
                                        </div>
                                        {/* Tutor Information */}
                                        <div className="tutor-information text-center">
                                            <h5>Alex Parker</h5>
                                            <span>Teacher</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.</p>
                                            <div className="social-info">
                                                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Best Tutors End ##### */}
                {/* ##### Register Now Start ##### */}
                <section className="register-now section-padding-100-0 d-flex justify-content-between align-items-center" style={{ backgroundImage: 'url(img/core-img/texture.png)' }}>
                    {/* Register Contact Form */}
                    <div className="register-contact-form mb-100 wow fadeInUp" data-wow-delay="250ms">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="forms">
                                        <h4>Courses For Free</h4>
                                        <form action="#" method="post">
                                            <div className="row">
                                                <div className="col-12 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="text" placeholder="Name" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="email" placeholder="Email" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="phone" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="site" placeholder="Site" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn clever-btn w-100">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Register Now Countdown */}
                    <div className="register-now-countdown mb-100 wow fadeInUp" data-wow-delay="500ms">
                        <h3>Register Now</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae. Donec bibendum tortor sed mi faucibus vehicula. Sed erat lorem</p>
                        {/* Register Countdown */}
                        <div className="register-countdown">
                            <div className="events-cd d-flex flex-wrap" data-countdown="2019/03/01" />
                        </div>
                    </div>
                </section>
                {/* ##### Register Now End ##### */}
                {/* ##### Upcoming Events Start ##### */}
                <section className="upcoming-events section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h3>Upcoming events</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Single Upcoming Events */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-upcoming-events mb-50 wow fadeInUp" data-wow-delay="250ms">
                                    {/* Events Thumb */}
                                    <div className="events-thumb">
                                        <img src="img/bg-img/e1.jpg" />
                                        <h6 className="event-date">August 26</h6>
                                        <h4 className="event-title">Networking Day</h4>
                                    </div>
                                    {/* Date & Fee */}
                                    <div className="date-fee d-flex justify-content-between">
                                        <div className="date">
                                            <p><i className="fa fa-clock" /> August 26 @ 9:00 am</p>
                                        </div>
                                        <div className="events-fee">
                                            <a href="#">$45</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single Upcoming Events */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-upcoming-events mb-50 wow fadeInUp" data-wow-delay="500ms">
                                    {/* Events Thumb */}
                                    <div className="events-thumb">
                                        <img src="img/bg-img/e2.jpg" />
                                        <h6 className="event-date">August 7</h6>
                                        <h4 className="event-title">Open Doors Day</h4>
                                    </div>
                                    {/* Date & Fee */}
                                    <div className="date-fee d-flex justify-content-between">
                                        <div className="date">
                                            <p><i className="fa fa-clock" /> August 7 @ 9:00 am</p>
                                        </div>
                                        <div className="events-fee">
                                            <a href="#" className="free">Free</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single Upcoming Events */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-upcoming-events mb-50 wow fadeInUp" data-wow-delay="750ms">
                                    {/* Events Thumb */}
                                    <div className="events-thumb">
                                        <img src="img/bg-img/e3.jpg" />
                                        <h6 className="event-date">August 3</h6>
                                        <h4 className="event-title">Creative Leadership</h4>
                                    </div>
                                    {/* Date & Fee */}
                                    <div className="date-fee d-flex justify-content-between">
                                        <div className="date">
                                            <p><i className="fa fa-clock" /> August 3 @ 9:00 am</p>
                                        </div>
                                        <div className="events-fee">
                                            <a href="#">$45</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Upcoming Events End ##### */}
                {/* ##### Blog Area Start ##### */}
                <section className="blog-area section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h3>From Our Blog</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Single Blog Area */}
                            <div className="col-12 col-md-6">
                                <div className="single-blog-area mb-100 wow fadeInUp" data-wow-delay="250ms">
                                    <img src="img/blog-img/1.jpg" />
                                    {/* Blog Content */}
                                    <div className="blog-content">
                                        <a href="#" className="blog-headline">
                                            <h4>English Grammer</h4>
                                        </a>
                                        <div className="meta d-flex align-items-center">
                                            <a href="#">Sarah Parker</a>
                                            <span><i className="fa fa-circle" aria-hidden="true" /></span>
                                            <a href="#">Art &amp; Design</a>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                    </div>
                                </div>
                            </div>
                            {/* Single Blog Area */}
                            <div className="col-12 col-md-6">
                                <div className="single-blog-area mb-100 wow fadeInUp" data-wow-delay="500ms">
                                    <img src="img/blog-img/2.jpg" />
                                    {/* Blog Content */}
                                    <div className="blog-content">
                                        <a href="#" className="blog-headline">
                                            <h4>English Grammer</h4>
                                        </a>
                                        <div className="meta d-flex align-items-center">
                                            <a href="#">Sarah Parker</a>
                                            <span><i className="fa fa-circle" aria-hidden="true" /></span>
                                            <a href="#">Art &amp; Design</a>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Blog Area End ##### */}
                {/* ##### Footer Area Start ##### */}
                <footer className="footer-area">
                    {/* Top Footer Area */}
                    <div className="top-footer-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    {/* Footer Logo */}
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="img/core-img/logo2.png" /></a>
                                    </div>
                                    {/* Copywrite */}
                                    <p><a href="#">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                        Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by </a><a href="https://colorlib.com" target="_blank">Colorlib</a>
                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Footer Area */}
                    <div className="bottom-footer-area d-flex justify-content-between align-items-center">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <a href="#"><span>Phone:</span> +44 300 303 0266</a>
                            <a href="#"><span>Email:</span> info@clever.com</a>
                        </div>
                        {/* Follow Us */}
                        <div className="follow-us">
                            <span>Follow us</span>
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                            <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        </div>
                    </div>
                </footer>
                {/* ##### Footer Area End ##### */}

            </div>
        )
    }
}
export default HomePage;