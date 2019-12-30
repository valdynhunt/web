import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderCoffee.js
import Coffee from '../toolbar/Coffee';
=======
import Coffee from './toolbar/Coffee';
>>>>>>> master:inavig8-admin/src/components/RenderCoffee.js


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
