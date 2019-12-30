import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderSquareGrey.js
import SquareGrey from '../toolbar/SquareGrey';
=======
import SquareGrey from './toolbar/SquareGrey';
>>>>>>> master:inavig8-admin/src/components/RenderSquareGrey.js

function RenderSquareGrey(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "grey square" &&
            <SquareGrey
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

export default RenderSquareGrey;
