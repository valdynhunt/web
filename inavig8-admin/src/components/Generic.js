import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const SQUARE_SRC = '/img/icons/square.png'; 
const OBJECT_TYPE_ID = 3;

const Generic = (props) => {
    const [image] = useImage(SQUARE_SRC);
    const handleGenericClick = (e) => {
      console.log('generic (blk square) clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            short_name={"generic"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleGenericClick}
          image={image} />;
  };


  export default Generic;