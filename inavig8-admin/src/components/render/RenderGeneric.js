import React from 'react';
import Generic from '../Generic'


function RenderGeneric(props) {
             
    return (

        props.objects.map((key) => (
          
            key.object_type.short_name === "generic" &&
            <Generic
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
            />
        )))
}

export default RenderGeneric;
