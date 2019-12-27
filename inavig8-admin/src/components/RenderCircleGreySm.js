import React from 'react';
import CircleGreySm from './CircleGreySm';


function RenderCircleGreySm(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "grey circle sm" &&
        <CircleGreySm
          key={key.object_id}
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

export default RenderCircleGreySm;
