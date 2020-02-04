import React from 'react'
import './Options.css'
import { Button } from 'react-bootstrap'
import config from '../config.json';

class Options extends React.Component {
    //needs speical permissions for downloading from chrome
    //not sure if the same for firefox

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
            console.log("object contents: ", objs.contents);

            var json = JSON.stringify(objs);

            var file = new File([json], "JSONObjects.json", {
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

    render(){

        return(
            <main className="options-container">

                <section className="load-area">
                    <h4>Upload</h4>
                    <p>Load in objects to a location without the hassle!</p>
                    <p>What format does my file need to be?</p>
                    <ul>
                        <li>JSON (Java-Script Object Notation) or</li>
                        <li>CSV (command delimited)</li>
                    </ul>
                    <div className="btn-area">
                        <Button variant="outline-primary" size="lg" href="#/" block>Upload</Button>
                    </div>
                </section>

                <section className="backup-area">
                    <h4>Backup</h4>
                    <p>What will be included in my backup?</p>
                    <ul>
                        <li>Locations</li>
                        <li>Objects associated with the locations</li>
                    </ul>
                    <p>What format will my backup be in?</p>
                    <ul>
                        <li>JSON (Java-Script Object Notation) or</li>
                        <li>CSV (command delimited)</li>
                    </ul>
                    <div className="btn-area">
                        <Button onClick={this.onExport} variant="outline-primary" size="lg" href="#/" block>Export</Button>
                    </div>
                </section>

                <section className="recovery-area">
                    <h4>Recovery</h4>
                    <p>Revert location and associated objects</p>
                    <p>What format does my file need to be?</p>
                    <ul>
                        <li>JSON (Java-Script Object Notation) or</li>
                        <li>CSV (command delimited)</li>
                    </ul>
                    <div className="btn-area">
                        <Button variant="outline-primary" size="lg" href="#/" block>Import</Button>
                    </div>
                </section>
            </main>
        );

    }

}

export default Options;