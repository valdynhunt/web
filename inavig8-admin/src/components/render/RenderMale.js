import React, { useState } from 'react';
import Male from '../Male';


function RenderMale(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "male" &&

              <Male
                key={key.object_id}
                x={key.image_x}
                y={key.image_y}
                onMouseMove={props.onMouseMove}
                onMouseOut={props.onMouseOut}
              />

        )))
}

export default RenderMale;

