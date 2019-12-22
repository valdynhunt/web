import React from 'react';
import Stairs from './Stairs';


function RenderStairs(props) {
                     
    return (
  
      props.objects.map((key) => (
          
          key.object_type.short_name === "stairs" &&
          <Stairs
            key={key}
            x={key.image_x}
            y={key.image_y}
          />
  
      )))
  
  }


export default RenderStairs;
