import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderSquareGreen.js
import SquareGreen from '../toolbar/SquareGreen';
=======
import SquareGreen from './toolbar/SquareGreen';
>>>>>>> master:inavig8-admin/src/components/RenderSquareGreen.js

function RenderSquareGreen(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "green square" &&
            <SquareGreen
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

export default RenderSquareGreen;

