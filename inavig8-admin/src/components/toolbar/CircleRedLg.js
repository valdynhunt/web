import React from 'react';
import { Circle } from 'react-konva';


const CIRC_RADIUS = 7;
const OBJECT_TYPE_ID = 28;

const CircleRedLg = (props) => {

    return <Circle 
            x={props.x} 
            y={props.y} 
            object_id={props.object_id}
            radius={CIRC_RADIUS} 
            name={props.name}
            fill="red" 
            short_name={"red circle lg"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragStart}
            onDragEnd={props.handleDragEnd}
            onClick={props.handleClick}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            shadowBlur={1} />;
  };


  export default CircleRedLg;
