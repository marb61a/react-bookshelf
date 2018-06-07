import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        
    }
    
    render(){
        return(
            <header>
                <div className="open_nav">
                
                </div>
                
                <Link to="/" className="logo">
                        React Book Shelf
                </Link>
            </header>
        );
    }
}

export default Header;