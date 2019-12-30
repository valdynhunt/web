import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderCircleRedSm.js
import CircleRedSm from '../toolbar/CircleRedSm';
=======
import CircleRedSm from './toolbar/CircleRedSm';
>>>>>>> master:inavig8-admin/src/components/RenderCircleRedSm.js


function RenderCircleRedSm(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "red circle sm" &&
        <CircleRedSm
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

export default RenderCircleRedSm;
