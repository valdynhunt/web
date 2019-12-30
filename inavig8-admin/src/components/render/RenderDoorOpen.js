import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderDoorOpen.js
import DoorOpen from '../toolbar/DoorOpen';
=======
import DoorOpen from './toolbar/DoorOpen';
>>>>>>> master:inavig8-admin/src/components/RenderDoorOpen.js


function RenderDoorOpen(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "door open" &&
        <DoorOpen
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
        />

    )))




}

export default RenderDoorOpen;
