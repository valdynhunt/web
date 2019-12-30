import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderSquareRed.js
import SquareRed from '../toolbar/SquareRed';
=======
import SquareRed from './toolbar/SquareRed';
>>>>>>> master:inavig8-admin/src/components/RenderSquareRed.js

function RenderSquareRed(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "red square" &&
            <SquareRed
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
              name={key.name}
              onDragStart={props.handleDragRectStart}
              onDragEnd={props.handleDragRectEnd}
              onMouseMove={props.onMouseMove}
              onMouseOut={props.onMouseOut}
              shadowOffset={{ x: 1, y: 1 }}
              shadowBlur={1} />

        )))
}

export default RenderSquareRed;
