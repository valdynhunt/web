import React, { Component } from 'react';
import Header from './Header0';
import Graphics from './Graphics'
import Data from './Data'
import Footer from './Footer0';
import config from '../config.json';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap/'
import './Design.css';


class Design extends Component {
    // team 5 rules
    state = {
        showModalG: false,
        showModalSetScale: false,
        location: [],
        objects: [],
    }

    componentDidMount() {

		// let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
		// JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

        let headers = config.api.headers;
        
        const url = config.api.invokeUrl + '/location/' + this.props.match.params.location_id;
            fetch(url, 
            {
                method: "GET",
                headers,
            }).then(response => {
                return response.json();
            }).then(result => {
                this.setState(
                    {
                        location: result.body.data
                    }
                );
                console.log("location... ", result.body.data);
            });
        
        const url2 = config.api.invokeUrl + '/objects/location/' + this.props.match.params.location_id;
            fetch(url2, 
            {
                method: "GET",
                headers,
            }).then(response => {
                return response.json();
            }).then(result => {
                this.setState(
                    {
                        objects: result.body.data
                    }
                );

                console.log("JASON! objects: ", result.body.data);
                console.log("state: ", this.state);
                console.log("checking if primary and secondary are set...");

                let foundPrimary = this.state.objects.find(element =>  element.short_name === "primary");
                let foundSecondary = this.state.objects.find(element => element.short_name === "secondary");
                let scaleIsSet = false;
                let renderModal = false;

                console.log("scale set? ", scaleIsSet);
                console.log("foundPrimary: ", foundPrimary);
                console.log("foundSecondary: ", foundSecondary);

                // check if scale set
                if((foundPrimary != null) && (foundSecondary != null)) {
                    scaleIsSet = (foundPrimary.x_coordinate === 0) && (foundPrimary.y_coordinate === 0);
                }

                console.log("scale set? ", scaleIsSet);

                // if primary and secondary and grid not set, then show modal to input
                if (!foundPrimary || !foundSecondary || !scaleIsSet) {
                    this.handleShowModalSetScale(true);
                    // show model to set them and set grid
                    // show modal here

                }

                console.log("renderModal: ", renderModal);
            });

        const localStorageRef = localStorage.getItem(this.props.match.params.location_id);
        console.log("localStorageRef: ", localStorageRef);
        // if (localStorageRef) {
        //     this.setState(
        //         { 
        //             objects: JSON.parse(localStorageRef) 
        //         }
        //     );
        // }
        
    }

    onClose = () => {
        console.log("closing setScale modal show - ", this.state.showModalSetScale);
        this.handleShowModalSetScale(false);

    }
  
  
  onOpen = () => {
      console.log("opening setScale modal show - ", this.state.showModalSetScale);
      this.handleShowModalSetScale(true);
  }

  onChange = (e) => {
    console.log("currentTarget: ", e.currentTarget.name);
    console.log("currentValue: ", e.currentTarget.value);
  
    // const currentObjectG = {
    //     ...this.state.currentObjectG, 
    //     [e.currentTarget.name]: e.currentTarget.value
    // }
    // console.log("onChange currentObjectG before setState: ", currentObjectG);
  
    // this.setState(
    //     {
    //     currentObjectG
    //     }
    // );
    // console.log("Graphics.js onChange object: ", currentObjectG);
    // console.log("Graphics.js onChange object from state: ", this.state.currentObjectG);
  
  }

  onSetScale = () => {
    // console.log("currentIndex: ", this.state.currentIndex);
    // console.log("currentObjectG: ", this.state.currentObjectG);
    console.log("Design.js onUpdate - description: ", this.state.currentObjectG.description)
    // var raw = JSON.stringify({
    //     "object_id": this.state.currentObjectG.object_id,
    //     "location_id":this.state.currentObjectG.location_id, 
    //     "short_name":this.state.currentObjectG.short_name,
    //     "long_name":this.state.currentObjectG.long_name,
    //     "description":this.state.currentObjectG.description,
    //     "object_type_id": this.state.currentObjectG.object_type_id,
    //     "x_coordinate": 0,
    //     "y_coordinate": 0,
    //     "image_x": this.state.currentObjectG.image_x,
    //     "image_y": this.state.currentObjectG.image_y,
    //   });
      
    // console.log(JSON.parse(raw));
    // console.log("object_id: ", JSON.parse(raw).object_id);
    // console.log("long_name: ", JSON.parse(raw).long_name);
    // console.log("description: ", JSON.parse(raw).description);

    // const isCurrentObjectId = object => object.object_id === JSON.parse(raw).object_id;
    // const index = this.props.objects.findIndex(isCurrentObjectId)
    // console.log("index: ", index);

    // this.handleSetScale(index, raw);

    this.handleSetScale();
    this.onClose();
}


    handleShowModalSetScale = (status) => {
        console.log("ShowModalSetScale status in Design.js............................: ", status);
        this.setState(
            {
                showModalSetScale: status
            }
        );
      }


      handleShowModalG = (status) => {
        console.log("status in Design.js............................: ", status);
        this.setState(
            {
                showModalG: status
            }
        );
      }


    handleDeleteObject = (object_id) => {

        console.log("deleting object in Design.js, object id " + object_id);

        // let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
		// JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

        let headers = config.api.headers;

        const url3 = config.api.invokeUrl + '/object/delete/' + object_id;
        fetch(url3, {
            method: "GET",
            headers,
        }).then(response => {
            return response.json();
        }).then(result => {
            console.log("deleted object from Design.js", result);
            this.setState(
                prevState => (
                    { 
                        objects: prevState.objects.filter(object => object.object_id !== object_id) 
                    }
                )
            );
        });

        console.log("list of objects after deletion: ", this.state.objects);
    }

