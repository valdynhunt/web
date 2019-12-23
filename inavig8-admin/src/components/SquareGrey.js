import React from 'react';
import { Rect } from 'react-konva';

const RECT_WIDTH = 14;
const RECT_HEIGHT = 14;

const SquareGrey = (props) => {
    const handleSquareGreyClick = (e) => {
      console.log('grey square clicked');
    }
    return <Rect
            x={props.x}
            y={props.y}
            width={RECT_WIDTH}
            height={RECT_HEIGHT}
            name={props.name}
            fill="lightgrey"
            draggable
            onDragStart={props.handleDragRectStart}
            onDragEnd={props.handleDragRectEnd}
            onClick={handleSquareGreyClick}
            onMouseMove={props.handleMouseMove}
            onMouseOut={props.handleMouseOut}
            shadowOffset={{ x: 1, y: 1 }}
            shadowBlur={1} />;
  };


  export default SquareGrey;



