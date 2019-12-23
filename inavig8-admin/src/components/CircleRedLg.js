import React from 'react';
import { Circle } from 'react-konva';


const CIRC_RADIUS = 7;


const CircleRedLg = (props) => {
    const handleCircleRedLgClick = (e) => {
      console.log('large red circle clicked');
    }
    return <Circle 
            x={props.x} 
            y={props.y} 
            radius={CIRC_RADIUS} 
            name={props.name}
            fill="red" 
            draggable              
            onDragStart={props.handleDragCircStart}
            onDragEnd={props.handleDragCircEnd}
            onClick={handleCircleRedLgClick}
            onMouseMove={props.handleMouseMove}
            onMouseOut={props.handleMouseOut}
            shadowBlur={1} />;
  };


  export default CircleRedLg;
