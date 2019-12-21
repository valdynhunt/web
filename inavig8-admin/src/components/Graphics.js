import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Konva from 'konva';
import { Stage, Layer, Image, Rect, Text, Circle, Star } from 'react-konva';
import useImage from 'use-image';
import MapBackground from './MapBackground'
import config from '../config.json';
import ModalSetGrid from './ModalSetGrid';
// import DoorClosed from './icons/DoorClosed';


const STAGE_WIDTH = window.innerWidth;
const STAGE_HEIGHT = window.innerHeight;
const TOOLBAR_WIDTH = 120;
const TOOLBAR_HEIGHT = 650;
const TOOLBAR_X = 10;
const TOOLBAR_Y = 30;
const RECT_WIDTH = 20;
const RECT_HEIGHT = 20;
const CIRC_RADIUS = 10;
const SHADOW_OFFSET = 4;
const FONT_SIZE = 20;

const COFFEE_SRC = '/img/icons/coffee.png';
const UTENSILS_SRC = '/img/icons/utensils.png';
const RESTROOM_SRC = '/img/icons/restroom.png'; //
const MALE_SRC = '/img/icons/male.png'; //
const FEMALE_SRC = '/img/icons/female.png'; //
const HEARTBEAT_SRC = '/img/icons/heartbeat.png';
const RECYCLE_SRC = '/img/icons/recycle.png';
const FIRE_EXTINGUISHER_SRC = '/img/icons/fire-extinguisher.png';
const HAND_PAPER_SRC = '/img/icons/hand-paper.png';
const MAP_MARKER_SRC = '/img/icons/map-marker.png';
const DOOR_CLOSED_SRC = '/img/icons/door-closed.png';
const DOOR_OPEN_SRC = '/img/icons/door-open.png';
const IMAGE_SRC = '/img/icons/image-regular.png';
const SQUARE_SRC = '/img/icons/square.png';
const PENCIL_ALT_SRC = '/img/icons/pencil-alt.png';
const DRAW_POLYGON_SRC = '/img/icons/draw-polygon.png'; //
const REDO_SRC = '/img/icons/redo-alt.png';
const UNDO_SRC = '/img/icons/undo-alt.png';
const PLUS_SRC = '/img/icons/plus.png';
const MINUS_SRC = '/img/icons/minus.png';

const X = [25, 60, 90]; 
const Y = [50, 90, 130, 170, 210, 250, 290, 330, 370, 410, 450, 490, 530, 570, 610, 650];

let origX = 0;
let origY = 0;

var stage;
var mousePos;
var tooltipLayer = new Konva.Layer();
var tooltip = new Konva.Text({
  text: '',
  fontFamily: 'Calibri',
  fontSize: 18,
  padding: 5,
  textFill: 'white',
  fill: 'black',
  alpha: 0.75,
  visible: false
})

const handleClick = e => { 
  // open sidebar with focus - show delete or edit buttons
  console.log("clicked obj ", e.target)
};

