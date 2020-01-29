import React from 'react';
import { Label, Text } from 'react-konva';


class Tooltip extends React.Component {
    render() {
        return (
            <Label>
            <Text  
                text={this.props.object_id + " " + this.props.short_name}
                fontFamily={"Calibri"}
                fontSize={14}
                lineHeight={1.2}
                padding={5}
                textFill={"white"}
                alpha={0.75}
                fill={"green"}
                visible={this.props.visible}
                x={this.props.x - this.props.background_offset + 35} 
                y={this.props.y - 30} 
            />
            </ Label>
        )    
    }
}



            // scaleX={0.04} 
            // scaleY={0.04} 

  export default Tooltip;