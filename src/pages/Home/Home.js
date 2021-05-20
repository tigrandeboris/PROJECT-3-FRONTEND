import React from 'react';
import {Link} from 'react-router-dom';
import HomeImg from '../../images/homepage-banner.svg'
import './Home.css'
import {withAuth} from '../../context/auth.context';

class Home extends React.Component{
    render() {
        return (
            <div className="home-page">
                <div className='home-page-body'>
                    <div className='home-page-img'>
                        <img src={ HomeImg } alt=""/>
                    </div>
                    <div className='home-page-info'>
                        <h1>Organize your projects with Project Manager!</h1>
                        {!this.props.isLoggedIn &&
                        <div>
                            <Link to='/login'><button type="button" className="btn btn-dark home-page-button">Login</button></Link>
                            <Link to='/signup'><button type="button" className="btn btn-dark home-page-button">Signup</button></Link>
                        </div>
                        }
                        {this.props.isLoggedIn &&
                        <Link to='/projects'><button type="button" className="btn btn-dark home-page-button-2">Create Project</button></Link>
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default withAuth(Home);