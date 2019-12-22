import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const RECYCLE_SRC = '/img/icons/recycle.png'; 

const Recycle = (props) => {
    const [image] = useImage(RECYCLE_SRC);
    const handleRecycleClick = (e) => {
      console.log('recycle clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            // draggable              
            // onDragStart={props.handleDragImageStart}
            // onDragEnd={props.handleDragImageEnd}
            onClick={handleRecycleClick}
          image={image} />;
  };


  export default Recycle;