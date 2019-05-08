import  React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import RouteNormal  from './Route';
import LayoutHome, {LayoutAdmin,LayoutLogin, LayoutRegister, LayoutProfile}  from './Layout';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProfileContainer from './containers/Profile/Profile';
import AdminPage from './pages/AdminPage/AdminPage';
import AdminUserPage from './pages/AdminUserPage/AdminUserPage';
import AdminCoursePage from './pages/AdminCoursesPage/AdminCoursePage';
import Auth from './components/Home/Auth/auth';


const routes = (
    <Router>
        <Switch>
            <Auth path="/admin" exact component={AdminPage} layout={LayoutAdmin} />
            <Auth path="/admin/user" component={AdminUserPage} layout={LayoutAdmin} />
            <Auth path="/admin/course" component={AdminCoursePage} layout={LayoutAdmin} />
            <RouteNormal path="/login"  component={LoginPage} layout={LayoutLogin} />
            <RouteNormal path="/register" component={RegisterPage} layout={LayoutRegister}/>
            <RouteNormal path="/profile" component={ProfileContainer} layout={LayoutProfile}/>
            <RouteNormal path="/" exact component={HomePage} layout={LayoutHome}  />

        </Switch>
    </Router>
);

export default routes;