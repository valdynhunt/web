import React from 'react';
import MapMarker from './MapMarker';


function RenderMapMarker(props) {
             
  return (
  
    props.objects.map((key) => (
        
        key.object_type.short_name === "map marker" && key.active &&
        <MapMarker
          key={key}
          x={key.image_x}
          y={key.image_y}
        />

    )))  
}

export default RenderMapMarker;
