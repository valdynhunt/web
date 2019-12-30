import React from 'react';
import Square from '../toolbar/Generic';


function RenderSquare(props) {
             
  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "square" &&
        <Square
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
        />

    )))   
}

export default RenderSquare;
