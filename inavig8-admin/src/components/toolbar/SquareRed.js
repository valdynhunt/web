import React from 'react';
import { Rect } from 'react-konva';

const RECT_WIDTH = 14;
const RECT_HEIGHT = 14;
const OBJECT_TYPE_ID = 20;

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
            short_name={"red square"}
            object_type_id={OBJECT_TYPE_ID}
            draggable
            onDragStart={props.handleDragStart}
            onDragEnd={props.handleDragEnd}
            onClick={handleSquareRedClick}
            onMouseMove={props.onMouseMove}
            onMouseOut={props.onMouseOut}
            shadowOffset={{ x: 1, y: 1 }}
            shadowBlur={1} />;
  };


  export default SquareRed;



