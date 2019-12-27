import React from 'react';
// import './Dashboard.css';
import useImage from 'use-image';
import { Image } from 'react-konva';


function MapBackground(props) {
    const [image] = useImage(props.img);
    // return <Image x={150} y={0} scaleX={0.9} scaleY={0.9}                

    return <Image x={props.background_offset} y={0} scaleX={0.9} scaleY={0.9}                
            image={image} />;
    };


export default MapBackground;