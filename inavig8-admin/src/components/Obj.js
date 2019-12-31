import React from 'react'
import './Obj.css'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Object extends React.Component {

    state = {
        showModal: false
    }

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

    onUpdate = (raw) => {
        this.props.handleUpdateObject(raw);
        console.log("updated...kidding from Obj.js! raw : ", raw);

    }

    onDelete = (object_id) => {
        this.props.handleDeleteObject(object_id);
        console.log("deleted...kidding from Obj.js! id: ", object_id);
    }

    handleChange = (e) => {
        console.log("changing: ", e.currentTarget.value);
        let updateObject = {
            ...this.props.details, 
            [e.currentTarget.name]: e.currentTarget.value}
    }
  
    render() {

        const { object_id, short_name, long_name, desc, object_type_id, object_type, image_x, image_y, location_id } = this.props.details;

        return (

            <div>
                <ul className="object-list">
                    <li>Object: {short_name} (id: {object_id})</li>
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
{/* TODO: add on the onChange functions to each field */}
                        <label htmlFor="object_type">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Object Type</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    //placeholder="object_type"
                                    aria-label="object_type"
                                    aria-describedby="basic-addon1"
                                    value={object_type.short_name}
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
                                    //placeholder="short_name"
                                    aria-label="short_name"
                                    aria-describedby="basic-addon1"
                                    ref="short_name"
                                    value={short_name}
                                    onChange={this.handleChange}

                                />
                            </InputGroup>
                        </label>
                        <label htmlFor="long_name">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Long Name</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="no long name"
                                    aria-label="long_name"
                                    aria-describedby="basic-addon1"
                                    name="long_name"
                                    value={long_name}
                                    onChange={this.handleChange}

                                />
                            </InputGroup>
                        </label>
                        <label htmlFor="desc">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="no description"
                                    aria-label="desc"
                                    aria-describedby="basic-addon1"
                                    name="desc"
                                    value={desc}
                                    onChange={this.handleChange}

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
                                    value={image_x}
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
                                    value={image_y}
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
                                    value={location_id}
                                    onChange={this.handleChange}
                                />
                            </InputGroup>
                        </label>
                        <hr />
                        <Button variant="danger" onClick={() => this.onDelete(object_id)}>Delete</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.onClose}>Close</Button>
                        <Button onClick={() => this.onUpdate(this.props.details)}>Update</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );

    }
  
}
  
export default Object