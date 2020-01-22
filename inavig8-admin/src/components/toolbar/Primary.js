import React from 'react';
import { Circle } from 'react-konva';


const CIRC_RADIUS_SM = 3;
const OBJECT_TYPE_ID = 4;


const Primary = (props) => {

    return <Circle 
            x={props.x} 
            y={props.y} 
            radius={CIRC_RADIUS_SM} 
            object_id={props.object_id}
            name={props.name}
            fill="white" 
            stroke="black"
            short_name={"location_primary"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={props.handleClick}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            shadowBlur={1} />;
  };


  export default Primary;