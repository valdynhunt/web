import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const MALE_SRC = '/img/icons/male.png'; 

const Male = (props) => {
    const [image] = useImage(MALE_SRC);
    const handleMaleClick = (e) => {
      console.log('male clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleMaleClick}
          image={image} />;
  };


  export default Male;