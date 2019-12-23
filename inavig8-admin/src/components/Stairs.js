import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const STAIRS_SRC = '/img/icons/stairs.png'; 

const Stairs = (props) => {
    const [image] = useImage(STAIRS_SRC);
    const handleStairsClick = (e) => {
      console.log('stairs clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleStairsClick}
          image={image} />;
  };


  export default Stairs;



  {/* <div>Stairs and Elevator Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
