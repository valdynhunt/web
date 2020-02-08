import React from 'react';
// import './Dashboard.css';
import useImage from 'use-image';
import { Image } from 'react-konva';


function MapBackground(props) {
    const [image] = useImage(props.img);

    return <Image x={props.background_offset} y={0} scaleX={props.stage_scale} scaleY={props.stage_scale}                
            image={image} />;
    };


export default MapBackground;