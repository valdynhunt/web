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
import RenderShortestPath from './render/RenderShortestPath';
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

const TOOLBAR_WIDTH = 120;
const TOOLBAR_HEIGHT = 650;
const TOOLBAR_X = 0;
const TOOLBAR_Y = 20;
const CIRC_RADIUS = 7;
// const CIRC_RADIUS_SM = 3;
const SHADOW_OFFSET = 4;
// const FONT_SIZE = 20;
const BACKGROUND_OFFSET = 150;
const GENERIC_OFFSET = 5;
const PATH_OFFSET = 9;
const ZOOM_INCREMENT = 0.05;
const ROTATION_INCREMENT = 45;

const X = [15, 50, 85]; 
const Y = [40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640];


let stage_width = window.innerWidth;
let stage_height = window.innerHeight;

let origX = 0;
let origY = 0;

var stage;
var mousePos;
// let showMe;

let primary;
let secondary;
let x_scale;
let y_scale;

// if (!lastDist) {
//   lastDist = dist;
// }

// var scale = (stage.scaleX() * dist) / lastDist;

// stage.scaleX(scale);
// stage.scaleY(scale);
// stage.batchDraw();
// lastDist = dist;


class Graphics extends React.Component {

  state = {
      visible: false,
      object_id: 0,
      short_name: "",
      stage_scale: 1,
      current_rotation: 0,
      x: 0,
      y: 0,
      add_connection_begin: 0,
      delete_connection_begin: 0,
      shortest_path_begin: 0,
      connections: [],
      shortest_path: [],
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


  componentDidMount() {
    console.log("graphics mount");    
  }


  onZoomIn = e => {
    var newScale = this.state.stage_scale + ZOOM_INCREMENT;
    console.log("zoom in - newScale: ", newScale);
    this.setState(
      prevState => (
          { 
              stage_scale: newScale
          }
      )
    );
    e.target.getStage().draw();
  }


  onZoomOut = e => {
    var newScale = this.state.stage_scale - ZOOM_INCREMENT;
    console.log("zoom out - newScale: ", newScale);
    this.setState(
      prevState => (
          { 
              stage_scale: newScale
          }
      )
    );
    e.target.getStage().draw();
  }

  onRotateCCW = e => {
    var newRotation = this.state.current_rotation - ROTATION_INCREMENT;
    console.log("rotate ccw - newRotation: ", newRotation);
    this.setState(
      prevState => (
          { 
              current_rotation: newRotation
          }
      )
    );
    e.target.getStage().draw();
  }

  onRotateCW = e => {
    var newRotation = this.state.current_rotation + ROTATION_INCREMENT;
    console.log("rotate cw - newRotation: ", newRotation);
    this.setState(
      prevState => (
          { 
              current_rotation: newRotation
          }
      )
    );
    e.target.getStage().draw();
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
    // console.log("handleMouseMove (mouse move): ", e);
    stage = e.target.getStage();
    mousePos = stage.getPointerPosition();

    mousePos.x > BACKGROUND_OFFSET && this.setState(
      {
        visible: true,
        object_id: e.target.attrs.object_id,
        short_name: e.target.attrs.short_name,
        x: mousePos.x,
        y: mousePos.y
      })
    // console.log("mouse move - object id: ", e.target.attrs.object_id, " ", e.target.attrs.short_name);
  };


  handleMouseOut = e => { 
    this.setState(
      {
        visible: false,
        object_id: 0,
        short_name: "",
        x: mousePos.x,
        y: mousePos.y
      })

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
      "x_coordinate": 0,
      "y_coordinate": 0,
      "image_x": im_x,
      "image_y": im_y,
    });

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
          "image_y": this.state.currentObjectG.image_y
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


  onDeleteConnection = (obj_id) => {
    // if first is empty add to first, else add to second
    if (this.state.delete_connection_begin == 0) {
      this.setState(
        {
          add_connection_begin: 0,
          delete_connection_begin: obj_id
        }
      );
    } else {
      // we have both connections - call API
      var params = {
        "source_object_id": this.state.delete_connection_begin,
        "dest_object_id": obj_id,
      };
      
      this.deleteConnection(params);

    }

    console.log("deleting connection from obj: ", obj_id);
  }

