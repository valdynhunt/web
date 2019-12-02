import React from 'react';
import './Nav.css';

class Nav extends React.Component {

    render() {

        return (

            <nav>
                <div className="nav-area highlight">
                    <img src="./img/icons/dashboard-icon.png" alt="Dashboard" title="Dashboard" />
                    <h6>Dashboard</h6>
                </div>
                <div className="nav-area">
                    <img src="./img/icons/locations-icon.png" alt="Locations" title="Locations" />
                    <h6>Locations</h6>
                </div>
                <div className="nav-area">
                    <img src="./img/icons/users-icon.png" alt="Users" title="Users" />
                    <h6>Users</h6>
                </div>
            </nav>

        );

    }

}

export default Nav;