const FireExtinguisher = () => {
  const [image] = useImage(FIRE_EXTINGUISHER_SRC);
  const handleFireExtinguisherClick = (e) => {
    console.log('fire extinguisher clicked');
  }
  return <Image 
          x={X[0]} 
          y={Y[9]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={this.handleDragImageStart}
          // onDragEnd={this.handleDragImageEnd}
          onClick={handleFireExtinguisherClick}
        image={image} />;
};

const MapMarker = () => {
  const [image] = useImage(MAP_MARKER_SRC);
  const handleMapMarkerClick = (e) => {
    console.log('map marker clicked');
  }
  return <Image 
          x={X[0]} 
          y={Y[10]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={this.handleDragImageStart}
          // onDragEnd={this.handleDragImageEnd}
          onClick={handleMapMarkerClick}
        image={image} />;
};

const ImageRegular = () => {
  const [image] = useImage(IMAGE_SRC);
  const handleImageRegularClick = (e) => {
    console.log('image regular clicked');
  }
  return <Image 
          x={X[0]} 
          y={Y[11]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={this.handleDragImageStart}
          // onDragEnd={this.handleDragImageEnd}
          onClick={handleImageRegularClick}
        image={image} />;
};

const Square = () => {
  const [image] = useImage(SQUARE_SRC);
  const handleSquareClick = (e) => {
    console.log('square clicked');
  }
  return <Image 
          x={X[0]} 
          y={Y[12]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={this.handleDragImageStart}
          // onDragEnd={this.handleDragImageEnd}
          onClick={handleSquareClick}
        image={image} />;
};

const Pencil = () => {
  const [image] = useImage(PENCIL_ALT_SRC);
  const handlePencilClick = (e) => {
    console.log('pencil clicked');
  }
  return <Image 
          x={X[0]} 
          y={Y[13]} 
          scaleX={0.04} 
          scaleY={0.04} 
          onClick={handlePencilClick}
        image={image} />;
};

const Redo = () => {
  const [image] = useImage(REDO_SRC);
  const handleRedoClick = e => { 
    // open sidebar with focus - show delete or edit buttons
    console.log("rotate cw ", e.target)
  };
  return <Image 
          x={X[0]} 
          y={Y[14]} 
          scaleX={0.04} 
          scaleY={0.04}            
          onClick={handleRedoClick}
        image={image} />;
};

const Undo = () => {
  const [image] = useImage(UNDO_SRC);
  const handleUndoClick = e => { 
    // open sidebar with focus - show delete or edit buttons
    console.log("rotate ccw ", e.target)
  };
  return <Image 
          x={X[1]} 
          y={Y[14]} 
          scaleX={0.04} 
          scaleY={0.04} 
          onClick={handleUndoClick}
        image={image} />;
};

const Plus = () => {
  const [image] = useImage(PLUS_SRC);
  const handlePlusClick = e => { 
    // open sidebar with focus - show delete or edit buttons
    console.log("zoom in ", e.target)
  };
  return <Image 
          x={X[0]} 
          y={Y[15]} 
          scaleX={0.04} 
          scaleY={0.04} 
          onClick={handlePlusClick}
        image={image} />;
};

const Minus = () => {
  const [image] = useImage(MINUS_SRC);
  const handleMinusClick = e => { 
    // open sidebar with focus - show delete or edit buttons
    console.log("zoom out ", e.target)
  };
  return <Image 
          x={X[1]} 
          y={Y[15]} 
          scaleX={0.04} 
          scaleY={0.04} 
          onClick={handleMinusClick}
        image={image} />;
};

const HandPaper = () => {
  const [image] = useImage(HAND_PAPER_SRC);
  const handleHandPaperClick = e => { 
    // open sidebar with focus - show delete or edit buttons
    console.log("pan mode ", e.target)
  };
  return <Image 
          x={X[2]} 
          y={Y[15]} 
          scaleX={0.04} 
          scaleY={0.04} 
          onClick={handleHandPaperClick}
        image={image} />;
};

const Heartbeat = (props) => {
  const [image] = useImage(HEARTBEAT_SRC);
  const handleHeartbeatClick = (e) => {
    console.log('heartbeat clicked');
  }
  return <Image 
          x={X[0]} 
          y={Y[7]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={this.handleDragImageStart}
          // onDragEnd={this.handleDragImageEnd}
          onClick={handleHeartbeatClick}
        image={image} />;
};



const Recycle = () => {
  const [image] = useImage(RECYCLE_SRC);
  const handleRecycleClick = (e) => {
    console.log('recycle clicked');
  }
  return <Image 
          x={X[0]} 
          y={Y[8]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={this.handleDragImageStart}
          // onDragEnd={this.handleDragImageEnd}
          onClick={handleRecycleClick}
        image={image} />;
};

const Utensils = () => {
  const [image] = useImage(UTENSILS_SRC);
  const handleUtensilsClick = (e) => {
    console.log('utensils clicked');
  }
  return <Image 
          x={X[0]} 
          y={Y[5]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={this.handleDragImageStart}
          // onDragEnd={this.handleDragImageEnd}
          onClick={handleUtensilsClick}
        image={image} />;
};

const Coffee = () => {
  const [image] = useImage(COFFEE_SRC);
  const handleCoffeeClick = (e) => {
    console.log('coffee clicked');
  }
  return <Image 
          x={X[0]} 
          y={Y[4]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={this.handleDragImageStart}
          // onDragEnd={this.handleDragImageEnd}
          onClick={handleCoffeeClick}
        image={image} />;
};

const DoorOpen = () => {
  const [image] = useImage(DOOR_OPEN_SRC);
  const handleDoorOpenClick = (e) => {
    console.log('door open clicked');
  }
  return <Image 
          x={X[2]} 
          y={Y[14]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={this.handleDragImageStart}
          // onDragEnd={this.handleDragImageEnd}
          onClick={handleDoorOpenClick}
        image={image} />;
};

const DoorClosed = () => {
  const [image] = useImage(DOOR_OPEN_SRC);
  const handleDoorClosedClick = (e) => {
    console.log('door closed clicked');
  }
  return <Image 
          x={X[2]} 
          y={Y[14]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={handleDragImageStart}
          // onDragEnd={handleDragImageEnd}
          onClick={handleDoorClosedClick}
        image={image} />;
};

const DrawPolygon = () => {
  const [image] = useImage(DRAW_POLYGON_SRC);
  const handleDrawPolygonClick = (e) => {
    console.log('draw polygon clicked');
  }
  return <Image 
          x={X[1]} 
          y={Y[13]} 
          scaleX={0.04} 
          scaleY={0.04} 
          onClick={handleDrawPolygonClick}
        image={image} />;
};

const Restroom = () => {
  const [image] = useImage(RESTROOM_SRC);
  const handleRestroomClick = (e) => {
    console.log('restroom clicked');
  }
  return <Image 
          x={X[0]} 
          y={Y[2]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={this.handleDragImageStart}
          // onDragEnd={this.handleDragImageEnd}
          onClick={handleRestroomClick}
        image={image} />;
};

const Male = () => {
  const [image] = useImage(MALE_SRC);
  const handleMaleClick = (e) => {
    console.log('male clicked');
  }
  return <Image 
          x={X[1]} 
          y={Y[2]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={this.handleDragImageStart}
          // onDragEnd={this.handleDragImageEnd}
          onClick={handleMaleClick}
        image={image} />;
};

const Female = () => {
  const [image] = useImage(FEMALE_SRC);
  const handleFemaleClick = (e) => {
    console.log('female clicked');
  }
  return <Image 
          x={X[2]} 
          y={Y[2]} 
          scaleX={0.04} 
          scaleY={0.04} 
          draggable              
          // onDragStart={this.handleDragImageStart}
          // onDragEnd={this.handleDragImageEnd}
          onClick={handleFemaleClick}
        image={image} />;
};


// let newCirc = (t, pointerPosition) => ({

//   x: pointerPosition.x - t.attrs.radius,
//   y: pointerPosition.y - t.attrs.radius,
//   radius: t.attrs.radius,
//   fill: t.attrs.fill,
//   stroke: t.attrs.stroke
//   // name: 
//   // key: target.ref + 1
// });

let newImage = (t, pointerPosition) => ({
  // fetch new location_id?
  location_id: 7,  // fetch it
  key: 7, // location_id

  // pop up modal to input short_name and description
  short_name: "fooImage",
  description: "foo2Image",
  long_name: "fooeyImage",
  active: "true", // can we just make this a default on the creation of new objects?
  
  // x and y are pixel ref
  x: pointerPosition.x - t.attrs.radius,
  y: pointerPosition.y - t.attrs.radius,

  // x_coordinate and y_coordinate are relative coords
  x_coordinate: 2,
  y_coordinate: 3,
  
  object_type_id: 1,
  
  // lat and long are only set for primary or secondary objects - does each floor need them?
  latitude: 0,
  longitude: 0,

  image: t.attrs.image,
  fill: t.attrs.fill,
  stroke: t.attrs.stroke

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



class Graphics extends Component {

  constructor() {
    super()
    this.state = {
      objects: [],
      canvasImage: [],
      canvasRect: [],
      canvasCirc: [],
      canvasText: []
    }
  }

  componentDidMount() {

		let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
		JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

		let headers = config.api.headers;
    
    const url2 = config.api.invokeUrl + '/objects/location/' + this.props.location_id;
		fetch(url2, 
		{
			method: "GET",
			headers,
		}).then(response => {
			return response.json();
		}).then(result => {
			this.setState(
				{
					objects: result.body.data
				}
			);
      console.log("objects... ", result.body.data);

    });
    
    
  }



  // display_init_modal = () => {
  //   // console.log("displaying model now...");
  //   var Modal = ReactBootstrap.Modal;


  // }

  // set_location_config = () => {
  //   console.log("checking if primary and secondary are set...");
  //   // if primary and secondary and grid not set, then show modal to input
  //   const foundPrimary = this.state.objects.find(element =>  element.short_name === "primary");
  //   const foundSecondary = this.state.objects.find(element => element.short_name === "secondary");

  //   console.log("foundPrimary: ", foundPrimary);
  //   console.log("foundSecondary: ", foundSecondary);

  //   if (!foundPrimary || !foundSecondary) {
  //     // show model to set them and set grid
  //     display_init_modal();
  //   }
  // }

  handleClick = e => { 
    // open sidebar with focus - show delete or edit buttons
    console.log("clicked obj ", e.target)
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
    tooltipLayer.batchDraw();
    console.log("mouse move ", e.target)
  };


  handleMouseOut = e => { 


    tooltip.hide();
    e.target.getStage().draw();
    console.log("mouse out ", e.target)
  };

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

  handleDragImageStart = e => {
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
  };  // end handleDragImageStart

  handleDragImageEnd = e => {

    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();

    console.table({x: pointerPosition.x, y: pointerPosition.y});

    console.log("new - canvasImage length before add is ", this.state.canvasImage.length);
    console.log("target is: ", e.target);
    console.log("target color is: ", e.target.attrs.fill);

    // call to get new location_id?? and feed in to ...newCirc(location_id, e.target, pointerPosition) ??

    this.setState(prevState => ({
      canvasImage: [...prevState.canvasImage, { ...newImage(e.target, pointerPosition) }]
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
        
        <Stage 
          width={STAGE_WIDTH} 
          height={STAGE_HEIGHT} 
          ref="stage">
          <Layer name="background">
            {/* <ModalSetGrid objects ={this.state.objects}/> */}
            <MapBackground location_id={this.props.location_id} />
            {/* <ToolBar /> */}

          </Layer>
          <Layer name="main">

              <Rect
                x={TOOLBAR_X}
                y={TOOLBAR_Y}
                width={TOOLBAR_WIDTH}
                height={TOOLBAR_HEIGHT}
                fill="white"
                stroke="lightgrey"
              />


              <Restroom />
              <Restroom />
              <Male />
              <Male />
              <Female />
              <Female />

              <FireExtinguisher />
              <FireExtinguisher />
              <MapMarker />
              <MapMarker />
              <ImageRegular />
              <ImageRegular />
              <Square />
              <Square />
              <Pencil />
              <Redo />
              <Undo />
              <Plus />
              <Minus />
              <HandPaper />
              <Heartbeat />
              <Heartbeat />
              <Recycle />
              <Recycle />
              <Utensils />
              <Utensils />
              <Coffee />
              <Coffee />

              <DoorOpen />
              <DoorOpen />
              <DoorClosed />
              <DoorClosed />
              <DrawPolygon />


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

              {/* <Text
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
              /> */}

              {/* <Text
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
              /> */}

              {/* <Text
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
              /> */}

              {/* <Text
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
              /> */}

              {/* <Text
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
              /> */}

              {/* <Text
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
              /> */}



              {/* <Text
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
              /> */}

              {/* <Text
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
              /> */}

              {/* <Text
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
              /> */}
{/* 
              <Text
                x={X[0]}
                y={Y[13]}
                fontFamily="FontAwesome"
                text={PENCIL_ALT}
                fontSize={FONT_SIZE}
                fill="black"
              /> */}
{/* 
              <Text
                x={X[1]}
                y={Y[13]}
                fontFamily="FontAwesome"
                text={DRAW_POLYGON}
                fontSize={FONT_SIZE}
                fill="black"
              /> */}

              {/* <Text
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
              /> */}

{/* <Text
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
              /> */}

              {/* <Text
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
              /> */}


              {this.state.canvasImage.map(  ({ x, y, scaleX, scaleY, image }, key) => ( // maps over this.state.canvas objects

              <Image
                key={key}
                x={x} y={y} 
                scaleX={scaleX} scaleY={scaleY} 
                draggable              
                onDragStart={this.handleDragImageStart}
                onDragEnd={this.handleDragImageEnd}
                onClick={this.handleClick}
              image={image}
                
              />
              ))}


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


{/* location_id, key, short_name, description, long_name, active, x, y, x_coordinate, y_coordinate, object_type_id, latitude, longitude, radius, fill, stroke */}
{this.state.canvasCirc.map(  ({ 
location_id, short_name, description, long_name, 
active, x, y, x_coordinate, y_coordinate, object_type_id, 
latitude, longitude, radius, fill, stroke }) => ( // maps over this.state.canvas objects

<Circle
  key={location_id}
  location_id = {location_id}
  short_name = {short_name}
  descrioption = {description}
  long_name = {long_name}
  active = {active}
  
  x={x}
  y={y}
  x_coordinate = {x_coordinate}
  y_coordinate = {y_coordinate}
  
  object_type_id = {object_type_id}
  latitude = {latitude} 
  longitude = {longitude}

  radius={radius}
  stroke={stroke}
  draggable
  fill={fill}

  shadowOffset={{ x: 1, y: 1 }}
  onDragStart={this.handleDragCircStart}
  onDragEnd={this.handleDragCircEnd}
  onClick={this.handleClick}
  onMouseMove={this.handleMouseMove}
  onMouseOut={this.handleMouseOut}
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

              {this.state.objects.map((key) => (

              <Star
                key={key}
                x={key.image_x}
                y={window.innerHeight - key.image_y}
                numPoints={5}
                innerRadius={5}
                outerRadius={10}
                fill="#89b717"
                opacity={0.8}
                draggable
                rotation={Math.random() * 180}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                onDragStart={this.handleDragStart}
                onDragEnd={this.handleDragEnd}
                />
              ))}


          </Layer>
        </Stage>
      </div>
    )
  }
}


export default Graphics;
