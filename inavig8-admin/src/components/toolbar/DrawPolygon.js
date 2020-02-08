import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';


const BASE_URL = 'https://inav-icons-e64a0b92-4062-44d4-8660-a911f2743bd5.s3-us-west-2.amazonaws.com';
const NAME = '/draw-polygon.png';
const DRAW_POLYGON_SRC = BASE_URL.concat(NAME);

const DrawPolygon = (props) => {
    const [image] = useImage(DRAW_POLYGON_SRC);
    const handleDrawPolygonClick = (e) => {
      console.log('draw polygon clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            object_id={props.object_id}
            scaleX={0.04} 
            scaleY={0.04}            
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={handleDrawPolygonClick}
            image={image} 
          />;
  };


  export default DrawPolygon;