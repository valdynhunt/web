import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderRecycle.js
import Recycle from '../toolbar/Recycle';
=======
import Recycle from './toolbar/Recycle';
>>>>>>> master:inavig8-admin/src/components/RenderRecycle.js


function RenderRecycle(props) {

  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "recycle" &&
        <Recycle
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
        />

    )))      

}

export default RenderRecycle;