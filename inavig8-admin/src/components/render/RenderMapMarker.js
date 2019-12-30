import React from 'react';
<<<<<<< HEAD:inavig8-admin/src/components/render/RenderMapMarker.js
import MapMarker from '../toolbar/MapMarker';
=======
import MapMarker from './toolbar/MapMarker';
>>>>>>> master:inavig8-admin/src/components/RenderMapMarker.js


function RenderMapMarker(props) {
             
  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "map marker" &&
        <MapMarker
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
          onMouseMove={props.onMouseMove}
          onMouseOut={props.onMouseOut}
        />

    )))  
}

export default RenderMapMarker;
