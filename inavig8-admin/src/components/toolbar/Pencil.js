import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';


const BASE_URL = 'https://inav-icons-e64a0b92-4062-44d4-8660-a911f2743bd5.s3-us-west-2.amazonaws.com';
const NAME = '/pencil-alt.png';
const PENCIL_ALT_SRC = BASE_URL.concat(NAME);

const Pencil = (props) => {
    const [image] = useImage(PENCIL_ALT_SRC);
    const handlePencilClick = (e) => {
      console.log('pencil clicked');
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
            onClick={handlePencilClick}
          image={image} />;
  };


  export default Pencil;