    handleNewObject = (raw) => {

        // let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
		// JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

        let headers = config.api.headers;

        const url3 = config.api.invokeUrl + '/object/new';
        fetch(url3, {
            method: "POST",
            headers,
            body: raw,
        }).then(response => {
            return response.json();
        }).then(result => {
            this.setState(
                {
                    objects: [...this.state.objects, { ...result.body.data[0] }]
                }
            );

        });
    }

    handleUpdateObject = (index, raw) => {

        console.log(index + ": handleUpdateObject in Design.js = ", raw);
        
        this.setState(
            prevState => (
                { 
                    objects: prevState.objects.filter(object => object.object_id !== JSON.parse(raw).object_id) 
                }
            )
        );

        // let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
		// JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

        let headers = config.api.headers;

        const url3 = config.api.invokeUrl + '/object/update';
        fetch(url3, {
            method: "POST",
            headers,
            body: raw,
        }).then(response => {
            return response.json();
        }).then(result => {

            this.setState(
                {
                    objects: [...this.state.objects, { ...result.body.data[0] }]
                }
            );

            console.log("after setState - Design.js result: ", this.state.objects);

        });
    }

    handleSetScale = (index, raw) => {

        console.log(index + ": handleUpdateObject in Design.js = ", raw);
        
        this.setState(
            prevState => (
                { 
                    objects: prevState.objects.filter(object => object.object_id !== JSON.parse(raw).object_id) 
                }
            )
        );

        // let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
		// JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

        let headers = config.api.headers;

        const url3 = config.api.invokeUrl + '/object/update';
        fetch(url3, {
            method: "POST",
            headers,
            body: raw,
        }).then(response => {
            return response.json();
        }).then(result => {

            this.setState(
                {
                    objects: [...this.state.objects, { ...result.body.data[0] }]
                }
            );

            console.log("after setState - Design.js result: ", this.state.objects);

        });
    }


    render() {
        return (
            <div>
                <Container fluid="true" className="main">
                    <Row>
                        <Col sm={12}>
                            <Header className="header" />
                        </Col>
                    </Row>
                    <Row>
                    <Col sm={9}>
                        <Graphics
                            location_id={this.props.match.params.location_id} 
                            className="graphics" key="1" 
                            objects={this.state.objects} 
                            details={this.state.objects[0]}
                            location={this.state.location}
                            showModalG={this.state.showModalG}
                            handleShowModalG={this.handleShowModalG} 
                            handleShowModalSetScale={this.handleShowModalSetScale} 
                            handleNewObject={this.handleNewObject}
                            handleDeleteObject={this.handleDeleteObject} 
                            handleUpdateObject={this.handleUpdateObject} 

                        />
                    </Col>
                    <Col sm={3}>
                        <Data 
                            className="data" 
                            key={this.props.match.params.location_id}  
                            objects={this.state.objects} 
                            location={this.state.location}
                            handleDeleteObject={this.handleDeleteObject} 
                            handleUpdateObject={this.handleUpdateObject} 
                        />
                    </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Footer className="footer" />
                        </Col>
                    </Row>
                </Container>


        <Modal show={this.state.showModalSetScale} onHide={this.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Set Latitudes and Longitudes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="location_id">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Location ID</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-label="location_id"
                                    aria-describedby="basic-addon1"
                                    name="location_id"
                                    defaultValue={this.props.match.params.location_id}
                                    readOnly="readonly"
                                />
                            </InputGroup>
                        </label>

                        <label htmlFor="latitude_pri">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Primary Latitude(decimal)</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="enter latitude"
                                    aria-label="latitude_pri"
                                    aria-describedby="basic-addon1"
                                    name="latitude_pri"
                                    // defaultValue={this.state.currentObjectG.long_name}
                                    onChange={this.onChange}
                                />
                            </InputGroup>
                        </label>

                        <label htmlFor="longitude_pri">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Primary Longitude(decimal)</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="enter longitude"
                                    aria-label="longitude_pri"
                                    aria-describedby="basic-addon1"
                                    name="longitude_pri"
                                    // defaultValue={this.state.currentObjectG.long_name}
                                    onChange={this.onChange}
                                />
                            </InputGroup>
                        </label>

                        <label htmlFor="latitude_sec">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Secondary Latitude(decimal)</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="enter latitude"
                                    aria-label="latitude_sec"
                                    aria-describedby="basic-addon1"
                                    name="latitude_sec"
                                    // defaultValue={this.state.currentObjectG.long_name}
                                    onChange={this.onChange}
                                />
                            </InputGroup>
                        </label>

                        <label htmlFor="longitude_sec">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Secondary Longitude(decimal)</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="enter longitude"
                                    aria-label="longitude_sec"
                                    aria-describedby="basic-addon1"
                                    name="longitude_sec"
                                    // defaultValue={this.state.currentObjectG.long_name}
                                    onChange={this.onChange}
                                />
                            </InputGroup>
                        </label>





                        <hr />
                        {/* <Button variant="danger" onClick={() => this.onDelete(this.state.currentObjectG.object_id)}>Delete</Button> */}
                        {/* <DropdownButton variant="info" id="dropdown-basic-button" title="Connections">
                          <Dropdown.Item href="#" onClick={() => this.onAddConnection(this.state.currentObjectG.object_id)}>Add connection</Dropdown.Item>
                          <Dropdown.Item href="#" onClick={() => this.onDeleteConnection(this.state.currentObjectG.object_id)}>Delete connection</Dropdown.Item>
                          <Dropdown.Item href="#" onClick={() => this.onShowConnections()}>Show all connections</Dropdown.Item>
                        </DropdownButton> */}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.onClose}>Close</Button>
                        <Button onClick={this.onSetScale}>Enter</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}

export default Design;