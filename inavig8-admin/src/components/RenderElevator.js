import React from 'react';
import Elevator from './Elevator';


function RenderElevator(props) {
             
  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "elevator" &&
        <Elevator
          key={key}
          x={key.image_x}
          y={key.image_y}
        />

    )))


}

export default RenderElevator;
