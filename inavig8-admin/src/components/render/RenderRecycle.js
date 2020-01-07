import React from 'react';
import Recycle from '../toolbar/Recycle';


function RenderRecycle(props) {

  return (
  
    props.objects.map((key) => (
        
      key.object_type && key.object_type.short_name === "recycle" &&
        <Recycle
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          object_id={key.object_id}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
        />

    )))      

}

export default RenderRecycle;