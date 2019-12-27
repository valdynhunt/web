import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Konva from 'konva';
import { Stage, Layer, Image, Rect, Text, Circle, Star } from 'react-konva';
import useImage from 'use-image';
import MapBackground from './MapBackground'
import config from '../config.json';
import ModalSetGrid from './ModalSetGrid';
import RenderGeneric from './RenderGeneric';
import RenderPath from './RenderPath';
import RenderDoor from './RenderDoor';
import RenderElevator from './RenderElevator';
import RenderStairs from './RenderStairs';
import RenderCoffee from './RenderCoffee';
import RenderUtensils from './RenderUtensils';
import RenderRestroom from './RenderRestroom';
import RenderMale from './RenderMale';
import RenderFemale from './RenderFemale';
import RenderHeartbeat from './RenderHeartbeat';
import RenderRecycle from './RenderRecycle';
import RenderFireExtinguisher from './RenderFireExtinguisher';
import RenderMapMarker from './RenderMapMarker';
import RenderDoorOpen from './RenderDoorOpen';
import RenderDoorClosed from './RenderDoorClosed';
import RenderSquareRed from './RenderSquareRed';
import RenderSquareGrey from './RenderSquareGrey';
import RenderSquareGreen from './RenderSquareGreen';
import RenderCircleRedSm from './RenderCircleRedSm';
import RenderCircleGreySm from './RenderCircleGreySm';
import RenderCircleGreenSm from './RenderCircleGreenSm';
import RenderCircleRedLg from './RenderCircleRedLg';
import RenderCircleGreyLg from './RenderCircleGreyLg';
import RenderCircleGreenLg from './RenderCircleGreenLg';

import CircleRedSm from './CircleRedSm';
import CircleGreySm from './CircleGreySm';
import CircleGreenSm from './CircleGreenSm';
import CircleRedLg from './CircleRedLg';
import CircleGreyLg from './CircleGreyLg';
import CircleGreenLg from './CircleGreenLg';
import SquareRed from './SquareRed';
import SquareGrey from './SquareGrey';
import SquareGreen from './SquareGreen';

import Restroom from './Restroom';
import Male from './Male';
import Female from './Female';
import Coffee from './Coffee';
import Utensils from './Utensils';
import DoorOpen from './DoorOpen';
import DoorClosed from './DoorClosed';
import Stairs from './Stairs';
import Elevator from './Elevator';
import Heartbeat from './Heartbeat';
import Recycle from './Recycle';
import FireExtinguisher from './FireExtinguisher';
import MapMarker from './MapMarker';
import ImageRegular from './ImageRegular';

import Generic from './Generic';
import Path from './Path';
import Pencil from './Pencil';
import Redo from './Redo';
import Undo from './Undo';
import Plus from './Plus';
import Minus from './Minus';
import HandPaper from './HandPaper';
import DrawPolygon from './DrawPolygon';

const STAGE_WIDTH = window.innerWidth;
const STAGE_HEIGHT = window.innerHeight;
const TOOLBAR_WIDTH = 120;
const TOOLBAR_HEIGHT = 650;
const TOOLBAR_X = 10;
const TOOLBAR_Y = 30;
const CIRC_RADIUS = 7;
const CIRC_RADIUS_SM = 3;
const SHADOW_OFFSET = 4;
const FONT_SIZE = 20;
const BACKGROUND_OFFSET = 150;

const X = [25, 60, 95]; 
const Y = [50, 90, 130, 170, 210, 250, 290, 330, 370, 410, 450, 490, 530, 570, 610, 650];

let origX = 0;
let origY = 0;

var stage;
var mousePos;
var tooltipLayer = new Konva.Layer();
var tooltip = new Konva.Text({
  text: 'hi',
  fontFamily: 'Calibri',
  fontSize: 18,
  padding: 5,
  textFill: 'white',
  fill: 'black',
  alpha: 0.75,
  // visible: false
  visible: true
})

const handleClick = e => { 
  // open sidebar with focus - show delete or edit buttons
  console.log("clicked obj ", e.target)
};


