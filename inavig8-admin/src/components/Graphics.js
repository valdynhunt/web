import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Konva from 'konva';
import { Stage, Layer, Image, Rect, Text, Circle } from 'react-konva';
import useImage from 'use-image';
import MapBackground from './MapBackground'

const STAGE_WIDTH = 1000;
const STAGE_HEIGHT = 700;
const TOOLBAR_WIDTH = 120;
const TOOLBAR_HEIGHT = 650;
const TOOLBAR_X = 10;
const TOOLBAR_Y = 30;
const RECT_WIDTH = 20;
const RECT_HEIGHT = 20;
const CIRC_RADIUS = 10;
const SHADOW_OFFSET = 4;
const FONT_SIZE = 20;

const COFFEE = '\uf0f4';
const UTENSILS = '\uf2e7';
const RESTROOM = '\uf7bd'; 
const HEARTBEAT = '\uf21e';
const RECYCLE = '\uf1b8';
const FIRE_EXTINGUISHER = '\uf134';
const HAND_PAPER = '\uf256';
const MAP_MARKER = '\uf041';
const DOOR_CLOSED = '\uf52a';
const DOOR_OPEN = '\uf52b';
const IMAGE = '\uf03e';
const SQUARE = '\uf0c8';
const PENCIL_ALT = '\uf303';
const DRAW_POLYGON = '\uf5ee';
const REDO = '\uf2f9';
const UNDO = '\uf2ea';
const PLUS = '\uf067';
const MINUS = '\uf068';

const X = [25, 60, 90]; 
const Y = [50, 90, 130, 170, 210, 250, 290, 330, 370, 410, 450, 490, 530, 570, 610, 650];

let origX = 0;
let origY = 0;


const LionImage0 = () => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image x={X[0]} y={Y[2]} scaleX={0.2} scaleY={0.2}                
        image={image} />;
};

const LionImage = () => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image x={X[0]} y={Y[2]} scaleX={0.2} scaleY={0.2} draggable              
        image={image} />;
};


let newCirc = (t, pointerPosition) => ({

  x: pointerPosition.x - t.attrs.radius,
  y: pointerPosition.y - t.attrs.radius,
  radius: t.attrs.radius,
  fill: t.attrs.fill,
  stroke: t.attrs.stroke
  // name: 
  // key: target.ref + 1
});


let newRect = (t, pointerPosition) => ({

  x: pointerPosition.x - t.attrs.width / 2,
  y: pointerPosition.y - t.attrs.height / 2,
  height: t.attrs.height,
  width: t.attrs.width,
  fill: t.attrs.fill,
  stroke: t.attrs.stroke
  // name: 
  // key: target.ref + 1
});


let newText = (t, pointerPosition) => ({

  x: pointerPosition.x - t.textWidth / 2,
  y: pointerPosition.y - t.textHeight / 2,
  fontFamily: t.attrs.fontFamily,
  fontSize: t.attrs.fontSize,
  text: t.attrs.text,
  fill: t.attrs.fill
  // name: increment name + 1?
  // key: target.ref + 1
});



class Graphics extends Component {

  constructor() {
    super()
    this.state = {
      canvasRect: [],
      canvasCirc: [],
      canvasText: []
    }
  }

  handleDragTextStart = e => {
    origX = e.target.attrs.x;
    origY = e.target.attrs.y;
  };

  handleDragTextEnd = e => {

    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();

    console.table({x: pointerPosition.x, y: pointerPosition.y});

    console.log("new - canvasText length before add is ", this.state.canvasText.length);
    console.log("target is: ", e.target);
    console.log("target color is: ", e.target.attrs.fill);

    this.setState(prevState => ({
      canvasText: [...prevState.canvasText, { ...newText(e.target, pointerPosition) }]
    }));

    // put draggable back to original location
    e.target.position({ 
      x: origX,
      y: origY
    });

    e.target.to({
      duration: 0.2,
      easing: Konva.Easings.ElasticEaseOut,
      shadowOffsetX: 0,
      shadowOffsetY: 0
    });

    e.target.getStage().draw();

  }; // end handleDragTextEnd

