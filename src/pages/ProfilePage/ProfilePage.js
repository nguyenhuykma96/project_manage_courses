import React, { Component } from 'react';
import ProfileModal from './../../components/Home/ProfileModal/ProfileModal';
import { connect } from 'react-redux';
import './ProfilePage.css';
import { actGetInfoUserRequest } from '../../store/action/profile.acation';


class Profile extends Component {
   

    componentDidMount = () => {
        var user = JSON.parse(sessionStorage.getItem('UserLogin'));
        var taiKhoan = user.TaiKhoan;
        let { getProfile } = this.props;
        getProfile(taiKhoan);

    }
    
    render() {
        let { userProfile } = this.props;
        return (
            <div className="container emp-profile">
                <form >
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src="img/bg-img/t1.png" alt="avartar" />
                                <div className="file btn btn-lg btn-primary">
                                    Change Photo
                                <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>
                                    {userProfile.HoTen}
                                </h5>
                                <h6>
                                    {userProfile.TenLoaiNguoiDung}
                                </h6>
                                <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="button" data-toggle="modal" data-target="#editprofile" className="btn btn-primary profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>WORK LINK</p>
                                <a href="true">Website Link</a><br />
                                <a href="true">Bootsnipp Profile</a><br />
                                <a href="true">Bootply Profile</a>
                                <p>SKILLS</p>
                                <a href="true">Web Designer</a><br />
                                <a href="true">Web Developer</a><br />
                                <a href="true">WordPress</a><br />
                                <a href="true">WooCommerce</a><br />
                                <a href="true">PHP, .Net</a><br />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userProfile.TaiKhoan}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userProfile.HoTen}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userProfile.Email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userProfile.SoDT}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userProfile.TenLoaiNguoiDung}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>Your Bio</label><br />
                                            <p>Your detail description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <ProfileModal history={this.props.history} />

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userProfile: state.getProfileUser
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getProfile: (taiKhoan) => {
            dispatch(actGetInfoUserRequest(taiKhoan));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
