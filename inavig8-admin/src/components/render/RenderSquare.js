import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderSquare.js
import Square from '../Generic';
=======
import Square from './toolbar/Generic';
>>>>>>> master:inavig8-admin/src/components/RenderSquare.js


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
