import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const MAP_MARKER_SRC = '/img/icons/map-marker.png';
const OBJECT_TYPE_ID = 16;

const MapMarker = (props) => {
    const [image] = useImage(MAP_MARKER_SRC);
    const handleMapMarkerClick = (e) => {
      console.log('map marker clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y}
            object_id={props.object_id} 
            scaleX={0.04} 
            scaleY={0.04} 
            short_name={"map marker"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={handleMapMarkerClick}
          image={image} />;
  };


  export default MapMarker;