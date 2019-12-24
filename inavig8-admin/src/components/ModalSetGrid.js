import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';



let renderModal = false;

class ModalSetGrid extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
      }
      

    componentDidMount() {            
      
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