import React from 'react';
import './Location.css';

class Location extends React.Component {

    render() {

        const { location_id, long_name, canvas_image } = this.props.details;
        
        return (

            <section className="location-list">
                <h4><a href={`/design/${location_id}`}>{long_name}</a></h4>
                <a href={`/design/${location_id}`}>
                    <img src={canvas_image} alt={long_name} title={long_name} />
                </a>
            </section>

        );
    };

}

export default Location;