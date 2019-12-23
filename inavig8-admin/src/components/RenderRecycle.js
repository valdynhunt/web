import React from 'react';
import Recycle from './Recycle';


function RenderRecycle(props) {

  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "recycle" && key.active &&
        <Recycle
          key={key}
          x={key.image_x}
          y={key.image_y}
        />

    )))      

}

export default RenderRecycle;