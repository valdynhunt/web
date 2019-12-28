import React from 'react';
import { Circle } from 'react-konva';


const CIRC_RADIUS_SM = 3;
const OBJECT_TYPE_ID = 1;


const Path = (props) => {
    const handlePathClick = (e) => {
      console.log('path (blk sm circle) clicked');
    }
    return <Circle 
            x={props.x} 
            y={props.y} 
            radius={CIRC_RADIUS_SM} 
            name={props.name}
            fill="black" 
            short_name={"path"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragCircStart}
            onDragEnd={props.handleDragCircEnd}
            onClick={handlePathClick}
            onMouseMove={props.handleMouseMove}
            onMouseOut={props.handleMouseOut}
            shadowBlur={1} />;
  };


  export default Path;