import React, { Component } from 'react';
import Header from './Header0';
import Graphics from './Graphics'
import Data from './Data'
import Footer from './Footer0';
import config from '../config.json';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Design.css';


class Design extends Component {
    // team 5 rules
    state = {
        location: [],
        objects: [],
    }

    componentDidMount() {

		let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
		JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

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

        console.log("objects: ", result.body.data);
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
        scaleIsSet = (foundPrimary.x_coordinate === 0) && (foundPrimary.y_coordinate === 0);
        console.log("scale set? ", scaleIsSet);

        // if primary and secondary and grid not set, then show modal to input
        if (!foundPrimary || !foundSecondary || !scaleIsSet) {
            // show model to set them and set grid
            // show modal here
            renderModal = true;

        }

        console.log("renderModal: ", renderModal);
        });
        
    }

    updateObjects = (raw) => {

        let accessToken = localStorage.getItem("admin") != null ? localStorage.getItem("CognitoIdentityServiceProvider.7qismhftk1ehili7a4qp9cc5el." + 
		JSON.parse(localStorage.getItem("admin")).username + ".idToken") : "";

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


    render() {

        const location_id = this.props.match.params.location_id;
        return (
        <div>
        <Container fluid="true" className="main">
            <Row><Col sm={12}><Header className="header" /></Col></Row>
            <Row>
            <Col sm={9}><Graphics location_id={this.props.match.params.location_id} className="graphics" key="1" objects={this.state.objects} location={this.state.location} updateObjects={this.updateObjects} /></Col>
            <Col sm={3}><Data className="data" key={this.props.match.params.location_id}  objects={this.state.objects} location={this.state.location} /></Col>
            </Row>
            <Row><Col sm={12}><Footer className="footer" /></Col></Row>
        </Container>
        </div>
        );
    }
}

export default Design;