  deleteConnection = (params) => {
      // let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
      // JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

      // https://{{api_id}}.execute-api.{{region}}.amazonaws.com/{{path}}/edge/remove-undirected?source_object_id=54&dest_object_id=56
      let query = Object.keys(params)
                  .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                  .join('&');

      //     /edge/set-undirected    
      let headers = config.api.headers;
      console.log("params: ", params);
      const url3 = config.api.invokeUrl + '/edge/remove-undirected?' + query;
      fetch(url3, {
          method: "GET",
          headers
      }).then(response => {
          return response.json();
      }).then(result => {
          console.log("result: ", result);
          this.setState(
            {
              add_connection_begin: 0,
              delete_connection_begin: 0
            }
          );
          this.onShowConnections();

      });
    
  }


  onAddConnection = (obj_id) => {
      // if first is empty add to first, else add to second
      if (this.state.add_connection_begin == 0) {
        this.setState(
          {
            add_connection_begin: obj_id,
            delete_connection_begin: 0
          }
        );
      } else {
      // we have both connections - call API
      var params = {
        "source_object_id": this.state.add_connection_begin,
        "source_location_id":this.state.currentObjectG.location_id, 
        "dest_object_id": obj_id,
        "dest_location_id":this.state.currentObjectG.location_id
      };

      this.addConnection(params);
      

      }
    console.log("adding connection to obj: ", obj_id);
  }


  addConnection = (params) => {
      // let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
      // JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";
      // use config.api.invokeUrlAuth for the url
      
      // https://{{api_id}}.execute-api.{{region}}.amazonaws.com/{{path}}/edge/set-undirected?source_object_id=48&source_location_id=1&dest_object_id=23&dest_location_id=1
      
      let query = Object.keys(params)
                  .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                  .join('&');

      //     /edge/set-undirected    
      let headers = config.api.headers;
      console.log("params: ", params);
      const url3 = config.api.invokeUrl + '/edge/set-undirected?' + query;
      fetch(url3, {
          method: "GET",
          headers
      }).then(response => {
          return response.json();
      }).then(result => {
          console.log("result: ", result);
          this.setState(
            {
              add_connection_begin: 0,
              delete_connection_begin: 0
            }
          );
          this.onShowConnections();

      });

  }


  onShortestPath = (obj_id) => {
    // if first is empty add to first, else add to second
    if (this.state.add_connection_begin === 0) {
      this.setState(
        {
          shortest_path_begin: obj_id
        }
      );
    } else {
    // we have both connections - call API
    var params = {
      "source_object_id": this.state.shortest_path_begin,
      "source_location_id":this.state.currentObjectG.location_id, 
      "dest_object_id": obj_id,
      "dest_location_id":this.state.currentObjectG.location_id
    };

    this.shortestPath(params);

    }
  }


  shortestPath = (params) => {
    // let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
    // JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

    // https://{{api_id}}.execute-api.{{region}}.amazonaws.com/{{path}}/edge/set-undirected?source_object_id=48&source_location_id=1&dest_object_id=23&dest_location_id=1
    
    let query = Object.keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&');

    //     /edge/set-undirected    
    let headers = config.api.headers;
    console.log("params: ", params);
    const url3 = config.api.invokeUrl + '/path/shortest-source-dest?' + query;
    fetch(url3, {
        method: "GET",
        headers
    }).then(response => {
        return response.json();
    }).then(result => {
        console.log("result: ", result);
        this.getPrimarySecondary();
        this.setState(
          {
              shortest_path: result.body.data
          }
        );
          this.scaleShortestPath2Canvas();

    });

  }


  getPrimarySecondary = () => {

    primary = this.props.objects.find(element =>  element.short_name === "location_primary");
    secondary = this.props.objects.find(element => element.short_name === "location_secondary");

    x_scale = (secondary.x_coordinate - primary.x_coordinate) / (secondary.image_x - primary.image_x);
    y_scale = (secondary.y_coordinate - primary.y_coordinate) / (secondary.image_y - primary.image_y);

  }


