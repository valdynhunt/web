import React from 'react'
import './Location.css'

class Location extends React.Component {

    render() {

        const { location_id, long_name, canvas_image } = this.props.details;

        let $imagePreview = null;

        if (
            typeof(canvas_image) !== "undefined" && 
            canvas_image !== "" && 
            canvas_image !== null
        ) {
            $imagePreview = (
                <img 
                    src={canvas_image} 
                    alt={long_name} 
                    title={long_name}
                />
            );
        } else {
            $imagePreview = (<p>No image to preview</p>);
        }
        
        return (

            <section className="location-list">
                <h4><a href={`/design/${location_id}`}>{long_name}</a></h4>
                <a href={`/design/${location_id}`}>
                    {
                        $imagePreview
                    }
                </a>
            </section>

        );
    };

}

export default Location;