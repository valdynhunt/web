import React from 'react';
import Coffee from '../toolbar/Coffee';


function RenderCoffee(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "coffee" &&
        <Coffee
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
        />

    )))
}

export default RenderCoffee;
