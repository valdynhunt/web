import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Image, Rect, Text, Circle, Star } from 'react-konva';


function RenderPath(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "path" && key.active &&
            <Star
              key={key}
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
            />

        )))
}

export default RenderPath;
