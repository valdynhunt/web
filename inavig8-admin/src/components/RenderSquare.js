import React from 'react';
import Square from './Square';


function RenderSquare(props) {
             
  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "square" && key.active &&
        <Square
          key={key}
          x={key.image_x}
          y={key.image_y}
        />

    )))   
}

export default RenderSquare;
