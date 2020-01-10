import React from 'react';
import { Modal, Button, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap/'
import './LocationList.css';

class Location extends React.Component {

    state = {
        showModal: false,
        newLocation: null,
    }

    onClose = () => {
        this.setState(
            {
                showModal: false,
                newLocation: null,
            }
        );
    }

    onOpen = () => {
        this.setState(
            {
                showModal: true,
                newLocation: null,
            }
        );
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

        const { location_id, long_name } = this.props.details;
        
        return (
            <ul className="ul-location-list">
                <a href={`/design/${location_id}`}>
                    <li
                        onMouseOver={this.onMouseHover}
                    >              
                            {long_name}
                    </li>
                </a>
                {/* <li onClick={this.onOpen}> */}
                <li>
                    {/* <img src="/img/icons/down-arrow-icon.png" alt="" title="edit location" /> */}
                    <DropdownButton
                        //as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Action"
                        id="input-group-dropdown-2"
                    >
                    <Dropdown.Item href="#">edit this location</Dropdown.Item>
                    <Dropdown.Item href="#">delete this location</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={this.onOpen}>add new sub-location</Dropdown.Item>
                    </DropdownButton>
                </li>
                <Modal show={this.state.showModal} onHide={this.onClose}>
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
        </ul>
        );
    };

}

export default Location;