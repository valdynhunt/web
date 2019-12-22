import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const FIRE_EXTINGUISHER_SRC = '/img/icons/fire-extinguisher.png';


const FireExtinguisher = (props) => {
    const [image] = useImage(FIRE_EXTINGUISHER_SRC);
    const handleFireExtnguisherClick = (e) => {
      console.log('fire extinguisher clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            // draggable              
            // onDragStart={props.handleDragImageStart}
            // onDragEnd={props.handleDragImageEnd}
            onClick={handleFireExtinguisherClick}
          image={image} />;
  };


  export default FireExtinguisher;