import React, { Component } from 'react';
import {connect} from 'react-redux';
import { actSearchUser } from '../../store/action/search.action';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword : ''
        }
    }
    onClick = ()=> {
        this.props.onSearch(this.state.keyword)
    } 
    handleOnChange = (e) => {
        let {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }
    
    render() {
        var { keyword } = this.state;
        return (
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"
                        name="keyword"
                        value={keyword}
                        onChange={this.handleOnChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={this.onClick}>
                            <i className="fas fa-search fa-sm" />
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
const mapStateToProps = state => {
    return {
        
    }
} 
const mapDispatchToProps = (dispatch) => {
    return {
        onSearch : (keyword) => {
            dispatch(actSearchUser(keyword));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);