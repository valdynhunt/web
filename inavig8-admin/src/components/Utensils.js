import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const UTENSILS_SRC = '/img/icons/utensils.png'; 

const Utensils = (props) => {
    const [image] = useImage(UTENSILS_SRC);
    const handleUtensilsClick = (e) => {
      console.log('utensils clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleUtensilsClick}
          image={image} />;
  };


  export default Utensils;