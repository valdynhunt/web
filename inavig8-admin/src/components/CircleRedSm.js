import React from 'react';
import { Circle } from 'react-konva';


const CIRC_RADIUS_SM = 3;


const CircleRedSm = (props) => {
    const handleCircleRedSmClick = (e) => {
      console.log('small red circle clicked');
    }
    return <Circle 
            x={props.x} 
            y={props.y} 
            radius={CIRC_RADIUS_SM} 
            name={props.name}
            fill="red" 
            draggable              
            onDragStart={props.handleDragCircStart}
            onDragEnd={props.handleDragCircEnd}
            onClick={handleCircleRedSmClick}
            onMouseMove={props.handleMouseMove}
            onMouseOut={props.handleMouseOut}
            shadowBlur={1} />;
  };


  export default CircleRedSm;
