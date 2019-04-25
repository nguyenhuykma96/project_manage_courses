import React, {Component, Fragment} from 'react';
import ProfilePage from './../../pages/ProfilePage/ProfilePage';
import Auth from './../../components/Home/Auth/auth';

class ProfileContainer extends Component {
   render(){
    return (
        <Fragment>
            <Auth component={ProfilePage} />
        </Fragment>
    );
   }
}
export default ProfileContainer;
