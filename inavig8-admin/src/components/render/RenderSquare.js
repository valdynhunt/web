import React from 'react';
import Square from '../Generic';


function RenderSquare(props) {
             
  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "square" &&
        <Square
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
        />

    )))   
}

export default RenderSquare;
