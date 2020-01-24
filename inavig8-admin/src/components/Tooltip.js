import React from 'react';
import { Label, Text } from 'react-konva';


const Tooltip = (props) => {
    // const handleRedoClick = (e) => {
    //   console.log('rotate cw');
    // }
    return <Label
                x={180} 
                y={180} 
                // onMouseMove={props.onMouseMove}
                // onMouseOut={props.onMouseOut}
            >
                <Text  
                    // text={"Hello World!"}
                    fontFamily={"Calibri"}
                    fontSize={14}
                    lineHeight={1.2}
                    padding={10}
                    textFill={"white"}
                    alpha={0.75}
                    fill={"green"}
                    visible={true}
                />
        </ Label>

            // x={props.x} 
            // y={props.y} 

            // scaleX={0.04} 
            // scaleY={0.04} 

  };


  export default Tooltip;