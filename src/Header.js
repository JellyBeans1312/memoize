import React, { Component } from 'react';
import './Header.scss';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCard: false
        }
    }
    render() {
        return (
            <header className="header">
                <div className="header-content">
                Flash Cards (unanswered)
                </div>
            </header>
        )
    }
}

export default Header;