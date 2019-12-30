import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const PENCIL_ALT_SRC = '/img/icons/pencil-alt.png';

const Pencil = (props) => {
    const [image] = useImage(PENCIL_ALT_SRC);
    const handlePencilClick = (e) => {
      console.log('pencil clicked');
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
            onClick={handlePencilClick}
          image={image} />;
  };


  export default Pencil;