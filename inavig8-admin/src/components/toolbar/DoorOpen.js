import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';


const DOOR_OPEN_SRC = '/img/icons/door-open.png';
const OBJECT_TYPE_ID = 18;

const DoorOpen = (props) => {
    const [image] = useImage(DOOR_OPEN_SRC);
    const handleDoorOpenClick = (e) => {
      console.log('door open clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            short_name={"door open"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleDoorOpenClick}
          image={image} />;
  };


  export default DoorOpen;