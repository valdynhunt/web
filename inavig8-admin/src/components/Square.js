import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const SQUARE_SRC = '/img/icons/square.png'; 

const Square = (props) => {
    const [image] = useImage(SQUARE_SRC);
    const handleSquareClick = (e) => {
      console.log('square clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleSquareClick}
          image={image} />;
  };


  export default Square;