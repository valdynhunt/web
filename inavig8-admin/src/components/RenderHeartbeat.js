import React from 'react';
import Heartbeat from './Heartbeat';


function RenderHeartbeat(props) {

  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "heartbeat" && key.active &&
        <Heartbeat
          key={key}
          x={key.image_x}
          y={key.image_y}
        />

    )))      

}

export default RenderHeartbeat;
