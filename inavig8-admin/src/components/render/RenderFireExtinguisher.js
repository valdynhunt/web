import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderFireExtinguisher.js
import FireExtinguisher from '../toolbar/FireExtinguisher';
=======
import FireExtinguisher from './toolbar/FireExtinguisher';
>>>>>>> master:inavig8-admin/src/components/RenderFireExtinguisher.js


function RenderFireExtinguisher(props) {
             
  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "fire extinguisher" &&
        <FireExtinguisher
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
        />

    )))      
}

export default RenderFireExtinguisher;
