import React from 'react';
import { Modal, Button, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap/'
import './LocationList.css';

class Location extends React.Component {

    state = {
        showAddModal: false,
        showDeleteModal: false,
        showUpdateModal: false,
        newLocation: null,
    }

    onClose = () => {
        this.setState(
            {
                showAddModal: false,
                showDeleteModal: false,
                showUpdateModal: false,
                newLocation: null,
            }
        );
    }

    onAddOpen = () => {
        this.setState(
            {
                showAddModal: true,
                showDeleteModal: false,
                showUpdateModal: false,
                newLocation: null,
            }
        );
    }

    onUpdateOpen = () => {
        this.setState(
            {
                showAddModal: false,
                showDeleteModal: false,
                showUpdateModal: true,
                newLocation: null,
            }
        );
    }

    onDeleteOpen = () => {
        // remove location
    }

    openMap = () => {
        // redirect to design/<location_id>
    }

    onMouseHover = () => {
        this.props.handleHover(this.props.id);
    }

    onCreate = () => {
        let newLocation = JSON.stringify(
            {
                "latitude": 0.0,
                "address_id": this.props.details.address_id,
                "description": this.state.newLocation.description,
                "min_x_coordinate": 3,
                "max_x_coordinate": 5,
                "active": true,
                "long_name": this.state.newLocation.long_name,
                "location_type_id": this.props.details.location_type_id,
                "scale_ft": 1.0,
                "short_name": this.state.newLocation.short_name,
                "primary_object_id": 1,
                "min_y_coordinate": 4,
                "max_y_coordinate": 6,
                "longitude": 0.0,
            }
        );

        console.log("LocationList.js -> onCreate: ", newLocation);
        let parent_location_id = this.props.details.location_id;
        this.props.handleCreate(newLocation, parent_location_id);
        this.onClose();
    }

    onUpdate = (e) => {
        //do something
    }

    onChange = (e) => {
        const newLocation = {
            ...this.state.newLocation, 
            [e.currentTarget.name]: e.currentTarget.value
        }
        this.setState(
            {
                newLocation
            }
        );
    }

    render() {

        const { location_id, long_name, short_name, description, canvas_image, location_type } = this.props.details;
        
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
                    <Dropdown.Item  onClick={this.onUpdateOpen}>edit this location</Dropdown.Item>
                    <Dropdown.Item  onClick={this.onDeleteOpen}>delete this location</Dropdown.Item>
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