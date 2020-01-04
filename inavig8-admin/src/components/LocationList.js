import React from 'react';
import './LocationList.css';

class Location extends React.Component {

    onMouseHover = () => {
        // console.log("this.props: ", this.props.id);
        this.props.handleHover(this.props.id);
    }

    render() {

        const { location_id, long_name } = this.props.details;
        
        return (
            <li
                onMouseEnter={this.onMouseHover}
                onMouseLeave={this.onMouseHover}
            >
                <a href={`/design/${location_id}`}>
                    {long_name}
                </a>
                {/* { this.props.hover && <span>yeppers!</span>} */}
            </li>

        );
    };

}

export default Location;