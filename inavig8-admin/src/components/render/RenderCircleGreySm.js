import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderCircleGreySm.js
import CircleGreySm from '../toolbar/CircleGreySm';
=======
import CircleGreySm from './toolbar/CircleGreySm';
>>>>>>> master:inavig8-admin/src/components/RenderCircleGreySm.js


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
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
          shadowBlur={1}
        />

    )))
}

export default RenderCircleGreySm;
