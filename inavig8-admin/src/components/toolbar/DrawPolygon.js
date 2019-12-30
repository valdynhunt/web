import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const DRAW_POLYGON_SRC = '/img/icons/draw-polygon.png';

const DrawPolygon = (props) => {
    const [image] = useImage(DRAW_POLYGON_SRC);
    const handleDrawPolygonClick = (e) => {
      console.log('draw polygon clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={handleDrawPolygonClick}
          image={image} />;
  };


  export default DrawPolygon;