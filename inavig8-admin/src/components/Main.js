import React from 'react';
import './Main.css';
import Dashboard from './Dashboard';
import Locations from './Locations';
import Users from './Users';

class Main extends React.Component {

    render() {

        if (this.props.page === 'Locations') {
            return <Locations />
        } else if (this.props.page === 'Users') {
            return <Users />
        } else {
            return <Dashboard />
        }
        
    }

}

export default Main;