import React from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

const ELEVATOR_SRC = '/img/icons/elevator.png'; 

const Elevator = (props) => {
    const [image] = useImage(ELEVATOR_SRC);
    const handleElevatorClick = (e) => {
      console.log('elevator clicked');
    }
    return <Image 
            x={props.x} 
            y={props.y} 
            scaleX={0.04} 
            scaleY={0.04} 
            draggable              
            onDragStart={props.handleDragImageStart}
            onDragEnd={props.handleDragImageEnd}
            onClick={handleElevatorClick}
          image={image} />;
  };


  export default Elevator;


  {/* <div>Stairs and Elevator Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
