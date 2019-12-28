import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const RESTROOM_SRC = '/img/icons/restroom.png'; 
const OBJECT_TYPE_ID = 10;

const Restroom = (props) => {
    const [image] = useImage(RESTROOM_SRC);
    const handleRestroomClick = (e) => {
      console.log('restroom clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            short_name={"restroom"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleRestroomClick}
          image={image} />;
  };


  export default Restroom;