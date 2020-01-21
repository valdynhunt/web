import React from 'react';
import './Main.css';
import Dashboard from './Dashboard';
import Locations from './Locations';
import Users from './Users';

class Main extends React.Component {

    handleCreateLocation = (newLocation, parent_location_id) => {
        this.props.handleCreateLocation(newLocation, parent_location_id);
    }

    handleUpdateLocation = (currentLocation) => {
        this.props.handleUpdateLocation(currentLocation);
    }

    handleDeleteLocation = (location_id) => {
        this.props.handleDeleteLocation(location_id);
    }

    render() {

        if (this.props.page === 'Locations') {
            return (
                <Locations 
                    locations={this.props.locations} 
                    handleCreateLocation={this.handleCreateLocation}
                    handleUpdateLocation={this.handleUpdateLocation}
                    handleDeleteLocation={this.handleDeleteLocation}
                />
            );
        } else if (this.props.page === 'Users') {
            return <Users />
        } else {
            return <Dashboard locations={this.props.locations} />
        }
        
    }

}

export default Main;