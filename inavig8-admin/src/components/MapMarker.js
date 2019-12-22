import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const MAP_MARKER_SRC = '/img/icons/map-marker.png';


const MapMarker = (props) => {
    const [image] = useImage(MAP_MARKER_SRC);
    const handleMapMarkerClick = (e) => {
      console.log('map marker clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleMapMarkerClick}
          image={image} />;
  };


  export default MapMarker;