let newImage = (t, pointerPosition) => ({
  // fetch new....

      "location_id": t.attrs.location_id, // use same?
      "short_name": "mensrm", // prompt
      "long_name": "foo77",  // prompt
      "description": "men's restroom - 77th floor", // prompt
      "object_type_id": t.attrs.location_id,
      "x_coordinate": 0,
      "y_coordinate": 0,
      "image_x": pointerPosition.x,
      "image_y": pointerPosition.y,
      "latitude": 0.0,
      "longitude": 0.0,
      "active": true,
      "image": t.attrs.image

  // key???
  // key: 7, // location_id

});

let newCirc = (t, pointerPosition) => ({
  // fetch new location_id?
  location_id: 7,  // fetch it
  key: 7, // location_id

  // pop up modal to input short_name and description
  short_name: "foo",
  description: "foo2",
  long_name: "fooey",
  active: "true", // can we just make this a default on the creation of new objects?
  
  // x and y are pixel ref
  x: pointerPosition.x,
  y: pointerPosition.y,

  // x_coordinate and y_coordinate are relative coords
  x_coordinate: 2,
  y_coordinate: 3,
  
  object_type_id: 1,
  
  // lat and long are only set for primary or secondary objects - does each floor need them?
  latitude: 0,
  longitude: 0,

  radius: t.attrs.radius,
  fill: t.attrs.fill,
  stroke: t.attrs.stroke

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

let newObject = (t, pointerPosition) => ({

  x: pointerPosition.x,
  y: pointerPosition.y,
  // fontFamily: t.attrs.fontFamily,
  // fontSize: t.attrs.fontSize,
  // text: t.attrs.text,
  // fill: t.attrs.fill
  // name: increment name + 1?
  // key: target.ref + 1
});
//


class Graphics extends Component {

  constructor() {
    super()
    // this.state = {
    //   location: [],
    //   objects: []
    // }

    this.handleDragRectStart = this.handleDragRectStart.bind(this)
    this.handleDragRectEnd = this.handleDragRectEnd.bind(this)
    this.handleDragImageStart = this.handleDragImageStart.bind(this)
    this.handleDragImageEnd = this.handleDragImageEnd.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseOut= this.handleMouseOut.bind(this)
  }

  // componentDidMount() {

	// 	let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
	// 	JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

  //   let headers = config.api.headers;
    
  //   const url = config.api.invokeUrl + '/location/' + this.props.location_id;
	// 	fetch(url, 
	// 	{
	// 		method: "GET",
	// 		headers,
	// 	}).then(response => {
	// 		return response.json();
	// 	}).then(result => {
	// 		this.setState(
	// 			{
	// 				location: result.body.data
	// 			}
	// 		);
	// 		console.log("location... ", result.body.data);
	// 	});
    
  //   const url2 = config.api.invokeUrl + '/objects/location/' + this.props.location_id;
	// 	fetch(url2, 
	// 	{
	// 		method: "GET",
	// 		headers,
	// 	}).then(response => {
	// 		return response.json();
	// 	}).then(result => {
	// 		this.setState(
	// 			{
	// 				objects: result.body.data
	// 			}
  //     );

  //     console.log("objects: ", result.body.data);
  //     console.log("state: ", this.state);
  //     console.log("checking if primary and secondary are set...");

  //     let foundPrimary = this.state.objects.find(element =>  element.short_name === "primary");
  //     let foundSecondary = this.state.objects.find(element => element.short_name === "secondary");
  //     let scaleIsSet = false;
  //     let renderModal = false;

  //     console.log("scale set? ", scaleIsSet);
  //     console.log("foundPrimary: ", foundPrimary);
  //     console.log("foundSecondary: ", foundSecondary);

  //     // check if scale set
  //     scaleIsSet = (foundPrimary.x_coordinate === 0) && (foundPrimary.y_coordinate === 0);
  //     console.log("scale set? ", scaleIsSet);

  //     // if primary and secondary and grid not set, then show modal to input
  //     if (!foundPrimary || !foundSecondary || !scaleIsSet) {
  //       // show model to set them and set grid
  //       // show modal here
  //       renderModal = true;

  //     }

  //     console.log("renderModal: ", renderModal);
  //   });
    
    
  // }

  handleClick = e => { 
    // open sidebar with focus - show delete or edit buttons
    console.log("clicked obj ", e.target);
  };

  handleMouseMove = e => { 
    stage = e.target.getStage();
    mousePos = stage.getPointerPosition();

    tooltip.position({
      x: mousePos.x + 5,
      y: mousePos.y + 5
    });

    tooltip.text(e.target.attrs.text);
    tooltip.show();
    tooltipLayer.add(tooltip);
    stage.add(tooltipLayer);

    // console.log("get stage ", e.target.getStage);
    // e.target.getStage().batchdraw();
    console.log("tiptext: ", tooltip.text);
    tooltipLayer.batchDraw();
    console.log("mouse move ", e.target)
  };


  handleMouseOut = e => { 


    tooltip.hide();
    e.target.getStage().draw();
    console.log("mouse out ", e.target)
  };

  // handleDragTextStart = e => {
  //   origX = e.target.attrs.x;
  //   origY = e.target.attrs.y;
  // };

  // handleDragTextEnd = e => {

  //   const stage = e.target.getStage();
  //   const pointerPosition = stage.getPointerPosition();

  //   console.table({x: pointerPosition.x, y: pointerPosition.y});

  //   console.log("new - canvasText length before add is ", this.state.canvasText.length);
  //   console.log("target is: ", e.target);
  //   console.log("target color is: ", e.target.attrs.fill);

  //   this.setState(prevState => ({
  //     canvasText: [...prevState.canvasText, { ...newText(e.target, pointerPosition) }]
  //   }));

  //   // put draggable back to original location
  //   e.target.position({ 
  //     x: origX,
  //     y: origY
  //   });

  //   e.target.to({
  //     duration: 0.2,
  //     easing: Konva.Easings.ElasticEaseOut,
  //     shadowOffsetX: 0,
  //     shadowOffsetY: 0
  //   });

  //   e.target.getStage().draw();

  // }; // end handleDragTextEnd

  handleDragImageStart = e => {
    console.log("drag image start e: ", e);
    origX = e.target.attrs.x;
    origY = e.target.attrs.y;
    e.target.setAttrs({
      shadowOffset: {
        x: SHADOW_OFFSET,
        y: SHADOW_OFFSET
      },
      scaleX: 0.04,
      scaleY: 0.04
    });
  };  // end handleDragImageStart

  handleDragImageEnd = e => {
    console.log("drag image end e: ", e);
    console.log(origX, " ", origY);

    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();

    console.table({x: pointerPosition.x, y: pointerPosition.y});
    console.log("new - objects length before add is ", this.props.objects.length);
    console.log("target is: ", e.target);

    // "location_id": t.attrs.location_id, // use same?
    // "short_name": "mensrm", // prompt
    // "long_name": "foo77",  // prompt
    // "description": "men's restroom - 77th floor", // prompt
    // "object_type_id": t.attrs.location_id,
    // "x_coordinate": 0,
    // "y_coordinate": 0,
    // "image_x": pointerPosition.x,
    // "image_y": pointerPosition.y,
    // "latitude": 0.0,
    // "longitude": 0.0,
    // "active": true
console.log("location id: " + this.props.location_id);
console.log("short name: " + e.target.attrs.short_name);
console.log("object type id: " + e.target.attrs.object_type_id);
    // var raw = JSON.stringify({"location_id":1, "short_name":"men's restroom","long_name":"foo99","description":"men's room - 99th floor","object_type_id": 11,"x_coordinate": 0,"y_coordinate": 0,"image_x": 99,"image_y": 99,"latitude": 0.0,"longitude": 0.0,"active": true});
    var raw = JSON.stringify({
      "location_id":this.props.location_id, 
      "short_name":e.target.attrs.short_name,
      "long_name":"a",
      "description":"a",
      "object_type_id": e.target.attrs.object_type_id,
      "x_coordinate": 0,
      "y_coordinate": 0,
      "image_x": pointerPosition.x,
      "image_y": pointerPosition.y,
    });
console.log("props: ", this.props);
    this.props.updateObjects(raw);

  //   let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
	// 	JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

  //   let headers = config.api.headers;

  //   const url3 = config.api.invokeUrl + '/object/new';
	// 	fetch(url3, 
	// 	{
	// 		method: "POST",
  //     headers,
  //     body: raw,
	// 	}).then(response => {
	// 		return response.json();
	// 	}).then(result => {
  //     //console.log("result: ", result);
  //     // result.body.data[0]
  //     //console.log("prevState.objects: " , this.state.objects);
  //     
	// 		this.setState(
	// 			{
  //         // objects: result.body.data
  //         // objects: [...prevState.objects, { ...newImage(e.target, pointerPosition) }]
  //         objects: [...this.props.objects, { ...result.body.data[0] }]
	// 			}
  //     );


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

  // });
  }; // end handleDragImageEnd



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

    // call to get new location_id?? and feed in to ...newCirc(location_id, e.target, pointerPosition) ??

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
        
        <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} >
          <Layer name="background">

          {this.props.location.map((key) => (
            <MapBackground key={key.location_id} img={key.canvas_image} background_offset={BACKGROUND_OFFSET}/>
            ))}

          </Layer>
          <Layer name="main">
          {/* <ModalSetGrid objects ={this.state.objects} />  */}
              <Rect
                x={TOOLBAR_X}
                y={TOOLBAR_Y}
                width={TOOLBAR_WIDTH}
                height={TOOLBAR_HEIGHT}
                fill="white"
                stroke="lightgrey"
              />

              <CircleRedSm x={X[0] + CIRC_RADIUS} y={Y[0] + CIRC_RADIUS} />
              <CircleRedSm 
                x={X[0] + CIRC_RADIUS} 
                y={Y[0] + CIRC_RADIUS} 
                name="CircRdSm"
                onDragStart={this.handleDragCircStart}
                onDragEnd={this.handleDragCircEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <CircleGreySm x={X[1] + CIRC_RADIUS} y={Y[0] + CIRC_RADIUS} />
              <CircleGreySm
                x={X[1] + CIRC_RADIUS} 
                y={Y[0] + CIRC_RADIUS} 
                name="CircGrySm"
                onDragStart={this.handleDragCircStart}
                onDragEnd={this.handleDragCircEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <CircleGreenSm x={X[2] + CIRC_RADIUS} y={Y[0] + CIRC_RADIUS} />
              <CircleGreenSm 
                x={X[2] + CIRC_RADIUS} 
                y={Y[0] + CIRC_RADIUS} 
                name="CircGrnSm"
                onDragStart={this.handleDragCircStart}
                onDragEnd={this.handleDragCircEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <CircleRedLg x={X[0] + CIRC_RADIUS} y={Y[1] + CIRC_RADIUS} />
              <CircleRedLg 
                x={X[0] + CIRC_RADIUS} 
                y={Y[1] + CIRC_RADIUS} 
                name="CircRdLg"
                onDragStart={this.handleDragCircStart}
                onDragEnd={this.handleDragCircEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <CircleGreyLg x={X[1] + CIRC_RADIUS} y={Y[1] + CIRC_RADIUS} />
              <CircleGreyLg
                x={X[1] + CIRC_RADIUS} 
                y={Y[1] + CIRC_RADIUS} 
                name="CircGryLg"
                onDragStart={this.handleDragCircStart}
                onDragEnd={this.handleDragCircEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <CircleGreenLg x={X[2] + CIRC_RADIUS} y={Y[1] + CIRC_RADIUS} />
              <CircleGreenLg 
                x={X[2] + CIRC_RADIUS} 
                y={Y[1] + CIRC_RADIUS} 
                name="CircGrnLg"
                onDragStart={this.handleDragCircStart}
                onDragEnd={this.handleDragCircEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <SquareRed x={X[0]} y={Y[2]} />
              <SquareRed
                x={X[0]}
                y={Y[2]}
                name="Rect2"
                onDragStart={this.handleDragRectStart}
                onDragEnd={this.handleDragRectEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <SquareGrey x={X[1]} y={Y[2]} />
              <SquareGrey
                x={X[1]}
                y={Y[2]}
                name="Rect2"
                onDragStart={this.handleDragRectStart}
                onDragEnd={this.handleDragRectEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <SquareGreen x={X[2]} y={Y[2]} />
              <SquareGreen
                x={X[2]}
                y={Y[2]}
                name="Rect2"
                onDragStart={this.handleDragRectStart}
                onDragEnd={this.handleDragRectEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Restroom x={X[0]} y={Y[3]} />
              <Restroom x={X[0]} y={Y[3]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Male x={X[1] + CIRC_RADIUS} y={Y[3]} />
              <Male x={X[1] + CIRC_RADIUS} y={Y[3]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Female x={X[2] + CIRC_RADIUS} y={Y[3]} />
              <Female x={X[2] + CIRC_RADIUS} y={Y[3]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Coffee x={X[0]} y={Y[4]} />
              <Coffee x={X[0]} y={Y[4]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Utensils x={X[1]} y={Y[4]} />
              <Utensils x={X[1]} y={Y[4]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <DoorOpen x={X[0]} y={Y[5]} />
              <DoorOpen x={X[0]} y={Y[5]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />
              
              <DoorClosed x={X[1]} y={Y[5]} />
              <DoorClosed x={X[1]} y={Y[5]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />
            
              <Stairs x={X[0]} y={Y[6]} />
              <Stairs x={X[0]} y={Y[6]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />
              
              <Elevator x={X[1]} y={Y[6]} />
              <Elevator x={X[1]} y={Y[6]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Heartbeat x={X[0]} y={Y[7]} />
              <Heartbeat x={X[0]} y={Y[7]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />
              
              <Recycle x={X[0]} y={Y[8]} />
              <Recycle x={X[0]} y={Y[8]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <FireExtinguisher x={X[0]} y={Y[9]} />
              <FireExtinguisher x={X[0]} y={Y[9]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />
             
              <MapMarker x={X[0]} y={Y[10]} />
              <MapMarker x={X[0]} y={Y[10]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />
              
              <ImageRegular x={X[0]} y={Y[11]}/>
              <ImageRegular x={X[0]} y={Y[11]}
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />
             
              <Generic x={X[0]} y={Y[12]} />
              <Generic x={X[0]} y={Y[12]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Path x={X[1]} y={Y[12]} />
              <Path x={X[1]} y={Y[12]} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />      
              
              <Pencil x={X[0]} y={Y[13]}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <DrawPolygon x={X[1]} y={Y[13]}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Redo x={X[0]} y={Y[14]}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Undo x={X[1]} y={Y[14]}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Plus x={X[0]} y={Y[15]}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Minus x={X[1]} y={Y[15]}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <HandPaper x={X[2]} y={Y[15]}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />


            <RenderGeneric objects={this.props.objects}/>
            <RenderPath objects={this.props.objects}/>
            <RenderDoor objects={this.props.objects}/>
            <RenderElevator objects={this.props.objects}/>
            <RenderStairs objects={this.props.objects}/>
            <RenderCoffee objects={this.props.objects}/>
            <RenderUtensils objects={this.props.objects}/>
            <RenderRestroom objects={this.props.objects}/>
            <RenderMale objects={this.props.objects}/>
            <RenderFemale objects={this.props.objects}/>
            <RenderHeartbeat objects={this.props.objects}/>
            <RenderRecycle objects={this.props.objects}/>
            <RenderFireExtinguisher objects={this.props.objects}/>
            <RenderMapMarker objects={this.props.objects}/>
            <RenderDoorOpen objects={this.props.objects}/>
            <RenderDoorClosed objects={this.props.objects}/>
            <RenderSquareRed objects={this.props.objects}/>
            <RenderSquareGrey objects={this.props.objects}/>
            <RenderSquareGreen objects={this.props.objects}/>
            <RenderCircleRedLg objects={this.props.objects}/>
            <RenderCircleGreyLg objects={this.props.objects}/>
            <RenderCircleGreenLg objects={this.props.objects}/>
            <RenderCircleRedSm objects={this.props.objects}/>
            <RenderCircleGreySm objects={this.props.objects}/>
            <RenderCircleGreenSm objects={this.props.objects}/>

          </Layer>
        </Stage>
      </div>
    )
  }
}

export default Graphics;
