import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';


const DOOR_OPEN_SRC = '/img/icons/door-open.png';

const DoorOpen = (props) => {
    const [image] = useImage(MALE_SRC);
    const handleDoorOpenClick = (e) => {
      console.log('door open clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            // draggable              
            // onDragStart={props.handleDragImageStart}
            // onDragEnd={props.handleDragImageEnd}
            onClick={handleDoorOpenClick}
          image={image} />;
  };


  export default DoorOpen;