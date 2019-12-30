import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderCircleGreyLg.js
import CircleGreyLg from '../toolbar/CircleGreyLg';
=======
import CircleGreyLg from './toolbar/CircleGreyLg';
>>>>>>> master:inavig8-admin/src/components/RenderCircleGreyLg.js


function RenderCircleGreyLg(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "grey circle lg" &&
        <CircleGreyLg
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

export default RenderCircleGreyLg;
