import React from 'react';
import { Rect } from 'react-konva';

const RECT_WIDTH = 14;
const RECT_HEIGHT = 14;
const OBJECT_TYPE_ID = 22;

const SquareGreen = (props) => {
    const handleSquareGreenClick = (e) => {
      console.log('green square clicked');
    }
    return <Rect
            x={props.x}
            y={props.y}
            object_id={props.object_id}
            width={RECT_WIDTH}
            height={RECT_HEIGHT}
            name={props.name}
            fill="green"
            short_name={"green square"}
            object_type_id={OBJECT_TYPE_ID}
            draggable
            onDragStart={props.handleDragStart}
            onDragEnd={props.handleDragEnd}
            onClick={handleSquareGreenClick}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            shadowOffset={{ x: 1, y: 1 }}
            shadowBlur={1} />;
  };


  export default SquareGreen;