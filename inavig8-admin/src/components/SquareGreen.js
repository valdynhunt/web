import React from 'react';
import { Rect } from 'react-konva';

const RECT_WIDTH = 14;
const RECT_HEIGHT = 14;

const SquareGreen = (props) => {
    const handleSquareGreenClick = (e) => {
      console.log('green square clicked');
    }
    return <Rect
            x={props.x}
            y={props.y}
            width={RECT_WIDTH}
            height={RECT_HEIGHT}
            name={props.name}
            fill="green"
            draggable
            onDragStart={props.handleDragRectStart}
            onDragEnd={props.handleDragRectEnd}
            onClick={handleSquareGreenClick}
            onMouseMove={props.handleMouseMove}
            onMouseOut={props.handleMouseOut}
            shadowOffset={{ x: 1, y: 1 }}
            shadowBlur={1} />;
  };


  export default SquareGreen;