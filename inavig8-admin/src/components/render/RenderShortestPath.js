import React from 'react';
import { Line } from 'react-konva';


function RenderShortestPath(props) {
    // this.props.getPrimarySecondary();   
  return (
  
    props.shortest_path.map((key) => (
        // from v1 to v2
        // need to convert relative to image_x and image_y!!!
        <Line
            key={key}
            points={[key.v1.x, key.v1.y, key.v2.x, key.v2.y]}
            tension={0.5}
            stroke="blue"
            x={4}
            y={4}
            alpha={0.75}
        />

    )))


}

export default RenderShortestPath;