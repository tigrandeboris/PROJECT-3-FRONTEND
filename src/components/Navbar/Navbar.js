import React from 'react';
import './Navbar.css';
import {withAuth} from '../../context/auth.context';

class Navbar extends React.Component {

    handleLogout = () => {
        this.props.logout();
    }

    render() {
        console.log(this.props)
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
                        <div>
                            <a className="login-nav" href="/projects">Projects Profile</a>
                            <button className='btn btn-light' onClick={this.handleLogout}>Logout</button>
                        </div>
                    }
                </div>
            </nav>
        );
    }
}

export default withAuth(Navbar);