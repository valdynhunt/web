import React from 'react';
import CircleGreenLg from '../toolbar/CircleGreenLg';

function RenderCircleGreenLg(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "green circle lg" &&
            <CircleGreenLg
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
              name={key.name}
              onDragStart={props.handleDragCircStart}
              onDragEnd={props.handleDragCircEnd}
              onMouseMove={props.onMouseMove}
              onMouseOut={props.onMouseOut}
              shadowBlur={1}
            />

        )))
}

export default RenderCircleGreenLg;
