import React from 'react';
import CircleGreenLg from './CircleGreenLg';

function RenderCircleGreenLg(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "green circle lg" && key.active &&
            <CircleGreenLg
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

export default RenderCircleGreenLg;
