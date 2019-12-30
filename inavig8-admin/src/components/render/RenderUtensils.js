import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderUtensils.js
import Utensils from '../toolbar/Utensils';
=======
import Utensils from './toolbar/Utensils';
>>>>>>> master:inavig8-admin/src/components/RenderUtensils.js


function RenderUtensils(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "utensils" &&
        <Utensils
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
        />

    )))
}

export default RenderUtensils;