  scaleConnections2Canvas = () => {

    let tempConnections = this.state.connections;
    tempConnections.map((key) => (

      console.log("v1 object_id: ", key.v1.object_id),
      console.log("v2 object_id: ", key.v2.object_id),
      console.log("primary.image_x: ", primary.image_x),
      console.log("primary.image_x: ", primary.image_y),
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


  scaleShortestPath2Canvas = () => {

    let tempShortestPath = this.state.shortest_path;
    tempShortestPath.map((key) => (

      console.log("v1 object_id: ", key.v1.object_id),
      console.log("v2 object_id: ", key.v2.object_id),
      console.log("primary.image_x: ", primary.image_x),
      console.log("primary.image_x: ", primary.image_y),
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
          shortest_path: tempShortestPath
      }
    );

    console.log("after conversion - shortest_path: ", this.state.shortest_path);

  }


  render() {

    // const { object_id, short_name, long_name, description, object_type_id, object_type, image_x, image_y, location_id } = this.props.objects;
    // console.log("jason says current objectG in Graphics.js: ", this.state.currentObjectG);
    // console.log("valdyn says current object_id in Graphics.js: ", this.state.currentObjectG.object_id);

    return (
      <div className="graphics">
        
        <Stage 
          width={stage_width} 
          height={stage_height} 
          scaleX={1}
          scaleY={1}>

          <Layer 
            name="main"
            scaleX={this.state.stage_scale}
            scaleY={this.state.stage_scale}
            // rotate={this.state.current_rotation}
            draggable>

              {this.props.location.map((key) => (
                  <MapBackground 
                    key={key.location_id} 
                    img={key.canvas_image} 
                    stage_scale={this.state.stage_scale}
                    background_offset={BACKGROUND_OFFSET}
                    />
              ))}

              <RenderConnections
                connections={this.state.connections}
              />

              <RenderShortestPath
                shortest_path={this.state.shortest_path}
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

          </Layer>
          <Layer>

            <Tooltip 
              visible={this.state.visible}  
              object_id={this.state.object_id} 
              short_name={this.state.short_name}
              x={this.state.x}
              y={this.state.y}  
              background_offset={BACKGROUND_OFFSET}         
            />

          </Layer>

          <Layer 
            name="toolbar"
            scaleX={1}
            scaleY={1}>

              <Rect      
                x={0}
                y={0}
                width={120}
                height={680}
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
                handleClick = {this.onRotateCCW}
              />

              <Undo x={X[1]} y={Y[14]}
                handleClick = {this.onRotateCW}
              />

              <Secondary x={X[2] + PATH_OFFSET} y={Y[14] + PATH_OFFSET} />
              <Secondary x={X[2] + PATH_OFFSET} y={Y[14] + PATH_OFFSET} 
                handleDragImageStart = {this.handleDragImageStart} 
                handleDragImageEnd = {this.handleDragImageEnd}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
              />   

              <Plus x={X[0]} y={Y[15]}
                handleClick = {this.onZoomIn}
              />

              <Minus x={X[1]} y={Y[15] + 6}
                handleClick = {this.onZoomOut}
              />

              <HandPaper x={X[2]} y={Y[15]}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}
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
                <Dropdown.Item href="#" onClick={() => this.onAddConnection(this.state.currentObjectG.object_id)}>Add - Begin</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => this.onAddConnection(this.state.currentObjectG.object_id)}>Add - End</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => this.onDeleteConnection(this.state.currentObjectG.object_id)}>Delete - Begin</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => this.onDeleteConnection(this.state.currentObjectG.object_id)}>Delete - End</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => this.onShowConnections()}>Show all connections</Dropdown.Item> 
              </DropdownButton>
              <DropdownButton variant="info" id="dropdown-basic-button" title="Shortest Path">
                <Dropdown.Item href="#" onClick={() => this.onShortestPath(this.state.currentObjectG.object_id)}>Path - Begin</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => this.onShortestPath(this.state.currentObjectG.object_id)}>Path - End</Dropdown.Item>
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
