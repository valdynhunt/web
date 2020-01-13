import React from 'react';
import Generic from '../toolbar/Generic'


function RenderGeneric(props) {
             
    return (

        props.objects.map((key) => (
          
            key.object_type && key.object_type.short_name === "generic" &&
            <Generic
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
              object_id={key.object_id}
              onMouseMove={props.onMouseMove}
              onMouseOut={props.onMouseOut}
              handleClick={props.handleClick}
            />
        )))
}

export default RenderGeneric;
