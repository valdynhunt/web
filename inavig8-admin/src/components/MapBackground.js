import React from 'react';
// import './Dashboard.css';
import useImage from 'use-image';
import { Image } from 'react-konva';

import config from '../config.json';

function Background(obj) {
    const [image] = useImage(obj.img);
    return <Image x={150} y={0} scaleX={0.9} scaleY={0.9}                
            image={image} />;
    };


class MapBackground extends React.Component {
    constructor() {
        super()
        this.state = {
            location: []
        }
      }


    componentDidMount() {

        let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
            JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

        let headers = config.api.headers;
        
        const url = config.api.invokeUrl + '/location/' + this.props.location_id;

        fetch(url, 
        {
            method: "GET",
            headers,
        }) // david
            .then(response => {
                return response.json();
            }).then(result => {

                this.setState(
                    {
                        location: result.body.data
                    }
                );
                // console.log("foo2", this.state.location[0].canvas_image);

            });
            

    }

    render() {

        if (this.state.location.length >= 1) {
            let background_image = this.state.location[0].canvas_image;

            return (

                <Background img={ background_image }/>
            
            )
        } else {
            return null
        }
    }
}

export default MapBackground;