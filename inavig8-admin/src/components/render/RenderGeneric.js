import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderGeneric.js
import Generic from '../toolbar/Generic'
=======
import Generic from './toolbar/Generic'
>>>>>>> master:inavig8-admin/src/components/RenderGeneric.js


function RenderGeneric(props) {
             
    return (

        props.objects.map((key) => (
          
            key.object_type.short_name === "generic" &&
            <Generic
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
              onMouseMove={props.onMouseMove}
              onMouseOut={props.onMouseOut}
            />
        )))
}

export default RenderGeneric;
