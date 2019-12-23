import React from 'react';
import FireExtinguisher from './FireExtinguisher';


function RenderFireExtinguisher(props) {
             
  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "fire extinguisher" && key.active &&
        <FireExtinguisher
          key={key}
          x={key.image_x}
          y={key.image_y}
        />

    )))      
}

export default RenderFireExtinguisher;
