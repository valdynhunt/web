import React from 'react';
import { Modal, Button, InputGroup, FormControl, Dropdown, DropdownButton, Image } from 'react-bootstrap/'
import './LocationList.css';

class Location extends React.Component {

    state = {
        showAddModal: false,
        showDeleteModal: false,
        showUpdateModal: false,
        currentLocation: null,
    }

    onClose = () => {
        this.setState(
            {
                showAddModal: false,
                showDeleteModal: false,
                showUpdateModal: false,
                currentLocation: null,
            }
        );
    }

    onAddOpen = () => {
        this.setState(
            {
                showAddModal: true,
                showDeleteModal: false,
                showUpdateModal: false,
                currentLocation: null,
            }
        );
    }

    onUpdateOpen = () => {
        this.setState(
            {
                showAddModal: false,
                showDeleteModal: false,
                showUpdateModal: true,
                currentLocation: {
                    location_id: this.props.details.location_id,
                    short_name: this.props.details.short_name,
                    long_name: this.props.details.long_name,
                    description: this.props.details.description,
                    //canvas_image: this.props.details.canvas_image,
                }
            }
        );
    }

    onDeleteOpen = () => {
        // remove location
        // ISSUE: cannot delete a parent location if there are children linked to it
    }

    openMap = () => {
        // redirect to design/<location_id>
    }

    onCreate = () => {
        let currentLocation = JSON.stringify(
            {
                "latitude": 0.0,
                "address_id": this.props.details.address_id,
                "description": this.state.currentLocation.description,
                "min_x_coordinate": 3,
                "max_x_coordinate": 5,
                "active": true,
                "long_name": this.state.currentLocation.long_name,
                "location_type_id": this.props.details.location_type_id,
                "scale_ft": 1.0,
                "short_name": this.state.currentLocation.short_name,
                "primary_object_id": 1,
                "min_y_coordinate": 4,
                "max_y_coordinate": 6,
                "longitude": 0.0,
            }
        );

        let parent_location_id = this.props.details.location_id;
        this.props.handleCreateLocation(currentLocation, parent_location_id);
        this.onClose();
    }

    onUpdate = (e) => {
        let currentLocation = {
            "location_id": this.state.currentLocation.location_id,
            "description": this.state.currentLocation.description,
            "long_name": this.state.currentLocation.long_name,
            "short_name": this.state.currentLocation.short_name,
        }

        this.props.handleUpdateLocation(currentLocation);
        this.onClose();
    }

    onChange = (e) => {
        const currentLocation = {
            ...this.state.currentLocation, 
            [e.currentTarget.name]: e.currentTarget.value
        }
        this.setState(
            {
                currentLocation
            }
        );
    }

    onMouseHover = () => {
        this.props.handleHover(this.props.id);
    }

    render() {

        const { location_id, long_name, short_name, description, canvas_image, location_type } = this.props.details;

        let $imagePreview = null;
        if (canvas_image) {
            $imagePreview = (<Image src={canvas_image} alt={long_name} title={long_name} thumbnail />);
        } else {
            $imagePreview = (<p>No image to preview</p>);
        }
        
        return (

            <ul className="ul-location-list">
                <a href={`/design/${location_id}`}>
                    <li onMouseOver={this.onMouseHover}>{long_name}</li>
                </a>
                <li>
                    <DropdownButton
                        variant="outline-secondary"
                        title="Action"
                        id="input-group-dropdown-2"
                    >
                    <Dropdown.Item onClick={this.onUpdateOpen}>edit this location</Dropdown.Item>
                    <Dropdown.Item onClick={this.onDeleteOpen}>delete this location</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={this.openMap}>map this location</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={this.onAddOpen}>add new sub-location</Dropdown.Item>
                    </DropdownButton>
                </li>

                {/* Add Location Modal */}
                <Modal show={this.state.showAddModal} onHide={this.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>new location for<br/><b>{long_name}</b></Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                defaultValue=""
                                onChange={this.onChange}
                            />
                        </InputGroup>
                    </label>
                    <label htmlFor="short_name">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Short Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="enter short name"
                                aria-label="short_name"
                                aria-describedby="basic-addon1"
                                name="short_name"
                                defaultValue=""
                                onChange={this.onChange}
                            />
                        </InputGroup>
                    </label>
                    <label htmlFor="description">
                        <InputGroup className="mb-3 wl-100">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="enter description"
                                aria-label="description"
                                aria-describedby="basic-addon1"
                                name="description"
                                defaultValue=""
                                onChange={this.onChange}
                            />
                        </InputGroup>
                    </label>
                    <label htmlFor="canvas_image">
                        <InputGroup className="mb-3 wl-100">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Import Image</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="feature coming soon!"
                                aria-label="canvas_image"
                                aria-describedby="basic-addon1"
                                name="canvas_image"
                                defaultValue=""
                                readOnly="readonly"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">import</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </label>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.onClose}>Close</Button>
                    <Button onClick={this.onCreate}>Create</Button>
                </Modal.Footer>
            </Modal>

            {/* Update Location Modal */}
            <Modal show={this.state.showUpdateModal} onHide={this.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                defaultValue={long_name}
                                onChange={this.onChange}
                            />
                        </InputGroup>
                    </label>
                    <label htmlFor="short_name">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Short Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="enter short name"
                                aria-label="short_name"
                                aria-describedby="basic-addon1"
                                name="short_name"
                                defaultValue={short_name}
                                onChange={this.onChange}
                            />
                        </InputGroup>
                    </label>
                    <label htmlFor="description">
                        <InputGroup className="mb-3 wl-100">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="enter description"
                                aria-label="description"
                                aria-describedby="basic-addon1"
                                name="description"
                                defaultValue={description}
                                onChange={this.onChange}
                            />
                        </InputGroup>
                    </label>
                    <label htmlFor="location_type_short_name">
                        <InputGroup className="mb-3 wl-100">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Location Type</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="enter location type"
                                aria-label="location_type_short_name"
                                aria-describedby="basic-addon1"
                                name="location_type_short_name"
                                defaultValue={location_type.short_name}
                                onChange={this.onChange}
                            />
                        </InputGroup>
                    </label>
                    <label htmlFor="canvas_image">
                        <InputGroup className="mb-3 wl-100">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Import Image</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="feature coming soon!"
                                aria-label="canvas_image"
                                aria-describedby="basic-addon1"
                                name="canvas_image"
                                defaultValue={canvas_image}
                                readOnly="readonly"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">import</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </label>
                    <div className="imagePreview">
                        {$imagePreview}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.onClose}>Close</Button>
                    <Button onClick={this.onUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>

        </ul>
        );
    };

}

export default Location;