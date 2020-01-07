import React from 'react';
import { Modal, Form, Button, InputGroup, FormControl } from 'react-bootstrap/'
import './LocationList.css';

class Location extends React.Component {

    state = {
        showModal: false,
        newObj: null,
    }

    onClose = () => {
        this.setState(
            {
                showModal: false,
                newObj: null,
            }
        );
    }

    onOpen = () => {
        this.setState(
            {
                showModal: true,
                newObj: null,
            }
        );
    }

    onMouseHover = () => {
        this.props.handleHover(this.props.id);
    }

    onCreate = () => {
        let newObj = {
            "latitude": 0.0,
            "address_id": this.props.details.address_id,
            "description": this.state.newObj.description,
            "min_x_coordinate": 0,
            "max_x_coordinate": 0,
            "active": false,
            "long_name": this.state.newObj.long_name,
            "location_type_id": this.props.details.location_type_id,
            "scale_ft": 1.0,
            "short_name": this.state.newObj.short_name,
            "primary_object_id": 1,
            "min_y_coordinate": 0,
            "max_y_coordinate": 0,
            "longitude": 0.0
        }
        console.log("Jason says new object created! ", newObj);
        //this.onClose();
    }

    onChange = (e) => {
        const newObj = {
            ...this.state.newObj, 
            [e.currentTarget.name]: e.currentTarget.value
        }
        this.setState(
            {
                newObj
            }
        );
    }

    render() {

        const { location_id, long_name, address_id, location_type_id } = this.props.details;
        
        return (
            <ul className="ul-location-list">
                <a href={`/design/${location_id}`}>
                    <li
                        onMouseOver={this.onMouseHover}
                    >              
                            {long_name}
                    </li>
                </a>
                <li onClick={this.onOpen}>
                    add new location
                </li>
                <Modal show={this.state.showModal} onHide={this.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Location for<br/>{long_name}</Modal.Title>
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