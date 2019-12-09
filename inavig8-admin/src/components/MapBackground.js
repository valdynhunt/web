import React from 'react';
import './Dashboard.css';
import useImage from 'use-image';
import { Image } from 'react-konva';

const LionImage = () => {
    const [image] = useImage('https://konvajs.org/assets/lion.png');
    return <Image x={10} y={90} scaleX={0.4} scaleY={0.4}                
          image={image} />;
  };

const FooBackground = () => {
const [image] = useImage('./EWU-CEB.png');
return <Image x={150} y={0} scaleX={0.9} scaleY={0.9}                
        image={image} />;
};


class MapBackground extends React.Component {

    state = {
        // location: {canvas_image: "https://konvajs.org/assets/lion.png"},
    }

    // let [image] = useImage(this.location.image); 

    componentDidMount() {

        let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
            JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

        let headers = {
            'Content-Type': 'application/json',
            'x-api-key': 'Il5Hx547OB3VWglNlnYM35XJL4sv1ok57bJakZav',
            'Authorization': accessToken
        };

        //fetch('https://7g8edlnlmd.execute-api.us-east-2.amazonaws.com/dev/locations')   // naji
        fetch('https://t1o352i3j3.execute-api.us-west-2.amazonaws.com/dev/location/1', 
        {
            method: "GET",
            headers,
        }) // david
            .then(response => {
                return response.json();
            }).then(result => {
                console.log("foo", result);
                this.setState(
                    {
                        location: result.body.data
                    }
                );
                console.log("foo", this.state.location[0].canvas_image);
            });

    }

    render() {
        
        return (
            // <div>

            //   
            <FooBackground />
                

                // <Image x={10} y={90} scaleX={0.7} scaleY={0.7}                
                // image={this.state.location.canvas_image} />
                /* <Image x={150} y={0} scaleX={0.9} scaleY={0.9} image={useImage(this.location.image)} />; */
            // </div>
            // <LionImage />

        )

    }

}

export default MapBackground;