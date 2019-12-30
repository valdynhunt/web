import React from 'react';
import Utensils from './toolbar/Utensils';


function RenderUtensils(props) {
             
  return (

    props.objects.map((key) => (
        
        key.object_type.short_name === "utensils" &&
        <Utensils
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
        />

    )))
}

export default RenderUtensils;