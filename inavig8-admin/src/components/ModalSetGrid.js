import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

// import './Dashboard.css';
import useImage from 'use-image';
import { Image } from 'react-konva';
import config from '../config.json';


let renderModal = false;

class ModalSetGrid extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
      }
      

    componentDidMount() {            
      console.log("checking if primary and secondary are set...");
      // if primary and secondary and grid not set, then show modal to input
      const foundPrimary = this.props.objects.find(element =>  element.short_name === "primary");
      const foundSecondary = this.props.objects.find(element => element.short_name === "secondary");
      let scaleIsSet = false;

      console.log("foundPrimary: ", foundPrimary);
      console.log("foundSecondary: ", foundSecondary);
      renderModal = true;
      // while (!foundPrimary || !foundSecondary || !scaleIsSet) {
      //   // show model to set them and set grid
      //   renderModal = true;
      // }
      
    }

    render() {    

      if (renderModal) {
        return (
          <Modal>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
          
            <Modal.Body>
              <p>Input forms for primary and secondary locations go here.</p>
            </Modal.Body>
          
            <Modal.Footer>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Save and Set Grid</Button>
            </Modal.Footer>
          </Modal.Dialog>
          </Modal>
        )
      } 

      return null;
    }
}

export default ModalSetGrid;