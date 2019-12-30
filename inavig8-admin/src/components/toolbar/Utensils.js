import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const UTENSILS_SRC = '/img/icons/utensils.png'; 
const OBJECT_TYPE_ID = 9;

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
            short_name={"utensils"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={handleUtensilsClick}
          image={image} />;
  };


  export default Utensils;