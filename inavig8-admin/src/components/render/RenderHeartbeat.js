import React from 'react';
import Heartbeat from '../toolbar/Heartbeat';


function RenderHeartbeat(props) {

  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "heartbeat" &&
        <Heartbeat
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
        />

    )))      

}

export default RenderHeartbeat;
