import React from 'react';
import { Circle } from 'react-konva';


const CIRC_RADIUS = 7;


const CircleGreenLg = (props) => {
    const handleCircleGreenLgClick = (e) => {
      console.log('large green circle clicked');
    }
    return <Circle 
            x={props.x} 
            y={props.y} 
            radius={CIRC_RADIUS} 
            name={props.name}
            fill="green" 
            draggable              
            onDragStart={props.handleDragCircStart}
            onDragEnd={props.handleDragCircEnd}
            onClick={handleCircleGreenLgClick}
            onMouseMove={props.handleMouseMove}
            onMouseOut={props.handleMouseOut}  
            shadowBlur={1} />;
  };


  export default CircleGreenLg;
