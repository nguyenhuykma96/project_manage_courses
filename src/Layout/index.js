import React, { Component, Fragment } from 'react';
import Header from './../components/Home/Header';

export default class LayoutHome extends Component {
    
    render() {
        const Component = this.props.children;
        return (
            <Fragment>
                <Header />
                {Component}
            </Fragment>
        )
    }
};
// Admin
export class LayoutAdmin extends Component {
    render() {
        const Component = this.props.children;
        return (
            <Fragment>
                {Component}
            </Fragment>
        )
    }
};
// export class LayoutAdminUser extends Component {
//     render() {
//         const Component = this.props.children;
//         return (
//             <Fragment>
//                 <SidebarAdmin/>
//                 {Component}
//             </Fragment>
//         )
//     }
// };
// End Admin


export class LayoutLogin extends Component {
    render() {
        const Component = this.props.children;
        return (
            <Fragment>
                {Component}
            </Fragment>
        )
    }
};
export class LayoutRegister extends Component {
    render() {
        const Component = this.props.children;     
        return (
            <Fragment>
                {Component}
            </Fragment>
        )
    }
};
export class LayoutProfile extends Component {
    render() {
        const Component = this.props.children;
        return (
            <Fragment>
                {Component}
            </Fragment>
        )
    }
};


