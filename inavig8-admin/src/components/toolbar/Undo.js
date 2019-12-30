import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const UNDO_SRC = '/img/icons/undo-alt.png';

const Undo = (props) => {
    const [image] = useImage(UNDO_SRC);
    const handleUndoClick = (e) => {
      console.log('rotate ccw');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={handleUndoClick}
          image={image} />;
  };


  export default Undo;