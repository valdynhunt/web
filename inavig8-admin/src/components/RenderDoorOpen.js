import React from 'react';
import DoorOpen from './DoorOpen';


function RenderDoorOpen(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "door open" &&
        <DoorOpen
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
        />

    )))




}

export default RenderDoorOpen;
