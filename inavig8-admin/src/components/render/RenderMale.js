import React, { useState } from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderMale.js
import Male from '../Male';
=======
import Male from './toolbar/Male';
>>>>>>> master:inavig8-admin/src/components/RenderMale.js


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

