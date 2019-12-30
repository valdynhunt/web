import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderHeartbeat.js
import Heartbeat from '../toolbar/Heartbeat';
=======
import Heartbeat from './toolbar/Heartbeat';
>>>>>>> master:inavig8-admin/src/components/RenderHeartbeat.js


function RenderHeartbeat(props) {

  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "heartbeat" &&
        <Heartbeat
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
        />

    )))      

}

export default RenderHeartbeat;
