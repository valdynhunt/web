import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderStairs.js
import Stairs from '../toolbar/Stairs';
=======
import Stairs from './toolbar/Stairs';
>>>>>>> master:inavig8-admin/src/components/RenderStairs.js


function RenderStairs(props) {
                     
    return (
  
      props.objects.map((key) => (
          
          key.object_type.short_name === "stairs" &&
          <Stairs
            key={key.object_id}
            x={key.image_x}
            y={key.image_y}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
          />
  
      )))
  
  }


export default RenderStairs;
