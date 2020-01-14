import React from 'react'
import LocationList from './LocationList'
import './Locations.css'

class Locations extends React.Component {

    state = {
        showModal: false,
        isHover: false,
        showImage: false,
        showDetails: false,
        index: -1,
    }

    onClose = () => {
        this.setState(
            {
                showModal: false
            }
        );
    }

    onOpen = () => {
        this.setState(
            {
                showModal: true
            }
        );
    }

    handleHover = (index) => {
        this.setState(
            {
                isHover: true,
                showImage: true,
                showDetails: true,
                index
            }
        );
    }

    handleCreateLocation = (newLocation, parent_location_id) => {
        this.setState(
            {
                showModal: false,
                isHover: false,
                showImage: false,
                showDetails: false,
                index: -1,
            }
        );
        this.props.handleCreateLocation(newLocation, parent_location_id);
    }

    handleUpdateLocation = (currentLocation) => {
        this.setState(
            {
                showModal: false,
                isHover: false,
                showImage: false,
                showDetails: false,
                index: -1,
            }
        );
        this.props.handleUpdateLocation(currentLocation);
    }

    render() {

        // try {
        //     console.log("Jason says this.state.index: ", this.state.index);
        //     console.log("Jason says this.props.locations: ", this.props.locations);

        //     if (this.state.index > -1) {
        //         console.log("Jason says this.props.locations[this.state.index]: ", this.props.locations[this.state.index]);
        //     }
        // } catch {
        //     console.log("Jason says it didn't work!");
        // }

        let $imagePreview = null;
        if (
            this.state.index > -1 && 
            typeof(this.props.locations[this.state.index]) !== "undefined" && 
            this.props.locations[this.state.index].canvas_image !== "" && 
            this.props.locations[this.state.index].canvas_image !== null
        ) {
            console.log("imagePreview: ", this.props.locations[this.state.index].canvas_image);
            $imagePreview = (
                <img 
                    src={this.props.locations[this.state.index].canvas_image} 
                    alt={this.props.locations[this.state.index].long_name} 
                    title={this.props.locations[this.state.index].long_name}
                />
            );
        } else {
            $imagePreview = (<p>No image to preview</p>);
        }

        return (

            <main className="locations-container">
                <section className="location-list">
                    <h4>
                        Locations 
                    </h4>
                    <div>
                        {Object.keys(this.props.locations).map(key => (
                            <LocationList
                                key={key}
                                id={key}
                                details={this.props.locations[key]} 
                                hover={this.state.isHover}
                                handleHover={this.handleHover}
                                handleCreateLocation={this.handleCreate}
                                handleUpdateLocation={this.handleUpdateLocation}
                            />
                        ))}
                    </div>
                </section>
                <section className="location-view">
                    <h4>Locations View</h4>
                    {
                        this.state.showImage && $imagePreview
                        // <img 
                        //     src={this.props.locations[this.state.index].canvas_image} 
                        //     alt={this.props.locations[this.state.index].long_name} 
                        //     title={this.props.locations[this.state.index].long_name}
                        // />
                    }
                </section>
                <section className="location-details">
                    <h4>Locations Details</h4>
                    <ul className="location-detail">
                        <li>Name:</li>
                        {
                            this.state.showImage &&
                            <li>{this.props.locations[this.state.index].long_name}</li>
                        }
                    </ul>
                    <ul className="location-detail">
                        <li>Nickname:</li>
                        {
                            this.state.showImage &&
                            <li>{this.props.locations[this.state.index].short_name}</li>
                        }
                    </ul>
                    <ul className="location-detail">
                        <li>Description:</li>
                        {
                            this.state.showImage &&
                            <li>{this.props.locations[this.state.index].description}</li>
                        }
                    </ul>
                    <ul className="location-detail">
                        <li>Location Type:</li>
                        {
                            this.state.showImage &&
                            <li>{this.props.locations[this.state.index].location_type.short_name}</li>
                        }
                    </ul>
                </section>
            </main>

        )

    }

}

export default Locations;