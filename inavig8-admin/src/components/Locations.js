import React from 'react';
import LocationList from './LocationList';
import './Locations.css';

class Locations extends React.Component {

    state = {
        isHover: false,
        showImage: false,
        showDetails: false,
        index: -1,
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

    render() {

        return (

            <main className="locations-container">
                <section className="location-list">
                    <h4>Locations</h4>
                    <ul className="ul-location-list">
                        {Object.keys(this.props.locations).map(key => (
                            <LocationList
                                key={key}
                                id={key}
                                details={this.props.locations[key]} 
                                handleHover={this.handleHover}
                                hover={this.state.isHover}
                            />
                        ))}
                    </ul>
                </section>
                <section className="location-view">
                    <h4>Locations View</h4>
                    {
                        this.state.showImage &&
                        <img 
                            src={this.props.locations[this.state.index].canvas_image} 
                            alt={this.props.locations[this.state.index].long_name} 
                            title={this.props.locations[this.state.index].long_name}
                        />
                        //<img src="./img/example-map.jpg" alt="Lorem Ipsum" title="Lorem Ipsum" />
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
                    {/* <ul className="location-detail">
                        <li>GPS Coordinates:</li>
                        {
                            this.state.showImage &&
                            <li>unknown</li>
                        }
                    </ul>
                    <ul className="location-detail">
                        <li># of assigned Admins:</li>
                        {
                            this.state.showImage &&
                            <li>unknown</li>
                        }
                    </ul>
                    <ul className="location-detail">
                        <li># of total Objects:</li>
                        {
                            <li>unknown</li>
                        }
                    </ul> */}
                </section>
            </main>

        )

    }

}

export default Locations;