import React from 'react';
import CircleGreenSm from './CircleGreenSm';


function RenderCircleGreenSm(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "green circle sm" && key.active &&
        <CircleGreenSm
          key={key}
          x={key.image_x}
          y={key.image_y}
          name={key.name}
          onDragStart={props.handleDragCircStart}
          onDragEnd={props.handleDragCircEnd}
          onMouseMove={props.handleMouseMove}
          onMouseOut={props.handleMouseOut}
          shadowBlur={1}
        />

    )))
}

export default RenderCircleGreenSm;
