import React from 'react';
import LocationList from './LocationList';
import './Locations.css';

class Locations extends React.Component {

    render() {

        return (

            <main className="locations-container">
                <section className="location-list">
                    <h4>Locations</h4>
                    <ul>
                        {Object.keys(this.props.locations).map(key => (
                            <LocationList
                                key={key}
                                id={key}
                                details={this.props.locations[key]} 
                            />
                        ))}
                    </ul>
                </section>
                <section className="location-view">
                    <h4>Locations View</h4>
                    <img src="./img/example-map.jpg" alt="Lorem Ipsum" title="Lorem Ipsum" />
                </section>
                <section className="location-details">
                    <h4>Locations Details</h4>
                    <ul className="location-detail">
                        <li>Name:</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                    <ul className="location-detail">
                        <li>Nickname:</li>
                        <li>LorIp</li>
                    </ul>
                    <ul className="location-detail">
                        <li>GPS Coordinates:</li>
                        <li>Lorem Ipsum Dolor Sit</li>
                    </ul>
                    <ul className="location-detail">
                        <li># of assigned Admins:</li>
                        <li>8</li>
                    </ul>
                    <ul className="location-detail">
                        <li># of total Objects:</li>
                        <li>999,999</li>
                    </ul>
                </section>
            </main>

        )

    }

}

export default Locations;