import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div className="search-area">
                <form action="#" method="post">
                    <input type="search" name="search" id="search" placeholder="Search" />
                    <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
                </form>
            </div>
        )
    }
}
export default Search;
