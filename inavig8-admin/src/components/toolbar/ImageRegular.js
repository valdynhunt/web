import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const IMAGE_REGULAR_SRC = '/img/icons/image-regular.png'; 
const OBJECT_TYPE_ID = 10;

const ImageRegular = (props) => {
    const [image] = useImage(IMAGE_REGULAR_SRC);
    const handleImageRegularClick = (e) => {
      console.log('image regular clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            short_name={"image regular"}
            object_type_id={OBJECT_TYPE_ID}
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            onClick={handleImageRegularClick}
          image={image} />;
  };


  export default ImageRegular;