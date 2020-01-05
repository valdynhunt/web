import React from 'react';
import './LocationList.css';

class Location extends React.Component {

    onMouseHover = () => {
        // console.log("this.props: ", this.props.id);
        this.props.handleHover(this.props.id);
    }

    onClick = (location_id) => {
        let url = "design/" + location_id;
        //window.location.assign(url);
    }

    render() {

        const { location_id, long_name } = this.props.details;
        
        return (
            <a href={`/design/${location_id}`}>
                <li
                    className=""
                    onMouseOver={this.onMouseHover}
                    // onClick={this.onClick(location_id)}
                >              
                        {long_name}
                </li>
            </a>
        );
    };

}

export default Location;