import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Konva from 'konva';
import { Stage, Layer, Image, Rect, Text, Circle } from 'react-konva';
import useImage from 'use-image';
import MapBackground from './MapBackground'


const stageWidth = 1000;
const stageHeight = 700;
let origX = 0;
let origY = 0;


const LionImage0 = () => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image x={10} y={90} scaleX={0.4} scaleY={0.4}                
        image={image} />;
};

const LionImage = () => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image x={10} y={90} scaleX={0.4} scaleY={0.4} draggable              
        image={image} />;
};


let newShape = (t, pointerPosition) => ({

  x: pointerPosition.x - t.attrs.width / 2,
  y: pointerPosition.y - t.attrs.height / 2,
  height: t.attrs.height,
  width: t.attrs.width,
  fill: t.attrs.fill,
  stroke: t.attrs.stroke
  // name: 
  // key: target.ref + 1
});



class Graphics extends Component {

  constructor() {
    super()
    this.state = {
      canvas: [
        // {}
      ]
    }
  }

  handleDragStart = e => {
    origX = e.target.attrs.x;
    origY = e.target.attrs.y;
    e.target.setAttrs({
      shadowOffset: {
        x: 4,
        y: 4
      }
      // scaleX: 1.1,
      // scaleY: 1.1
    });
  };

  handleDragEnd = e => {

    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();

    console.table({x: pointerPosition.x, y: pointerPosition.y});

    console.log("new ", this.state.canvas.length);
    console.log(e);
    console.log("target is: ", e.target);
    console.log("target color is: ", e.target.attrs.fill);

    this.setState(prevState => ({
      canvas: [...prevState.canvas, { ...newShape(e.target, pointerPosition) }]
    }));

    // put draggable back to original location
    var rect = this.refs.draggableRect;
    e.target.position({ 
      x: origX,
      y: origY
    });
    e.target.getStage().draw();

    e.target.to({
      duration: 0.2,
      easing: Konva.Easings.ElasticEaseOut,
      x: origX,
      y: origY,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 0,
      shadowOffsetY: 0
    });

  }; // end handleDragEnd

  render() {
    return (
      <div className="graphics">
        <Stage 
          width={stageWidth} 
          height={stageHeight} 
          ref="stage">
          <Layer >
            <MapBackground />
            {/* <ToolBar /> */}


              <Rect
                x={10}
                y={30}
                width={120}
                height={650}
                fill="white"
                stroke="lightgrey"
              />
              <LionImage0 />
              <LionImage />

              <Text
                x={15}
                y={170}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={170}
                name="Text1"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />
              <Text
                x={15}
                y={210}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={210}
                name="Text2"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />
              <Text
                x={15}
                y={250}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={250}
                name="Text3"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />
              <Text
                x={15}
                y={290}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={290}
                name="Text4"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />
              <Text
                x={15}
                y={330}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={330}
                name="Text5"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />
              <Text
                x={15}
                y={370}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={370}
                name="Text6"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />
              <Text
                x={15}
                y={410}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={410}
                name="Text7"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />
              <Text
                x={15}
                y={450}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={450}
                name="Text8"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />
              <Text
                x={15}
                y={490}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={490}
                name="Text9"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />
              <Text
                x={15}
                y={530}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={530}
                name="Text10"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />
              <Text
                x={15}
                y={570}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={570}
                name="Text11"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />
              <Text
                x={15}
                y={610}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={610}
                name="Text12"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />
              <Text
                x={15}
                y={650}
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                fill="black"
              />
              <Text
                x={15}
                y={650}
                name="Text13"
                fontFamily="FontAwesome"
                text={'\uf0f4'}
                fontSize={20}
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                fill="black"
              />

              <Rect
                x={20}
                y={50}
                width={20}
                height={20}
                fill="lightgrey"
                shadowBlur={1}
              />

              <Rect
                x={20}
                y={50}
                width={20}
                height={20}
                name="Rect1"
                fill="lightgrey"
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                shadowBlur={1}
              />

            
              <Rect
                x={80}
                y={100}
                width={20}
                height={20}
                fill="red"
                shadowBlur={2}
              />

              <Rect
                x={80}
                y={100}
                width={20}
                height={20}
                name="Rect2"
                fill="red"
                ref="draggableRect"
                draggable
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                // onDragEnd=
                shadowBlur={2}
              />

              <Circle x={100} y={70} radius={10} fill="lightgrey" shadowBlur={1} />
              <Circle 
                x={100} 
                y={70} 
                radius={10} 
                name="Circ1"
                fill="lightgrey" 
                draggable 
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                shadowBlur={1} 
              />

              {this.state.canvas.map(  ({ x, y, height, width, fill, stroke }, key) => ( // maps over this.state.canvas objects

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
                      onDragStart={this.handleDragStart}
                      onDragEnd={this.handleDragEnd}
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
