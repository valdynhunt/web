import React from 'react';
import MapMarker from '../toolbar/MapMarker';


function RenderMapMarker(props) {
             
  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "map marker" &&
        <MapMarker
          key={key.object_id}
          x={key.image_x}
          y={key.image_y}
        />

    )))  
}

export default RenderMapMarker;
