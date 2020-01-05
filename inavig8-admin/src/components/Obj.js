import React from 'react'
import './Obj.css'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Object extends React.Component {

    state = {
        // currentIndex: this.props.id,
        // currentObject: this.props.details
    }

    onClose = () => {
        console.log("closing modal show - ", this.props.showModal);
        this.props.handleShowModal(false);
    }

    onOpen = () => {
        console.log("opening modal show - ", this.props.showModal);
        this.onHandleCurrentIndex();
        this.props.handleShowModal(true);
    }

    onHandleCurrentIndex = () => {
        this.props.handleCurrentIndex(this.props.id)
    }

    onUpdate = () => {
console.log("currentIndex: ", this.props.currentIndex);
console.log("currentObject: ", this.props.currentObject);
console.log("description: ", this.props.currentObject.description)
        var raw = JSON.stringify({
            "object_id": this.props.currentObject.object_id,
            "location_id":this.props.currentObject.location_id, 
            "short_name":this.props.currentObject.short_name,
            "long_name":this.props.currentObject.long_name,
            "description":this.props.currentObject.description,
            "object_type_id": this.props.currentObject.object_type_id,
            "x_coordinate": 0,
            "y_coordinate": 0,
            "image_x": this.props.currentObject.image_x,
            "image_y": this.props.currentObject.image_y,
          });
console.log("raw: ", raw);
        this.props.handleUpdateObject(this.props.currentIndex, raw);
        // console.log("updated from Obj.js! raw : ", raw);
        this.onClose();
    }

    onDelete = (object_id) => {
        this.props.handleDeleteObject(object_id);
        console.log("deleted from Obj.js! id: ", object_id);
        this.onClose();
    }

    onChange = (e) => {
        console.log("currentTarget: ", e.currentTarget.name);
        console.log("currentValue: ", e.currentTarget.value);

        const currentObject = {
            ...this.props.currentObject, 
            [e.currentTarget.name]: e.currentTarget.value
        }
        console.log("onChange currentObject before setState: ", currentObject);
        this.setState(
            {
            currentObject
            }
        );
        
        console.log("onChange object after setState: ", this.props.currentObject);
        console.log("currentObject after setState: ", this.props.currentObject.object_id);


    }
  
    render() {

        const { object_id, short_name, long_name, description, object_type_id, object_type, image_x, image_y, location_id } = this.props.currentObject;
        console.log("jason says current objectG in Obj.js: ", this.props.currentObject);
        console.log("valdyn says current object_id in Obj.js: ", this.props.currentObject.object_id);

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
                <Modal show={this.props.showModal} onHide={this.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Object ID: {object_id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="object_type">
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
                        </label>
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
                                    defaultValue={this.props.currentObject.long_name}
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
                                    defaultValue={this.props.currentObject.description}
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
                                    //placeholder="no y-coordinate"
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