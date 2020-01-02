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
            object_id={props.object_id}
            scaleX={0.02} 
            scaleY={0.02} 
            short_name={"generic"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={handleGenericClick}
          image={image} />;
  };


  export default Generic;