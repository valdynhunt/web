import React from 'react';
import DoorClosed from '../toolbar/DoorClosed';


function RenderDoorClosed(props) {
             
  return (

    props.objects.map((key) => (
        
      key.object_type && key.object_type.short_name === "door closed" &&
        <DoorClosed
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          object_id={key.object_id}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
          handleClick={props.handleClick}
        />

    )))




}

export default RenderDoorClosed;
