import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';


const BASE_URL = 'https://inav-icons-e64a0b92-4062-44d4-8660-a911f2743bd5.s3-us-west-2.amazonaws.com';
const NAME = '/minus.png';
const MINUS_SRC = BASE_URL.concat(NAME);

const Minus = (props) => {
    const [image] = useImage(MINUS_SRC);
    const handleMinusClick = (e) => {
      console.log('zoom out ', e.target);
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            object_id={props.object_id}
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={handleMinusClick}
          image={image} />;
  };


  export default Minus;