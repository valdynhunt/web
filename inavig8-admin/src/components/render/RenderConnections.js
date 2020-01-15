import React from 'react';
import { Line } from 'react-konva';


function RenderConnections(props) {
             
  return (
  
    props.connections.map((key) => (
        // from v1 to v2
    //   key.object_type && key.object_type.short_name === "elevator" &&
        <Line
            key={key}
            points={[key.v1.x, key.v1.y, key.v2.x, key.v2.y]}
            tension={0.5}
            stroke="red"
        //   x={key.image_x}
        //   y={key.image_y}
          handleClick={props.handleClick}
        />

    )))


}

export default RenderConnections;