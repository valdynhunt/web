import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const MINUS_SRC = '/img/icons/minus.png';

const Minus = (props) => {
    const [image] = useImage(MINUS_SRC);
    const handleMinusClick = (e) => {
      console.log('zoom out ', e.target);
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            object_id={props.object_id}
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={handleMinusClick}
          image={image} />;
  };


  export default Minus;