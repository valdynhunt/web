import React from 'react';
import Coffee from './Coffee';


function RenderCoffee(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "coffee" &&
        <Coffee
          key={key}
          x={key.image_x}
          y={key.image_y}
        />

    )))
}

export default RenderCoffee;
