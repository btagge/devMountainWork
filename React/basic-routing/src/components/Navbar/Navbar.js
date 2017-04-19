import React, { Component } from 'react';
import {Link} from 'react-router';
import './navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div className='component'>
                <Link className='link' to='/home'>
                    <div className='navItem'>Home</div>
                </Link>

                <Link className='link' to='/login'>
                    <div className='navItem'>Login</div>
                </Link>

                <Link className='link' to='/new-location'>
                    <div className='navItem'>Create New</div>
                </Link>
            </div>
        );
    };
};

export default Navbar;