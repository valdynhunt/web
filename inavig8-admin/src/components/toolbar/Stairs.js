import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const STAIRS_SRC = '/img/icons/stairs.png'; 
const OBJECT_TYPE_ID = 7;

const Stairs = (props) => {
    const [image] = useImage(STAIRS_SRC);
    const handleStairsClick = (e) => {
      console.log('stairs clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            short_name={"stairs"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleStairsClick}
          image={image} />;
  };


  export default Stairs;
