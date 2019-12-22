import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const COFFEE_SRC = '/img/icons/coffee.png'; 

const Coffee = (props) => {
    const [image] = useImage(COFFEE_SRC);
    const handleCoffeeClick = (e) => {
      console.log('coffee clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            // draggable              
            // onDragStart={props.handleDragImageStart}
            // onDragEnd={props.handleDragImageEnd}
            onClick={handleCoffeeClick}
          image={image} />;
  };


  export default Coffee;