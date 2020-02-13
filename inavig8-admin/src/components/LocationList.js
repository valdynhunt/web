import React from 'react'
import Import from './Import'
import { Modal, Button, InputGroup, FormControl, Dropdown, DropdownButton, Image } from 'react-bootstrap/'
import './LocationList.css'

class Location extends React.Component {

    state = {
        showAddModal: false,
        showDeleteModal: false,
        showUpdateModal: false,
        currentLocation: null,
        disabled: false,
        updateLocationDropdown: null,
        image: null,
        uploadImagePreview: null,
    }

    checkForChildren = (parent_id) => {
        //console.log("parent_id: ", parent_id);
        // TEMP!!!! REMOVE THIS AFTER TESTING!!!!!!
        // let headers = {
        //     "Content-Type": "application/json",
        //     "x-api-key": "Il5Hx547OB3VWglNlnYM35XJL4sv1ok57bJakZav",
        //     "Authorization": "dummy",
        // };
        // let url = "https://6ifyh4p4z2.execute-api.us-west-2.amazonaws.com/dev";
    
        // fetch(url + '/locations/parent/' + parent_id, {
        //     method: "GET",
        //     headers,
        // }).then(response => {
        //     return response.json();
        // }).then(result => {
        //     console.log("result", result.body.data[0]);
        //     if (result.body.data[0]) {
        //         console.log("location id: " + parent_id + " is returning true");
        //         this.setState(
        //             {
        //                 disabled: true
        //             }
        //         );
        //     } else {
        //         console.log("location id: " + parent_id + " is returning false");
        //         this.setState(
        //             {
        //                 disabled: false
        //             }
        //         );
        //     }
        // });
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

    onDeleteOpen = (location_id) => {
        console.log("deleting location...");
        this.props.handleDeleteLocation(location_id);
    }

    handleImportImage = (uploadImage) => {
        this.props.handleImportImage(uploadImage);
    }

    handleImagePreview = (imagePath) => {
        console.log("handleImagePreview: ", this.state.uploadImagePreview);
        let read = new FileReader();
        read.onloadend = () => {
            this.setState(
                {
                    uploadImagePreview: imagePath,
                }
            );
        }
    }


    onSelect = (e) => {
        console.log("e: ", e);
        this.setState(
            {
                updateLocationDropdown: null,
            }
        );
    }

    onCreate = () => {
        let currentLocation = {
            "latitude": 0.0,
            "address_id": this.props.details.address_id,
            "description": this.state.currentLocation.description,
            "min_x_coordinate": 0,
            "max_x_coordinate": 0,
            "active": false,
            "long_name": this.state.currentLocation.long_name,
            "location_type_id": this.props.details.location_type_id,
            "scale_ft": 1.0,
            "short_name": this.state.currentLocation.short_name,
            "primary_object_id": 1,
            "min_y_coordinate": 0,
            "max_y_coordinate": 0,
            "longitude": 0.0
        };
        
        this.props.handleCreateLocation(currentLocation, this.props.details.location_id);
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

        const { location_id, long_name, short_name, description, canvas_image } = this.props.details;
        
        this.checkForChildren(location_id);
        
        let $imagePreview = null;
        if (canvas_image) {
            $imagePreview = (<Image src={canvas_image} alt={long_name} title={long_name} thumbnail />);
        } else {
            $imagePreview = (<p>No image Uploaded</p>);
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
                    <Dropdown.Item 
                        disabled={ this.state.disabled }
                        // TODO: change this to react-boostrap Alerts!!
                        onClick={
                            (e) => { 
                                if (window.confirm('By deleting this location, you will be deleting any objects associated with this location. Are you sure you want to delete this location (' + long_name + ')?')) this.onDeleteOpen(location_id) 
                            }
                        }
                        >
                        delete this location
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href={`/design/${location_id}`}>map this location</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={this.onAddOpen}>add new sub-location</Dropdown.Item>
                    </DropdownButton>
                </li>

                {/* Add Location Modal */}
                <Modal variant="danger" show={this.state.showAddModal} onHide={this.onClose}>
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
                    <label htmlFor="location_type_id">
                        <InputGroup className="mb-3">
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Location Type"
                                id="input-group-dropdown-1"
                            >
                                <Dropdown.Item>Building</Dropdown.Item>
                                <Dropdown.Item>Room</Dropdown.Item>
                                <Dropdown.Item>Hallway</Dropdown.Item>
                            </DropdownButton>
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
                    <label htmlFor="location_type_id">
                        <InputGroup className="mb-3">
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title="Location Type"
                                id="input-group-dropdown-1"
                            >
                                <Dropdown.Item>Building</Dropdown.Item>
                                <Dropdown.Item>Room</Dropdown.Item>
                                <Dropdown.Item>Hallway</Dropdown.Item>
                            </DropdownButton>
                            <FormControl 
                                aria-describedby="basic-addon1"
                                //defaultValue={this.props.details.location_type.short_name}
                                defaultValue="test"
                            />
                        </InputGroup>
                    </label>
                    {/* <label htmlFor="location_type_short_name">
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
                                // onChange={this.onChange}
                                readOnly="readonly"
                            />
                        </InputGroup>
                    </label> */}
                    <label htmlFor="canvas_image">
                        <Import 
                            details={this.props.details}
                            onImport={this.onImport}
                            handleImportImage={this.handleImportImage}
                            handleImagePreview={this.handleImagePreview}
                        />
                    </label>
                    <div className="imagePreview">
                        { $imagePreview }
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