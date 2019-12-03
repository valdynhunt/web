import React from 'react';
import './Nav.css';

class Nav extends React.Component {

    navButtonRef = React.createRef();

    onLocations = (e) => {

        e.preventDefault();

        const selection = 'Locations';
        this.props.onNavSelection(selection);

    }

    onUsers = (e) => {

        e.preventDefault();

        const selection = 'Users';
        this.props.onNavSelection(selection);

    }

    onDashboard = (e) => {

        e.preventDefault();

        const selection = 'Dashboard';
        this.props.onNavSelection(selection);

    }

    render() {

        return (

            <nav>
                <a href="#" onClick={this.onDashboard}>
                    <div className="nav-area highlight">
                        <img src="./img/icons/dashboard-icon.png" alt="Dashboard" title="Dashboard" />
                        <h6>Dashboard</h6>
                        <input type="hidden" name="nav" value="Dashboard" ref={this.navButtonRef} />
                    </div>
                </a>
                <a href="#" onClick={this.onLocations}>
                    <div className="nav-area">
                        <img src="./img/icons/locations-icon.png" alt="Locations" title="Locations" />
                        <h6>Locations</h6>
                        <input type="hidden" name="nav" value="Locations" ref={this.navButtonRef} />
                    </div>
                </a>
                <a href="#" onClick={this.onUsers}>
                    <div className="nav-area">
                        <img src="./img/icons/users-icon.png" alt="Users" title="Users" />
                        <h6>Users</h6>
                        <input type="hidden" name="nav" value="Users" ref={this.navButtonRef} />
                    </div>
                </a>
            </nav>

        );

    }

}

export default Nav;