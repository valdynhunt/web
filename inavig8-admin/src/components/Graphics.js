import React from 'react';
//import { Component } from 'react';
import { Modal, Button, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap/'
import Konva from 'konva';
import { Stage, Layer, Rect } from 'react-konva';
//import { Text } from 'react-konva';
import MapBackground from './MapBackground'
import config from '../config.json';
//import ModalSetGrid from './ModalSetGrid';
import './Graphics.css';

import RenderConnections from './render/RenderConnections';
import RenderGeneric from './render/RenderGeneric';
import RenderPath from './render/RenderPath';
import RenderDoor from './render/RenderDoor';
import RenderElevator from './render/RenderElevator';
import RenderStairs from './render/RenderStairs';
import RenderCoffee from './render/RenderCoffee';
import RenderUtensils from './render/RenderUtensils';
import RenderRestroom from './render/RenderRestroom';
import RenderMale from './render/RenderMale';
import RenderFemale from './render/RenderFemale';
import RenderHeartbeat from './render/RenderHeartbeat';
import RenderRecycle from './render/RenderRecycle';
import RenderFireExtinguisher from './render/RenderFireExtinguisher';
import RenderMapMarker from './render/RenderMapMarker';
import RenderDoorOpen from './render/RenderDoorOpen';
import RenderDoorClosed from './render/RenderDoorClosed';
import RenderSquareRed from './render/RenderSquareRed';
import RenderSquareGrey from './render/RenderSquareGrey';
import RenderSquareGreen from './render/RenderSquareGreen';
import RenderCircleRedSm from './render/RenderCircleRedSm';
import RenderCircleGreySm from './render/RenderCircleGreySm';
import RenderCircleGreenSm from './render/RenderCircleGreenSm';
import RenderCircleRedLg from './render/RenderCircleRedLg';
import RenderCircleGreyLg from './render/RenderCircleGreyLg';
import RenderCircleGreenLg from './render/RenderCircleGreenLg';

import CircleRedSm from './toolbar/CircleRedSm';
import CircleGreySm from './toolbar/CircleGreySm';
import CircleGreenSm from './toolbar/CircleGreenSm';
import CircleRedLg from './toolbar/CircleRedLg';
import CircleGreyLg from './toolbar/CircleGreyLg';
import CircleGreenLg from './toolbar/CircleGreenLg';
import SquareRed from './toolbar/SquareRed';
import SquareGrey from './toolbar/SquareGrey';
import SquareGreen from './toolbar/SquareGreen';

import Restroom from './toolbar/Restroom';
import Male from './toolbar/Male';
import Female from './toolbar/Female';
import Coffee from './toolbar/Coffee';
import Utensils from './toolbar/Utensils';
import DoorOpen from './toolbar/DoorOpen';
import DoorClosed from './toolbar/DoorClosed';
import Stairs from './toolbar/Stairs';
import Elevator from './toolbar/Elevator';
import Heartbeat from './toolbar/Heartbeat';
import Recycle from './toolbar/Recycle';
import FireExtinguisher from './toolbar/FireExtinguisher';
import MapMarker from './toolbar/MapMarker';
import ImageRegular from './toolbar/ImageRegular';

import Generic from './toolbar/Generic';
import Path from './toolbar/Path';
import Pencil from './toolbar/Pencil';
import Redo from './toolbar/Redo';
import Primary from './toolbar/Primary';
import Undo from './toolbar/Undo';
import Secondary from './toolbar/Secondary';
import Plus from './toolbar/Plus';
import Minus from './toolbar/Minus';
import HandPaper from './toolbar/HandPaper';
import DrawPolygon from './toolbar/DrawPolygon';
import Tooltip from './Tooltip';
const STAGE_WIDTH = window.innerWidth;
const STAGE_HEIGHT = window.innerHeight;
const TOOLBAR_WIDTH = 120;
const TOOLBAR_HEIGHT = 650;
const TOOLBAR_X = 10;
const TOOLBAR_Y = 30;
const CIRC_RADIUS = 7;
// const CIRC_RADIUS_SM = 3;
const SHADOW_OFFSET = 4;
// const FONT_SIZE = 20;
const BACKGROUND_OFFSET = 150;
const GENERIC_OFFSET = 5;
const PATH_OFFSET = 9;

const X = [25, 60, 95]; 
const Y = [50, 90, 130, 170, 210, 250, 290, 330, 370, 410, 450, 490, 530, 570, 610, 650];

let origX = 0;
let origY = 0;

var stage;
var mousePos;
// let showMe;

let primary;
let secondary;
let x_scale;
let y_scale;

// var tooltipLayer = new Konva.Layer();
// var tooltip = new Konva.Text({
//   text: 'hi',
//   fontFamily: 'Calibri',
//   fontSize: 18,
//   padding: 5,
//   textFill: 'white',
//   fill: 'black',
//   alpha: 0.75,
//   // visible: false
//   visible: true
// })

// stage = e.target.getStage();
// tooltipLayer.add(tooltip);
// stage.add(tooltipLayer);

// let newText = (t, pointerPosition) => ({

//   x: pointerPosition.x - t.textWidth / 2,
//   y: pointerPosition.y - t.textHeight / 2,
//   fontFamily: t.attrs.fontFamily,
//   fontSize: t.attrs.fontSize,
//   text: t.attrs.text,
//   fill: t.attrs.fill
//   // name: increment name + 1?
//   // key: target.ref + 1
// });

class Graphics extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      connections: [],
      currentObjectG: {
        object_id: 0,
        location_id: 0, 
        short_name: "", 
        long_name: "", 
        description: "", 
        object_type: "",
        x_coordinate: 0,
        y_coordinate: 0,
        image_x: 0,
        image_y: 0
      }

    }

    this.handleDragImageStart = this.handleDragImageStart.bind(this)
    this.handleDragImageEnd = this.handleDragImageEnd.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseOut= this.handleMouseOut.bind(this)
  }

  componentDidMount() {
    console.log("graphics mount");    
  }



  
  handleClick = e => {
    console.log("clicked.");
    console.log("handleClick in Graphics.js, object_id", e.currentTarget.attrs.object_id);
    
    let curObj = this.props.objects.filter(object => object.object_id === e.currentTarget.attrs.object_id);
    console.log("curObj right before setState: ", curObj);
    this.setState(
      prevState => (
          { 
              currentObjectG: curObj[0]
          }
      )
    );
    console.log("currentObjectG after setState: ", this.state.currentObjectG.object_id);
    this.props.handleShowModalG(true);
  }

  handleMouseMove = e => { 
    console.log("handleMouseMove (mouse move): ", e);
    stage = e.target.getStage();
    mousePos = stage.getPointerPosition();

    // tooltip.position({
    //   x: mousePos.x + 5,
    //   y: mousePos.y + 5
    // });

    // tooltip.text(e.target.attrs.text);
    // tooltip.show();


    // console.log("get stage ", e.target.getStage);
    // e.target.getStage().batchdraw();
    // console.log("tiptext: ", tooltip.text);
    // tooltipLayer.batchDraw();
    console.log("mouse move - object id: ", e.target.attrs.object_id, " ", e.target.attrs.short_name);
  };


  handleMouseOut = e => { 
    // tooltip.hide();
    e.target.getStage().draw();
    console.log("mouse out - object id: ", e.target.attrs.object_id, " ", e.target.attrs.short_name)

  };


  handleDragImageStart = e => {
    console.log("drag image start: ", e);
    origX = e.target.attrs.x;
    origY = e.target.attrs.y;
    e.target.setAttrs({
      shadowOffset: {
        x: SHADOW_OFFSET,
        y: SHADOW_OFFSET
      }
    });
  };  // end handleDragImageStart

  handleDragImageEnd = e => {
    console.log("drag image end: ", e);
    console.log(origX, " ", origY);

    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();

    console.table({x: pointerPosition.x, y: pointerPosition.y});
    console.log("new - objects length before add is ", this.props.objects.length);
    console.log("target is: ", e.target);
    console.log("location id: " + this.props.location_id);
    console.log("short name: " + e.target.attrs.short_name);
    console.log("object type id: " + e.target.attrs.object_type_id);

    const im_x = Math.round(pointerPosition.x);
    const im_y = Math.round(pointerPosition.y);

    var raw = JSON.stringify({
      "location_id":this.props.location_id, 
      "short_name":e.target.attrs.short_name,
      "long_name":"a",
      "description":"a",
      "object_type_id": e.target.attrs.object_type_id,
      "x_coordinate": 1,
      "y_coordinate": 1,
      "image_x": im_x,
      "image_y": im_y,
    });

    // console.log("props: ", this.props);
    this.props.handleNewObject(raw);

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

  }; // end handleDragImageEnd//



  onClose = () => {
      console.log("closing modal show - ", this.props.showModalG);
      this.props.handleShowModalG(false);
  }


