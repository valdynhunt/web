import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Image, Rect, Text, Circle, Star } from 'react-konva';


function RenderCircleRedLg(props) {
             
    return (

        props.objects.map((key) => (
            
            key.object_type.short_name === "red circle lg" &&
            <Star
              key={key}
              x={key.image_x}
              y={window.innerHeight - key.image_y}
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

export default RenderCircleRedLg;

