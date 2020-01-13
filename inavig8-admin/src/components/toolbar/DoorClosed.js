import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';


const BASE_URL = 'https://inav-icons-e64a0b92-4062-44d4-8660-a911f2743bd5.s3-us-west-2.amazonaws.com';
const NAME = '/door-closed.png';
const DOOR_CLOSED_SRC = BASE_URL.concat(NAME);
const OBJECT_TYPE_ID = 19;

const DoorClosed = (props) => {
    const [image] = useImage(DOOR_CLOSED_SRC);

    return <Image 
            x={props.x} 
            y={props.y} 
            object_id={props.object_id}
            scaleX={0.04} 
            scaleY={0.04} 
            short_name={"door closed"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={props.handleClick}
          image={image} />;
  };


  export default DoorClosed;