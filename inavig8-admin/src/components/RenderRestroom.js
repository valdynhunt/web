import React from 'react';
import Restroom from './Restroom';


function RenderRestroom(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "restroom" &&
            <Restroom
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
            />

        )))
}

export default RenderRestroom;