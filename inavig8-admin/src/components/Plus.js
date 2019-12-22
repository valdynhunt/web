import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const PLUS_SRC = '/img/icons/plus.png';

const Plus = (props) => {
    const [image] = useImage(PLUS_SRC);
    const handlePlusClick = (e) => {
      console.log('zoom in ', e.target);
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handlePlusClick}
          image={image} />;
  };


  export default Plus;