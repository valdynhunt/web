import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const RESTROOM_SRC = '/img/icons/restroom.png'; 

const Restroom = (props) => {
    const [image] = useImage(RESTROOM_SRC);
    const handleFemaleClick = (e) => {
      console.log('male clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            // draggable              
            // onDragStart={props.handleDragImageStart}
            // onDragEnd={props.handleDragImageEnd}
            onClick={handleRestroomClick}
          image={image} />;
  };


  export default Restroom;