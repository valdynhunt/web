import React from 'react';
import { Star } from 'react-konva';


function RenderDoor(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "door" &&
            <Star
              key={key.object_id}
              x={key.image_x}
              y={key.image_y}
              numPoints={5}
              innerRadius={5}
              outerRadius={10}
              fill="#cccccc"
              opacity={0.8}
              draggable
              rotation={Math.random() * 180}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
            //   onDragStart={this.handleDragStart}
            //   onDragEnd={this.handleDragEnd}
            />

        )))
}

export default RenderDoor;
