//presentational’ components
import * as React from 'react';
const Header = ({showHome}) => {
    return (


        <nav  className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">

                </div>

                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">
                        <div>
                            <span
                                className="sidenav"
                            >&#9776; open</span>
                        </div>
                    </a></li>
                    <li style={{textDecoration:showHome?'block':'none'}}><a href="#"> HOME</a></li>
                    <li><a href="#"> CHAT</a></li>

                </ul>
                <ul className="nav navbar-nav navbar-center">

                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;