  handleDragCircStart = e => {
    origX = e.target.attrs.x;
    origY = e.target.attrs.y;
    e.target.setAttrs({
      shadowOffset: {
        x: SHADOW_OFFSET,
        y: SHADOW_OFFSET
      }
      // scaleX: 1.1,
      // scaleY: 1.1
    });
  };  // end handleDragCircStart

  handleDragCircEnd = e => {

    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();

    console.table({x: pointerPosition.x, y: pointerPosition.y});

    console.log("new - canvasCirc length before add is ", this.state.canvasCirc.length);
    console.log("target is: ", e.target);
    console.log("target color is: ", e.target.attrs.fill);

    this.setState(prevState => ({
      canvasCirc: [...prevState.canvasCirc, { ...newCirc(e.target, pointerPosition) }]
    }));

    // put draggable back to original location
    e.target.position({ 
      x: origX,
      y: origY
    });

    e.target.to({
      duration: 0.2,
      easing: Konva.Easings.ElasticEaseOut,
      shadowOffsetX: 0,
      shadowOffsetY: 0
    });

    e.target.getStage().draw();

  }; // end handleDragCircEnd


  handleDragRectStart = e => {
    origX = e.target.attrs.x;
    origY = e.target.attrs.y;
    e.target.setAttrs({
      shadowOffset: {
        x: SHADOW_OFFSET,
        y: SHADOW_OFFSET
      }
      // scaleX: 1.1,
      // scaleY: 1.1
    });
  }; // end handleDragRectStart


  handleDragRectEnd = e => {

    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();

    console.table({x: pointerPosition.x, y: pointerPosition.y});

    console.log("new - canvasRect length before add is ", this.state.canvasRect.length);
    console.log("target is: ", e.target);
    console.log("target color is: ", e.target.attrs.fill);

    this.setState(prevState => ({
      canvasRect: [...prevState.canvasRect, { ...newRect(e.target, pointerPosition) }]
    }));

    // put draggable back to original location
    e.target.position({ 
      x: origX,
      y: origY
    });

    e.target.to({
      duration: 0.2,
      easing: Konva.Easings.ElasticEaseOut,
      shadowOffsetX: 0,
      shadowOffsetY: 0
    });

    e.target.getStage().draw();

  }; // end handleDragRectEnd

