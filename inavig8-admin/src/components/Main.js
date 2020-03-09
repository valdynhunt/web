import React from 'react'
import Dashboard from './Dashboard'
import Locations from './Locations'
import Users from './Users'
import Options from './Options'
import './Main.css'

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

    handleImportImage = (uploadImage) => {
        this.props.handleImportImage(uploadImage);
    }

    render() {

        if (this.props.page === 'Locations') {
            return (
                <Locations 
                    locations={this.props.locations} 
                    handleCreateLocation={this.handleCreateLocation}
                    handleUpdateLocation={this.handleUpdateLocation}
                    handleDeleteLocation={this.handleDeleteLocation}
                    handleImportImage={this.handleImportImage}
                />
            );
        } else if (this.props.page === 'Users') {
            return (
                <Users 
                    subUsers={this.props.subUsers}      
                />
            );
        } else if (this.props.page === 'Options') {
            return (
                <Options/>
            );
        } else {
            return <Dashboard locations={this.props.locations} />
        }
        
    }

}

export default Main;