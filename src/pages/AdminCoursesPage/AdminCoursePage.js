
import React, { Component, Fragment } from 'react';
import NavbarAdmin from '../../components/Admin/Navbar';
import SidebarAdmin from '../../components/Admin/Sidebar';
import ModalUserContainer from '../../containers/Admin/Modal_user';
import CourseContainer from '../../containers/Admin/Course';

class AdminCoursePage extends Component {
    render() {
        return (

            <Fragment>
                {/* Page Wrapper */}
                <div id="wrapper">
                    <SidebarAdmin />
                    {/* Content Wrapper */}
                    <div id="content-wrapper" className="d-flex flex-column">
                        {/* Main Content */}
                        <div id="content">
                            <NavbarAdmin />
                            {/* Begin Page Content */}
                            <div className="container-fluid">
                                {/* DataTales Example */}
                                <CourseContainer/>
                            </div>
                            {/* /.container-fluid */}
                        </div>
                        {/* End of Main Content */}
                        {/* Footer */}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright © Your Website 2019</span>
                                </div>
                            </div>
                        </footer>
                        {/* End of Footer */}
                    </div>
                    {/* End of Content Wrapper */}
                </div>
                {/* End of Page Wrapper */}
                {/* Scroll to Top Button*/}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up" />
                </a>
                {/* Add User Modal */}
                <ModalUserContainer/>
            </Fragment>

        )
    }
}
export default AdminCoursePage;
