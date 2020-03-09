import React from 'react';
import { Line } from 'react-konva';


function RenderShortestPath(props) {
    // this.props.getPrimarySecondary(); 
    if (props.shortest_path.length > 0) {
        console.log("rendering shortest path...", props); 
        return (
          
          props.shortest_path.map((connection) => (
              // from v1 to v2
              // need to convert relative to image_x and image_y!!!
              <Line
                  key={connection.v1.x + "." + connection.v1.y + "." + connection.v2.x + "." + connection.v2.y}
                  points={[connection.v1.x, connection.v1.y, connection.v2.x, connection.v2.y]}
                  tension={0.5}
                  stroke="blue"
                  x={4}
                  y={4}
                  alpha={0.75}
              />
      
          )))
    } else {
        return null;
    }



}

export default RenderShortestPath;