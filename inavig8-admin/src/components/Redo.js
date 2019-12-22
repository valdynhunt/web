import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const REDO_SRC = '/img/icons/redo-alt.png';

const Redo = (props) => {
    const [image] = useImage(REDO_SRC);
    const handleRedoClick = (e) => {
      console.log('redo clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleRedoClick}
          image={image} />;
  };


  export default Redo;