  render() {
    return (
      <div className="graphics">
        <Stage 
          width={STAGE_WIDTH} 
          height={STAGE_HEIGHT} 
          ref="stage">
          <Layer >
            <MapBackground location_id={this.props.location_id} />
            {/* <ToolBar /> */}


              <Rect
                x={TOOLBAR_X}
                y={TOOLBAR_Y}
                width={TOOLBAR_WIDTH}
                height={TOOLBAR_HEIGHT}
                fill="white"
                stroke="lightgrey"
              />

              <LionImage0 />
              <LionImage />

              <Circle x={X[0] + CIRC_RADIUS} y={Y[0] + CIRC_RADIUS} radius={CIRC_RADIUS} fill="red" shadowBlur={1} />
              <Circle 
                x={X[0] + CIRC_RADIUS} 
                y={Y[0] + CIRC_RADIUS} 
                radius={CIRC_RADIUS} 
                name="Circ1"
                fill="red" 
                draggable 
                onDragStart={this.handleDragCircStart}
                onDragEnd={this.handleDragCircEnd}
                shadowBlur={1} 
              />

              <Circle x={X[1] + CIRC_RADIUS} y={Y[0] + CIRC_RADIUS} radius={CIRC_RADIUS} fill="lightgrey" shadowBlur={1} />
              <Circle 
                x={X[1] + CIRC_RADIUS} 
                y={Y[0] + CIRC_RADIUS} 
                radius={CIRC_RADIUS} 
                name="Circ1"
                fill="lightgrey" 
                draggable 
                onDragStart={this.handleDragCircStart}
                onDragEnd={this.handleDragCircEnd}
                shadowBlur={1} 
              />

              <Circle x={X[2] + CIRC_RADIUS} y={Y[0] + CIRC_RADIUS} radius={CIRC_RADIUS} fill="green" shadowBlur={1} />
              <Circle 
                x={X[2] + CIRC_RADIUS} 
                y={Y[0] + CIRC_RADIUS} 
                radius={CIRC_RADIUS} 
                name="Circ1"
                fill="green" 
                draggable 
                onDragStart={this.handleDragCircStart}
                onDragEnd={this.handleDragCircEnd}
                shadowBlur={1} 
              />

              <Rect
                x={X[0]}
                y={Y[1]}
                width={RECT_WIDTH}
                height={RECT_HEIGHT}
                fill="red"
                shadowOffset={{ x: 1, y: 1 }}
                shadowBlur={2}
              />

              <Rect
                x={X[0]}
                y={Y[1]}
                width={RECT_WIDTH}
                height={RECT_HEIGHT}
                name="Rect2"
                fill="red"
                ref="draggableRect"
                draggable
                onDragStart={this.handleDragRectStart}
                onDragEnd={this.handleDragRectEnd}
                shadowBlur={1}
              />

              <Rect
                x={X[1]}
                y={Y[1]}
                width={RECT_WIDTH}
                height={RECT_HEIGHT}
                fill="lightgrey"
                shadowOffset={{ x: 1, y: 1 }}
                shadowBlur={1}
              />

              <Rect
                x={X[1]}
                y={Y[1]}
                width={RECT_WIDTH}
                height={RECT_HEIGHT}
                name="Rect1"
                fill="lightgrey"
                draggable
                onDragStart={this.handleDragRectStart}
                onDragEnd={this.handleDragRectEnd}
                shadowBlur={1}
              />

              <Rect
                x={X[2]}
                y={Y[1]}
                width={RECT_WIDTH}
                height={RECT_HEIGHT}
                fill="green"
                shadowOffset={{ x: 1, y: 1 }}
                shadowBlur={1}
              />

              <Rect
                x={X[2]}
                y={Y[1]}
                width={RECT_WIDTH}
                height={RECT_HEIGHT}
                name="Rect1"
                fill="green"
                draggable
                onDragStart={this.handleDragRectStart}
                onDragEnd={this.handleDragRectEnd}
                shadowBlur={1}
              />

              <Text
                x={X[0]}
                y={Y[4]}
                fontFamily="FontAwesome"
                text={COFFEE}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[4]}
                name="Text1"
                fontFamily="FontAwesome"
                text={COFFEE}
                fontSize={FONT_SIZE}
                draggable
                onDragStart={this.handleDragTextStart}
                onDragEnd={this.handleDragTextEnd}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[5]}
                fontFamily="FontAwesome"
                text={UTENSILS}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[5]}
                name="Text2"
                fontFamily="FontAwesome"
                text={UTENSILS}
                fontSize={FONT_SIZE}
                draggable
                onDragStart={this.handleDragTextStart}
                onDragEnd={this.handleDragTextEnd}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[6]}
                fontFamily="FontAwesome"
                text={RESTROOM}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[6]}
                name="Text3"
                fontFamily="FontAwesome"
                text={RESTROOM}
                fontSize={FONT_SIZE}
                draggable
                onDragStart={this.handleDragTextStart}
                onDragEnd={this.handleDragTextEnd}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[7]}
                fontFamily="FontAwesome"
                text={HEARTBEAT}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[7]}
                name="Text4"
                fontFamily="FontAwesome"
                text={HEARTBEAT}
                fontSize={FONT_SIZE}
                draggable
                onDragStart={this.handleDragTextStart}
                onDragEnd={this.handleDragTextEnd}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[8]}
                fontFamily="FontAwesome"
                text={RECYCLE}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[8]}
                name="Text5"
                fontFamily="FontAwesome"
                text={RECYCLE}
                fontSize={FONT_SIZE}
                draggable
                onDragStart={this.handleDragTextStart}
                onDragEnd={this.handleDragTextEnd}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[9]}
                fontFamily="FontAwesome"
                text={FIRE_EXTINGUISHER}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[9]}
                name="Text6"
                fontFamily="FontAwesome"
                text={FIRE_EXTINGUISHER}
                fontSize={FONT_SIZE}
                draggable
                onDragStart={this.handleDragTextStart}
                onDragEnd={this.handleDragTextEnd}
                fill="black"
              />



              <Text
                x={X[0]}
                y={Y[10]}
                fontFamily="FontAwesome"
                text={MAP_MARKER}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[10]}
                name="Text8"
                fontFamily="FontAwesome"
                text={MAP_MARKER}
                fontSize={FONT_SIZE}
                draggable
                onDragStart={this.handleDragTextStart}
                onDragEnd={this.handleDragTextEnd}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[11]}
                fontFamily="FontAwesome"
                text={IMAGE}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[11]}
                name="Text9"
                fontFamily="FontAwesome"
                text={IMAGE}
                fontSize={FONT_SIZE}
                draggable
                onDragStart={this.handleDragTextStart}
                onDragEnd={this.handleDragTextEnd}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[12]}
                fontFamily="FontAwesome"
                text={SQUARE}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[12]}
                name="Text10"
                fontFamily="FontAwesome"
                text={SQUARE}
                fontSize={FONT_SIZE}
                draggable
                onDragStart={this.handleDragTextStart}
                onDragEnd={this.handleDragTextEnd}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[13]}
                fontFamily="FontAwesome"
                text={PENCIL_ALT}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[1]}
                y={Y[13]}
                fontFamily="FontAwesome"
                text={DRAW_POLYGON}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[14]}
                fontFamily="FontAwesome"
                text={REDO}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[1]}
                y={Y[14]}
                fontFamily="FontAwesome"
                text={UNDO}
                fontSize={FONT_SIZE}
                fill="black"
              />

