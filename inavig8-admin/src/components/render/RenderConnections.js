import React from 'react';
import { Line } from 'react-konva';


function RenderConnections(props) {
    // this.props.getPrimarySecondary();   
  return (
  
    props.connections.map((connection) => (
        // from v1 to v2
        // need to convert relative to image_x and image_y!!!
        <Line
            key={connection.v1.x + "." + connection.v1.y + "." + connection.v2.x + "." + connection.v2.y}
            points={[connection.v1.x, connection.v1.y, connection.v2.x, connection.v2.y]}
            tension={0.5}
            stroke="red"
            x={4}
            y={4}
            alpha={0.75}
        />

    )))


}

export default RenderConnections;