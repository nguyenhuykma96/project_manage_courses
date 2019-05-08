import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetAllUsersRequest, actChangeEditStatus } from '../../store/action/user.action';
import UserItem from '../../components/Admin/UserItem';
import './User.css';
import { actFilterUser } from '../../store/action/filter.action';

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterAccount: '',
            filterPosition: -1
        }
    }

    componentDidMount() {
        this.props.getAllUser();
    }
    onChangeStatusEdit = () => {
        this.props.changeStatusEdit();
    }
    handleOnChange = (e) => {
        let { name, value } = e.target;
        let filter = {
            account: name === 'filterAccount' ? value : this.state.filterAccount,
            position: name === 'filterPosition' ? value : this.state.filterPosition
        };
        this.props.onFilterUser(filter);
        this.setState({
            [name]: value
        })
    }
    render() {
        var { filterAccount, filterPosition } = this.state;
        var { usersList, filterUser, keywordSearch } = this.props;
        var userElm = null;
        if (filterUser) {
            // filter by account
            if (filterUser.account) {
                usersList = usersList.filter((user) => {
                    return user.TaiKhoan.toLowerCase().indexOf(filterUser.account) !== -1;
                });
            }
            //filter by position
            usersList = usersList.filter((user) => {
                if (filterUser.position === -1) {
                    return usersList;
                } else {
                    return user.MaLoaiNguoiDung === (filterUser.position === 0 ? "HV" : "GV");
                }
            })
        }
        // Search All
        if (keywordSearch) {
            usersList = usersList.filter((user) => {
                return user.TaiKhoan.toLowerCase().indexOf(keywordSearch.toLowerCase()) !== -1;
            });
        }
        userElm = usersList.map((user, index) => {
            return <UserItem
                key={index}
                index={index + 1}
                user={user}
            />
        })
        return (
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Manage Users</h6>
                    <div className="dropdown dropright">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            Sort User
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">A->Z</a>
                            <a className="dropdown-item" href="#">Z->A</a>
                            <a className="dropdown-item" href="#">Position : HV</a>
                            <a className="dropdown-item" href="#">Position : GV</a>
                        </div>
                    </div>
                    <button
                        className="btn btn-primary"
                        data-toggle="modal" data-target="#action_user"
                        onClick={this.onChangeStatusEdit}
                    >
                        Add User <i className="fas fa-user-plus ml-2"></i>
                    </button>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <div className="row">
                            <div className="col-12">
                                <table className="table" id="dataTable" width="100%" cellSpacing={0} style={{ fontSize: '13px' }}>
                                    <thead>
                                        <tr className="text-center" style={{ color: 'black' }}>
                                            <th>Index</th>
                                            <th>Account</th>
                                            <th>Email</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Position</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                {/* <!-- Search form --> */}
                                                <div className="md-form active-cyan-2 mb-3">
                                                    <input
                                                        className="form-control search-user"
                                                        type="text" placeholder="Search ..." aria-label="Search"
                                                        name="filterAccount"
                                                        onChange={this.handleOnChange}
                                                        value={filterAccount}
                                                    />
                                                </div>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <select
                                                    className="form-control position"
                                                    name="filterPosition"
                                                    onChange={this.handleOnChange}
                                                    value={filterPosition}
                                                >
                                                    <option value="-1">Tất Cả</option>
                                                    <option value="0">Học viên</option>
                                                    <option value="1">Giáo vụ</option>
                                                </select>
                                            </td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userElm}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        usersList: state.user,
        userEditing: state.userEditing,
        filterUser: state.filterUser,
        keywordSearch: state.search
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllUser: () => {
            dispatch(actGetAllUsersRequest());
        },
        changeStatusEdit: () => {
            dispatch(actChangeEditStatus());
        },
        onFilterUser: (filter) => {
            dispatch(actFilterUser(filter));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)