onOpen = () => {
    console.log("opening modal show - ", this.props.showModalG);
    this.props.handleShowModalG(true);
}

onUpdate = () => {
    console.log("Graphics.js onUpdate - description: ", this.state.currentObjectG.description)
    var raw = JSON.stringify({
        "object_id": this.state.currentObjectG.object_id,
        "location_id":this.state.currentObjectG.location_id, 
        "short_name":this.state.currentObjectG.short_name,
        "long_name":this.state.currentObjectG.long_name,
        "description":this.state.currentObjectG.description,
        "object_type_id": this.state.currentObjectG.object_type_id,
        "x_coordinate": 0,
        "y_coordinate": 0,
        "image_x": this.state.currentObjectG.image_x,
        "image_y": this.state.currentObjectG.image_y,
      });
      
    // console.log(JSON.parse(raw));
    // console.log("object_id: ", JSON.parse(raw).object_id);
    // console.log("long_name: ", JSON.parse(raw).long_name);
    // console.log("description: ", JSON.parse(raw).description);

    // const isCurrentObjectId = object => object.object_id === JSON.parse(raw).object_id;
    // const index = this.props.objects.findIndex(isCurrentObjectId)
    // console.log("index: ", index);
      
    // console.log("valdyn says Graphics.js onUpdate index is: ", index);
    this.props.handleUpdateObject(raw);
    // console.log("updated from Obj.js! raw : ", raw);
    this.onClose();
}

