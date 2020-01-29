import React from 'react';
import { Label, Text } from 'react-konva';


class Tooltip extends React.Component {
    render() {
        return (
            <Label
                x={180} 
                y={180} 
                // onMouseMove={props.onMouseMove}
                // onMouseOut={props.onMouseOut}
            >
            <Text  
                text={this.props.object_id + " " + this.props.short_name}
                fontFamily={"Calibri"}
                fontSize={14}
                lineHeight={1.2}
                padding={10}
                textFill={"white"}
                alpha={0.75}
                fill={"green"}
                visible={this.props.visible}
                x={this.props.x - this.props.background_offset - 20} 
                y={this.props.y - this.props.background_offset - 20} 
            />
            </ Label>
        )    
    }
}



            // scaleX={0.04} 
            // scaleY={0.04} 

  export default Tooltip;