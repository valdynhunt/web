import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderCircleRedLg.js
import CircleRedLg from '../toolbar/CircleRedLg';
=======
import CircleRedLg from './toolbar/CircleRedLg';
>>>>>>> master:inavig8-admin/src/components/RenderCircleRedLg.js


function RenderCircleRedLg(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "red circle lg" &&
        <CircleRedLg
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

export default RenderCircleRedLg;
