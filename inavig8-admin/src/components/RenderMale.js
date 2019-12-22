import React from 'react';
import Male from './Male';


function RenderMale(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "male" &&
            <Male
              key={key}
              x={key.image_x}
              y={key.image_y}
            />

        )))
}

export default RenderMale;

