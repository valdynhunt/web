import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderRestroom.js
import Restroom from '../toolbar/Restroom';
=======
import Restroom from './toolbar/Restroom';
>>>>>>> master:inavig8-admin/src/components/RenderRestroom.js


function RenderRestroom(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "restroom" &&
            <Restroom
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
              onMouseMove={props.onMouseMove}
              onMouseOut={props.onMouseOut}
            />

        )))
}

export default RenderRestroom;