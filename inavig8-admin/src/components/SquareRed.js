import React from 'react';
import { Rect } from 'react-konva';

const RECT_WIDTH = 14;
const RECT_HEIGHT = 14;

const SquareRed = (props) => {
    const handleSquareRedClick = (e) => {
      console.log('red square clicked');
    }
    return <Rect
            x={props.x}
            y={props.y}
            width={RECT_WIDTH}
            height={RECT_HEIGHT}
            name={props.name}
            fill="red"
            draggable
            onDragStart={props.handleDragRectStart}
            onDragEnd={props.handleDragRectEnd}
            onClick={handleSquareRedClick}
            onMouseMove={props.handleMouseMove}
            onMouseOut={props.handleMouseOut}
            shadowOffset={{ x: 1, y: 1 }}
            shadowBlur={1} />;
  };


  export default SquareRed;



