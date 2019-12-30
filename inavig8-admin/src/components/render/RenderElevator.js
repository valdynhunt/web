import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderElevator.js
import Elevator from '../toolbar/Elevator';
=======
import Elevator from './toolbar/Elevator';
>>>>>>> master:inavig8-admin/src/components/RenderElevator.js


function RenderElevator(props) {
             
  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "elevator" &&
        <Elevator
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
        />

    )))


}

export default RenderElevator;
