import React from 'react';
import Male from './Male';


function RenderMale(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "male" && key.active &&
            <Male
              key={key}
              x={key.image_x}
              y={key.image_y}
            />

        )))
}

export default RenderMale;

