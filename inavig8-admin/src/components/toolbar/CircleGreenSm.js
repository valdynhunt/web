import React from 'react';
import { Circle } from 'react-konva';


const CIRC_RADIUS_SM = 3;
const OBJECT_TYPE_ID = 23;

const CircleGreenSm = (props) => {

    return <Circle 
            x={props.x} 
            y={props.y} 
            object_id={props.object_id}
            radius={CIRC_RADIUS_SM} 
            name={props.name}
            fill="green" 
            short_name={"green circle sm"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragStart}
            onDragEnd={props.handleDragEnd}
            onClick={props.handleClick}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            shadowBlur={1} />;
  };


  export default CircleGreenSm;
