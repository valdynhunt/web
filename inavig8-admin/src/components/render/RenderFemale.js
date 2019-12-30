import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderFemale.js
import Female from '../toolbar/Female';
=======
import Female from './toolbar/Female';
>>>>>>> master:inavig8-admin/src/components/RenderFemale.js


function RenderFemale(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "female" &&
            <Female
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
              onMouseMove={props.onMouseMove}
              onMouseOut={props.onMouseOut}
            />

        )))
}

export default RenderFemale;