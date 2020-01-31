import React from 'react';
import Button from 'react-bootstrap/Button';
import config from '../config.json';

class Export extends React.Component{
    onExport = () => {
        this.getLocation();
        this.getObject();
    }
    getLocation(){
        const headers = config.api.headers;
        
        fetch(config.api.invokeUrl + '/locations', {
            method: "GET",
            headers,
        }).then(response => {
            return response.json();
        }).then(result => {
            
            var obj = {
                contents: []
            }
            var loc = result.body.data;

            for (var i = 0; i < loc.length; i++){
                obj.contents.push({
                    address: loc[i].address,
                    address_id: loc[i].address_id,
                    description: loc[i].description,
                    active: loc[i].active,
                    location_id: loc[i].location_id,
                    long_name: loc[i].long_name,
                    location_type: loc[i].location_type,
                    location_type_id: loc[i].location_type_id,
                    short_name: loc[i].short_name,
                    canvas_image: loc[i].canvas_image,
                });
            }
            console.log("location contents: ", obj.contents);

            var json = JSON.stringify(obj);

            var file = new File([json], "JSONLocations.json", {
                type: 'text/plain',
            });

            //console.log(file);
        });
    }
    getObject(){
        const headers = config.api.headers;

        fetch(config.api.invokeUrl + '/object-types', {
            method: "GET",
            headers,
        }).then(response => {
            return response.json();
        }).then(result => {
        
            var objs = {
                contents: []
            }
            var locs = result.body.data;

            for (var i = 0; i < locs.length; i++){
                objs.contents.push({
                    image: locs[i].image,
                    description: locs[i].description,
                    short_name: locs[i].short_name,
                    object_type_id: locs[i].object_type_id,
                    long_name: locs[i].long_name,
                });
            }
            console.log("object contents: ", objs.contents);

            var json = JSON.stringify(objs);

            var file = new File([json], "JSONObjects.json", {
                type: 'text/plain',
            });

            //console.log(file);
        });
    }

    render() { 
        return (
            <Button onClick={this.onExport}> Export </Button>
        )
    }
}

export default Export;