import React from 'react';
import { Circle } from 'react-konva';


const CIRC_RADIUS_SM = 3;
const OBJECT_TYPE_ID = 26;


const CircleGreySm = (props) => {
    const handleCircleGreySmClick = (e) => {
      console.log('small grey circle clicked');
    }
    return <Circle 
            x={props.x} 
            y={props.y} 
            radius={CIRC_RADIUS_SM} 
            name={props.name}
            fill="lightgrey" 
            short_name={"grey circle sm"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragStart}
            onDragEnd={props.handleDragEnd}
            onClick={handleCircleGreySmClick}
            onMouseMove={props.handleMouseMove}
            onMouseOut={props.handleMouseOut}
            shadowBlur={1} />;
  };


  export default CircleGreySm;
