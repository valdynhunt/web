import React from 'react';
import Path from '../toolbar/Path'


function RenderPath(props) {
  
    return (

        props.objects.map((key) => (
            
          key.object_type && key.object_type.short_name === "path" &&
            <Path
              key={key.object_id}
              object_id={key.object_id}
              x={key.image_x}
              y={key.image_y}
              name={key.name}
              onDragStart={props.handleDragCircStart}
              onDragEnd={props.handleDragCircEnd}
              onMouseMove={props.onMouseMove}
              onMouseOut={props.onMouseOut}
              shadowBlur={1}
              handleClick={props.handleClick}
            />
        )))
}

export default RenderPath;
