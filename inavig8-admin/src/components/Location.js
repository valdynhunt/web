import React from 'react';
import './Location.css';

class Location extends React.Component {

    render() {

        const { id, long_name } = this.props.details;

        return (

            <section className="location-list">
                <h4>Location: <a href={`/locations/${id}`}>{long_name}</a></h4>
                <a href="/#"><img src="./img/example-map.jpg" alt={long_name} title={long_name} /></a>
            </section>

        );
    };

}

export default Location;