<Text
                x={X[2]}
                y={Y[14]}
                fontFamily="FontAwesome"
                text={DOOR_OPEN}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[2]}
                y={Y[14]}
                name="Text11"
                fontFamily="FontAwesome"
                text={DOOR_OPEN}
                fontSize={FONT_SIZE}
                draggable
                onDragStart={this.handleDragTextStart}
                onDragEnd={this.handleDragTextEnd}
                fill="black"
              />

              <Text
                x={X[0]}
                y={Y[15]}
                fontFamily="FontAwesome"
                text={PLUS}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[1]}
                y={Y[15]}
                fontFamily="FontAwesome"
                text={MINUS}
                fontSize={FONT_SIZE}
                fill="black"
              />

              <Text
                x={X[2]}
                y={Y[15]}
                fontFamily="FontAwesome"
                text={HAND_PAPER}
                fontSize={FONT_SIZE}
                fill="black"
              />



            


              {this.state.canvasRect.map(  ({ x, y, height, width, fill, stroke }, key) => ( // maps over this.state.canvas objects

                    <Rect
                      key={key}
                      x={x}
                      y={y}
                      width={width}
                      height={height}

                      stroke={stroke}
                      draggable
                      fill={fill}

                      shadowOffset={{ x: 1, y: 1 }}
                      onDragStart={this.handleDragShapeStart}
                      onDragEnd={this.handleDragShapeEnd}
                      onClick={this.handleClick}
                    />
              ))}

              {this.state.canvasCirc.map(  ({ x, y, radius, fill, stroke }, key) => ( // maps over this.state.canvas objects

              <Circle
                key={key}
                x={x}
                y={y}
                radius={radius}

                stroke={stroke}
                draggable
                fill={fill}

                shadowOffset={{ x: 1, y: 1 }}
                onDragStart={this.handleDragCircStart}
                onDragEnd={this.handleDragCircEnd}
                onClick={this.handleClick}
              />
              ))}


              {this.state.canvasText.map(  ({ x, y, fontFamily, fontSize, text, fill }, key) => ( // maps over this.state.canvas objects

              <Text
                key={key}
                x={x}
                y={y}
                fontFamily={fontFamily}
                fontSize={fontSize}

                text={text}
                draggable
                fill={fill}

                // shadowOffset={{ x: 1, y: 1 }}
                onDragStart={this.handleDragTextStart}
                onDragEnd={this.handleDragTextEnd}
                onClick={this.handleClick}
              />
              ))}

          </Layer>
        </Stage>
      </div>
    )
  }
}


export default Graphics;
