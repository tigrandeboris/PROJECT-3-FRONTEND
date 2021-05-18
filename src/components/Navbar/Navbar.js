import React from 'react';
import './Navbar.css'


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className='nav-name'><a href="/">Project Manager</a></div>
                <div className='navbar-anchor'>
                    <a className='login-nav' href="/login">Login</a>
                    <a className='signup-nav' href="/signup">Signup</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;