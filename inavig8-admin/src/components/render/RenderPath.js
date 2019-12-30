import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderPath.js
import Path from '../toolbar/Path'
=======
import Path from './toolbar/Path'
>>>>>>> master:inavig8-admin/src/components/RenderPath.js


function RenderPath(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "path" &&
            <Path
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
              name={key.name}
              onDragStart={props.handleDragCircStart}
              onDragEnd={props.handleDragCircEnd}
              onMouseMove={props.onMouseMove}
              onMouseOut={props.onMouseOut}
              shadowBlur={1}
            />
        )))
}

export default RenderPath;
