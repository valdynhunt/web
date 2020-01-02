import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const FEMALE_SRC = '/img/icons/female.png'; 
const OBJECT_TYPE_ID = 12;

const Female = (props) => {
    const [image] = useImage(FEMALE_SRC);
    const handleFemaleClick = (e) => {
      console.log('female clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            object_id={props.object_id}
            scaleX={0.04} 
            scaleY={0.04} 
            short_name={"female"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={handleFemaleClick}
          image={image} />;
  };


  export default Female;