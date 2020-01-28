import React from 'react'
//import { Component } from 'react'
//import Konva from 'konva'
//import { render } from 'react-dom'
import { Stage, Layer, Star } from 'react-konva'
//import { Image, Rect, Text, Circle } from 'react-konva'

import './LocationObjects.css'

import config from '../config.json'
//import useImage from 'use-image'

import URLImage from './URLImage'


class LocationObjects extends React.Component {

	// constructor() {
	// 	super()
	// 	this.state = {
	// 		location: [],
	// 		objects: []
	// 	}
	// }	
	// location_id={this.props.match.params.location_id}
	state = {
		location: [],
		objects: []
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
			console.log("objects... ", result.body.data);
		});

		
	}

	render() {
		
		return (
			// <Stage width={window.innerWidth / 2} height={window.innerHeight / 2}>
			// 	<Layer>
			// 		{this.state.location.map((i) => (
			// 		<URLImage src={i.canvas_image} />
			// 		))}
			// 	</Layer>
			// </Stage>


			// <URLImage src={this.state.location.canvas_image}   x={150} />
			// <Text text = "{this.state.location.canvas_image}" />
			
			// <Image x = {100} y = {100} src = {this.state.location.canvas_image} 
			// />

			<Stage width={window.innerWidth} height={window.innerHeight}>
				<Layer>
					{this.state.location.map((i) => (
					<URLImage src={i.canvas_image} />
					))}
					
					{this.state.objects.map((key) => (

						<Star
							key={key}
							x={key.image_x}
							y={window.innerHeight - key.image_y}
							numPoints={5}
							innerRadius={5}
							outerRadius={10}
							fill="#89b717"
							opacity={0.8}
							draggable
							rotation={Math.random() * 180}
							shadowColor="black"
							shadowBlur={10}
							shadowOpacity={0.6}
							onDragStart={this.handleDragStart}
							onDragEnd={this.handleDragEnd}
							/>
					))}
				</Layer>
			</Stage>
		);
	};
}

export default LocationObjects;