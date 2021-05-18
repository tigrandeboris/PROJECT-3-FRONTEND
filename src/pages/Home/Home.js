import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import HomeImg from '../../images/homepage-banner.svg'
import './Home.css'

class Home extends React.Component{
    render() {
        return (
            <div className="home-page">
                <Navbar/>
                <div className='home-page-body'>
                    <div className='home-page-img'>
                        <img src={ HomeImg } alt=""/>
                    </div>
                    <div className='home-page-info'>
                        <h1>Organize your projects with Project Manager!</h1>
                        <button type="button" className="btn btn-dark home-page-button">Login</button>
                        <button type="button" className="btn btn-dark home-page-button">Signup</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;