onDelete = (object_id) => {
    this.props.handleDeleteObject(object_id);
    console.log("deleted from Graphics.js! id: ", object_id);
    this.onClose();
}

onChange = (e) => {
  console.log("currentTarget: ", e.currentTarget.name);
  console.log("currentValue: ", e.currentTarget.value);

  const currentObjectG = {
      ...this.state.currentObjectG, 
      [e.currentTarget.name]: e.currentTarget.value
  }
  console.log("onChange currentObjectG before setState: ", currentObjectG);

  this.setState(
      {
      currentObjectG
      }
  );
  console.log("Graphics.js onChange object: ", currentObjectG);
  console.log("Graphics.js onChange object from state: ", this.state.currentObjectG);

}

onShowConnections = (e) => {
  console.log("showing connections in Graphics.js, location id " + this.props.location_id);

  // let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

  let headers = config.api.headers;

  const url0 = config.api.invokeUrl + '/edges/location/' + this.props.location_id;

  fetch(url0, {
    method: "GET",
    headers
  }).then(response => {
    return response.json();
  }).then(result => {

    this.getPrimarySecondary();
    this.setState(
      {
          connections: result.body.data
      }
    );
      this.scaleConnections2Canvas();
      console.log("list of connections: ", this.state.connections);
  });
}

onDeleteConnection = (obj) => {
  console.log("deleting connection from obj: ", obj);
}

onAddConnection = (obj) => {
  console.log("adding connection to obj: ", obj);
}

