import React from 'react';
import Button from 'react-bootstrap/Button';
import config from '../config.json';

class Export extends React.Component{
    //This class is used for testing export features before being
    //implemented in the Options class. It will be deleted when Export
    //is completed

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
            //console.log("location contents: ", obj.contents);

            var jsonLoc = JSON.stringify(obj);

            var file = new File([jsonLoc], "JSONLocations.json", {
                type: 'text/plain',
            });

            //console.log(file);

            let converter = require('json-2-csv');
            
            let json2csvCallback = function (err, csv) {
                if (err) throw err;
                //console.log("Loc CSV: ", csv);
            };
            
            converter.json2csv(obj, json2csvCallback);
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
            //console.log("object contents: ", objs.contents);

            var jsonObj = JSON.stringify(objs);

            var file = new File([jsonObj], "JSONObjects.json", {
                type: 'text/plain',
            });

            //console.log(file);

            let converter = require('json-2-csv');
            
            let json2csvCallback = function (err, csv) {
                if (err) throw err;
                //console.log("Obj CSV: ", csv);
            };
            
            converter.json2csv(objs, json2csvCallback);
        });
    }

    render() { 
        return (
            <div>
                {/* <Button onClick={this.getLocation}> Location </Button>
                <br /> */}
                {/* <Button onClick={this.getObject}> Object </Button>
                <br /> */}
                <Button onClick={this.onExport}> Export </Button>
            </div>
        )
    }
}

export default Export;