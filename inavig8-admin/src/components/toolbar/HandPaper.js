import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const HAND_PAPER_SRC = '/img/icons/hand-paper.png';

const HandPaper = (props) => {
    const [image] = useImage(HAND_PAPER_SRC);
    const handleHandPaperClick = (e) => {
      console.log('pan mode clicked', e.target);
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleHandPaperClick}
          image={image} />;
  };


  export default HandPaper;