getPrimarySecondary = () => {

  primary = this.props.objects.find(element =>  element.short_name === "primary");
  secondary = this.props.objects.find(element => element.short_name === "secondary");

  x_scale = (secondary.x_coordinate - primary.x_coordinate) / (secondary.image_x - primary.image_x);
  y_scale = (secondary.y_coordinate - primary.y_coordinate) / (secondary.image_y - primary.image_y);

}
scaleConnections2Canvas = () => {

  let tempConnections = this.state.connections;
  tempConnections.map((key) => (

    console.log("v1 object_id: ", key.v1.object_id),
    console.log("v2 object_id: ", key.v2.object_id),
    console.log("before"),
    console.log("edge v1: " + key.v1.x + " " + key.v1.y),
    console.log("edge v2: " + key.v2.x + " " + key.v2.y),
    console.log("after"),
    key.v1.x = Math.round(key.v1.x * (1/x_scale) + primary.image_x),
    key.v1.y = Math.round(key.v1.y * (1/y_scale) + primary.image_y),
    key.v2.x = Math.round(key.v2.x * (1/x_scale) + primary.image_x),
    key.v2.y = Math.round(key.v2.y * (1/y_scale) + primary.image_y),
    console.log("edge v1: " + key.v1.x + " " + key.v1.y),
    console.log("edge v2: " + key.v2.x + " " + key.v2.y)

  ))

  this.setState(
    {
        connections: tempConnections
    }
  );

  console.log("after conversion: ", this.state.connections);

}


  render() {

    // const { object_id, short_name, long_name, description, object_type_id, object_type, image_x, image_y, location_id } = this.props.objects;
    // console.log("jason says current objectG in Graphics.js: ", this.state.currentObjectG);
    // console.log("valdyn says current object_id in Graphics.js: ", this.state.currentObjectG.object_id);

    

    return (
      <div className="graphics">
        
        <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} >
          <Layer name="background">

              {this.props.location.map((key) => (
                  <MapBackground key={key.location_id} img={key.canvas_image} background_offset={BACKGROUND_OFFSET}/>
              ))}

          </Layer>
          <Layer name="main">
          {/* <ModalSetGrid objects ={this.props.objects} />  */}
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
                handleDragStart={this.handleDragImageStart}
                handleDragEnd={this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <CircleGreySm x={X[1] + CIRC_RADIUS} y={Y[0] + CIRC_RADIUS} />
              <CircleGreySm
                x={X[1] + CIRC_RADIUS} 
                y={Y[0] + CIRC_RADIUS} 
                name="CircGrySm"
                handleDragStart={this.handleDragImageStart}
                handleDragEnd={this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <CircleGreenSm x={X[2] + CIRC_RADIUS} y={Y[0] + CIRC_RADIUS} />
              <CircleGreenSm 
                x={X[2] + CIRC_RADIUS} 
                y={Y[0] + CIRC_RADIUS} 
                name="CircGrnSm"
                handleDragStart={this.handleDragImageStart}
                handleDragEnd={this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <CircleRedLg x={X[0] + CIRC_RADIUS} y={Y[1] + CIRC_RADIUS} />
              <CircleRedLg 
                x={X[0] + CIRC_RADIUS} 
                y={Y[1] + CIRC_RADIUS} 
                name="CircRdLg"
                handleDragStart={this.handleDragImageStart}
                handleDragEnd={this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <CircleGreyLg x={X[1] + CIRC_RADIUS} y={Y[1] + CIRC_RADIUS} />
              <CircleGreyLg
                x={X[1] + CIRC_RADIUS} 
                y={Y[1] + CIRC_RADIUS} 
                name="CircGryLg"
                handleDragStart={this.handleDragImageStart}
                handleDragEnd={this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <CircleGreenLg x={X[2] + CIRC_RADIUS} y={Y[1] + CIRC_RADIUS} />
              <CircleGreenLg 
                x={X[2] + CIRC_RADIUS} 
                y={Y[1] + CIRC_RADIUS} 
                name="CircGrnLg"
                handleDragStart={this.handleDragImageStart}
                handleDragEnd={this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <SquareRed x={X[0]} y={Y[2]} />
              <SquareRed
                x={X[0]}
                y={Y[2]}
                name="Rect2"
                handleDragStart={this.handleDragImageStart}
                handleDragEnd={this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <SquareGrey x={X[1]} y={Y[2]} />
              <SquareGrey
                x={X[1]}
                y={Y[2]}
                name="Rect2"
                handleDragStart={this.handleDragImageStart}
                handleDragEnd={this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <SquareGreen x={X[2]} y={Y[2]} />
              <SquareGreen
                x={X[2]}
                y={Y[2]}
                name="Rect2"
                handleDragStart={this.handleDragImageStart}
                handleDragEnd={this.handleDragImageEnd}
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
             
              <Generic x={X[0] + GENERIC_OFFSET} y={Y[12] + GENERIC_OFFSET} />
              <Generic x={X[0] + GENERIC_OFFSET} y={Y[12] + GENERIC_OFFSET} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Path x={X[1] + PATH_OFFSET} y={Y[12] + PATH_OFFSET} />
              <Path x={X[1] + PATH_OFFSET} y={Y[12] + PATH_OFFSET} 
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

              <Primary x={X[2] + PATH_OFFSET} y={Y[13] + PATH_OFFSET} />
              <Primary x={X[2] + PATH_OFFSET} y={Y[13] + PATH_OFFSET} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
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

              <Secondary x={X[2] + PATH_OFFSET} y={Y[14] + PATH_OFFSET} />
              <Secondary x={X[2] + PATH_OFFSET} y={Y[14] + PATH_OFFSET} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />   

              <Plus x={X[0]} y={Y[15]}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <Minus x={X[1]} y={Y[15] + 6}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <HandPaper x={X[2]} y={Y[15]}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />

              <RenderGeneric
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />
              <RenderPath 
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />
              <RenderDoor
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderElevator
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />
            
              <RenderStairs
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />
            
              <RenderCoffee
                objects={this.props.objects}
                handleClick={this.handleClick}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
              />

              <RenderUtensils
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderRestroom
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderMale
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderFemale
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderHeartbeat
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderRecycle
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderFireExtinguisher
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderMapMarker
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderDoorOpen
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderDoorClosed
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderSquareRed
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderSquareGrey
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderSquareGreen
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderCircleRedLg
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderCircleGreyLg
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderCircleGreenLg
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderCircleRedSm
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderCircleGreySm
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderCircleGreenSm
                objects={this.props.objects}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut} 
                handleClick={this.handleClick}
              />

              <RenderConnections
                connections={this.state.connections}
                handleClick={this.handleClick}
                // getPrimarySecondary={this.getPrimarySecondary}
              />

          </Layer>
          <Layer>
            <Tooltip                 
              />
          </Layer>
        </Stage>

        <Modal show={this.props.showModalG} onHide={this.onClose}>
          <Modal.Header closeButton>
              <Modal.Title>Object ID: {this.state.currentObjectG.object_id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {/* <label htmlFor="object_type">
                  <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Object Type</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                          aria-label="object_type"
                          aria-describedby="basic-addon1"
                          defaultValue={this.state.currentObjectG.object_type.short_name}
                          readOnly="readonly"
                      />
                  </InputGroup>
              </label> */}
              <label htmlFor="short_name">
                  <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Short Name</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                          aria-label="short_name"
                          aria-describedby="basic-addon1"
                          name="short_name"
                          defaultValue={this.state.currentObjectG.short_name}
                          readOnly="readonly"

                      />
                  </InputGroup>
              </label>
              <label htmlFor="long_name">
                  <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Long Name</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                          placeholder="enter long name"
                          aria-label="long_name"
                          aria-describedby="basic-addon1"
                          name="long_name"
                          defaultValue={this.state.currentObjectG.long_name}
                          onChange={this.onChange}
                      />
                  </InputGroup>
              </label>
              <label htmlFor="description">
                  <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                          placeholder="no description"
                          aria-label="description"
                          aria-describedby="basic-addon1"
                          name="description"
                          defaultValue={this.state.currentObjectG.description}
                          onChange={this.onChange}

                      />
                  </InputGroup>
              </label>
              <label htmlFor="image_x">
                  <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Image Location X</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                          placeholder="no x-coordinate"
                          aria-label="image_x"
                          aria-describedby="basic-addon1"
                          name="image_x"
                          defaultValue={this.state.currentObjectG.image_x}
                          readOnly="readonly"
                      />
                  </InputGroup>
              </label>
              <label htmlFor="image_y">
                  <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Image Location Y</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                          placeholder="no y-coordinate"
                          aria-label="image_y"
                          aria-describedby="basic-addon1"
                          name="image_y"
                          defaultValue={this.state.currentObjectG.image_y}
                          readOnly="readonly"
                      />
                  </InputGroup>
              </label>
              <label htmlFor="location_id">
                  <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Location ID</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                          //placeholder="no y-coordinate"
                          aria-label="location_id"
                          aria-describedby="basic-addon1"
                          name="location_id"
                          defaultValue={this.state.currentObjectG.location_id}
                          readOnly="readonly"
                          //onChange={this.handleChange}
                      />
                  </InputGroup>
              </label>
              <hr />
              <Button variant="danger" onClick={() => this.onDelete(this.state.currentObjectG.object_id)}>Delete</Button>
              <DropdownButton variant="info" id="dropdown-basic-button" title="Connections">
                <Dropdown.Item href="#" onClick={() => this.onAddConnection(this.state.currentObjectG.object_id)}>Add connection</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => this.onDeleteConnection(this.state.currentObjectG.object_id)}>Delete connection</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => this.onShowConnections()}>Show all connections</Dropdown.Item>
              </DropdownButton>

          </Modal.Body>
          <Modal.Footer>
              <Button onClick={this.onClose}>Close</Button>
              <Button onClick={this.onUpdate}>Update</Button>
          </Modal.Footer>
      </Modal>
      </div>
    )
  }
}

export default Graphics;
