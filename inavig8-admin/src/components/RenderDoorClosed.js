import React from 'react';
import DoorClosed from './DoorClosed';


function RenderDoorClosed(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "door closed" &&
        <DoorClosed
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
        />

    )))




}

export default RenderDoorClosed;
