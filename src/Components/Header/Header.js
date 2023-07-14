import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <h1 className="display-4 text-center">
                <i className="fas fa-book-open text-warning">
                </i> Add 
                <span className="text-warning"> Book</span>
            </h1>
        )
    }
}
