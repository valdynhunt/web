import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderCircleGreenSm.js
import CircleGreenSm from '../toolbar/CircleGreenSm';
=======
import CircleGreenSm from './toolbar/CircleGreenSm';
>>>>>>> master:inavig8-admin/src/components/RenderCircleGreenSm.js


function RenderCircleGreenSm(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "green circle sm" &&
        <CircleGreenSm
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

export default RenderCircleGreenSm;
