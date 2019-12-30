import React from 'react';
import './LocationList.css';

class Location extends React.Component {

    state = {
        onHover: false,
    }

    onMouseHover = (e) => {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            onHover: !state.onHover,
        };
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
                {this.state.onHover && <p>yahoo!</p>}
            </li>

        );
    };

}

export default Location;