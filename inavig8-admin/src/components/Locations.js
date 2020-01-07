import React from 'react';
import LocationList from './LocationList';
import './Locations.css';
// import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap/'

class Locations extends React.Component {

    state = {
        showModal: false,
        isHover: false,
        showImage: false,
        showDetails: false,
        index: -1,
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

    handleHover = (index) => {
        this.setState(
            {
                isHover: true,
                showImage: true,
                showDetails: true,
                index
            }
        );
    }

    render() {

        return (

            <main className="locations-container">
                <section className="location-list">
                    <h4>
                        Locations 
                        {/* <span onClick={this.onOpen}>
                            add new location
                        </span> */}
                    </h4>
                    <div>
                    {/* <ul className="ul-location-list"> */}
                        {Object.keys(this.props.locations).map(key => (
                            <LocationList
                                key={key}
                                id={key}
                                details={this.props.locations[key]} 
                                handleHover={this.handleHover}
                                hover={this.state.isHover}
                            />
                        ))}
                    {/* </ul> */}
                    </div>
                </section>
                <section className="location-view">
                    <h4>Locations View</h4>
                    {
                        this.state.showImage &&
                        <img 
                            src={this.props.locations[this.state.index].canvas_image} 
                            alt={this.props.locations[this.state.index].long_name} 
                            title={this.props.locations[this.state.index].long_name}
                        />
                    }
                </section>
                <section className="location-details">
                    <h4>Locations Details</h4>
                    <ul className="location-detail">
                        <li>Name:</li>
                        {
                            this.state.showImage &&
                            <li>{this.props.locations[this.state.index].long_name}</li>
                        }
                    </ul>
                    <ul className="location-detail">
                        <li>Nickname:</li>
                        {
                            this.state.showImage &&
                            <li>{this.props.locations[this.state.index].short_name}</li>
                        }
                    </ul>
                    <ul className="location-detail">
                        <li>Description:</li>
                        {
                            this.state.showImage &&
                            <li>{this.props.locations[this.state.index].description}</li>
                        }
                    </ul>
                    <ul className="location-detail">
                        <li>Location Type:</li>
                        {
                            this.state.showImage &&
                            <li>{this.props.locations[this.state.index].location_type.short_name}</li>
                        }
                    </ul>
                </section>
                {/* <Modal show={this.state.showModal} onHide={this.onClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>New Location</Modal.Title>
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
                                        //onChange={this.onChange}
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
                                        //onChange={this.onChange}
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
                                        //onChange={this.onChange}
                                    />
                                </InputGroup>
                            </label>
                            <label htmlFor="location_type">
                                <InputGroup className="mb-3 wl-100">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="enter email"
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
                                        name="email"
                                        defaultValue=""
                                        //onChange={this.onChange}
                                    />
                                </InputGroup>
                            </label>
                            <label htmlFor="role">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Role</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="enter role"
                                        aria-label="role"
                                        aria-describedby="basic-addon1"
                                        name="role"
                                        defaultValue=""
                                        //onChange={this.onChange}

                                    />
                                </InputGroup>
                            </label>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.onClose}>Close</Button>
                            <Button onClick={this.onCreate}>Create</Button>
                        </Modal.Footer>
                    </Modal> */}
            </main>

        )

    }

}

export default Locations;