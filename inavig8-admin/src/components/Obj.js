import React from 'react'
import './Obj.css'
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap/'

class Object extends React.Component {

    state = {
        showModal: false,
        currentIndex: this.props.id,
        currentObject: this.props.details
    }

    // settingTheState() {
    //     console.log("Obj.js's before setting the state: ", this.state.currentObject);
    //     this.setState(
    //         {
    //             currentIndex: this.props.id,
    //             currentObject: this.props.details
    //         }
    //     );
    //     console.log("Obj.js's after setting the state: ", this.state.currentObject);
    // }

    onClose = () => {
        this.setState(
            {
                showModal: false
            }
        );
    }

    onOpen = () => {
        this.setState(
            {
                showModal: true
            }
        );
    }

    onUpdate = () => {

        var raw = JSON.stringify({
            "object_id": this.state.currentObject.object_id,
            "location_id":this.state.currentObject.location_id, 
            "short_name":this.state.currentObject.short_name,
            "long_name":this.state.currentObject.long_name,
            "description":this.state.currentObject.description,
            "object_type_id": this.state.currentObject.object_type_id,
            "x_coordinate": 0,
            "y_coordinate": 0,
            "image_x": this.state.currentObject.image_x,
            "image_y": this.state.currentObject.image_y,
        });

        this.props.handleUpdateObject(this.state.currentIndex, raw);
        this.onClose();

    }

    onDelete = (object_id) => {
        this.props.handleDeleteObject(object_id);
        this.onClose();
    }

    onChange = (e) => {
        
        const currentObject = {
            ...this.state.currentObject, 
            [e.currentTarget.name]: e.currentTarget.value
        }
        
        this.setState(
            {
                currentObject
            }
        );

    }
  
    render() {
        // this.settingTheState();
        const { object_id, short_name, image_x, image_y, location_id } = this.state.currentObject;
        console.log("Obj.js's this.props.details", this.props.details);
        console.log("Obj.js's  this.state.currentObject", this.state.currentObject);
        console.log("Obj.js's  this.state.currentIndex", this.state.currentIndex);

        return (
            <div>
                <ul className="object-list">
                    <li>{short_name} (id: {object_id})</li>
                    <li>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={this.onOpen}
                        >
                            details
                        </Button>
                    </li>
                </ul>
                <Modal show={this.state.showModal} onHide={this.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Object ID: {object_id}</Modal.Title>
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
                                    defaultValue={object_type.short_name}
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
                                    defaultValue={short_name}
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
                                    defaultValue={this.state.currentObject.long_name}
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
                                    defaultValue={this.state.currentObject.description}
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
                                    defaultValue={image_x}
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
                                    defaultValue={image_y}
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
                                    aria-label="location_id"
                                    aria-describedby="basic-addon1"
                                    name="location_id"
                                    defaultValue={location_id}
                                    readOnly="readonly"
                                    //onChange={this.handleChange}
                                />
                            </InputGroup>
                        </label>
                        <hr />
                        <Button variant="danger" onClick={() => this.onDelete(object_id)}>Delete</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.onClose}>Close</Button>
                        <Button onClick={this.onUpdate}>Update</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );

    }
  
}
  
export default Object