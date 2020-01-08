import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';


const DOOR_OPEN_SRC = '/img/icons/door-open.png';
const OBJECT_TYPE_ID = 18;

const DoorOpen = (props) => {
    const [image] = useImage(DOOR_OPEN_SRC);

    return <Image 
            x={props.x} 
            y={props.y} 
            object_id={props.object_id}
            scaleX={0.04} 
            scaleY={0.04} 
            short_name={"door open"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={props.handleClick}
          image={image} />;
  };


  export default DoorOpen;