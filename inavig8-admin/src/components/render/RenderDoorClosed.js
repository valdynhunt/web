import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderDoorClosed.js
import DoorClosed from '../toolbar/DoorClosed';
=======
import DoorClosed from './toolbar/DoorClosed';
>>>>>>> master:inavig8-admin/src/components/RenderDoorClosed.js


function RenderDoorClosed(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "door closed" &&
        <DoorClosed
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
        />

    )))




}

export default RenderDoorClosed;
