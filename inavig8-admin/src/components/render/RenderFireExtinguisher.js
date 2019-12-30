import React from 'react';
import FireExtinguisher from '../toolbar/FireExtinguisher';


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
