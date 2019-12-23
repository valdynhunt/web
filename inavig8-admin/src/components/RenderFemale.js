import React from 'react';
import Female from './Female';


function RenderFemale(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "female" && key.active &&
            <Female
              key={key}
              x={key.image_x}
              y={key.image_y}
            />

        )))
}

export default RenderFemale;