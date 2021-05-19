import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {

    handleLogout = () => {
        this.props.logout();
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="nav-name"><a href="/">Project Manager</a></div>
                <div className="navbar-anchor">
                    {!this.props.isLoggedIn &&
                        <div>
                            <a className="login-nav" href="/login">Login</a>
                            <a className='signup-nav' href="/signup">Signup</a>
                        </div>
                    }
                    {this.props.isLoggedIn &&
                    <button className='btn btn-danger' onClick={this.handleLogout}>Logout</button>
                    }
                </div>
            </nav>
        );
    }
}

export default Navbar;