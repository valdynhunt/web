import React from 'react'
import { Button } from 'react-bootstrap'
import './Export.css'
import { createTimeStamp } from '../functions'
import config from '../config.json'

class Export extends React.Component {

    state = {
        export: false,
        exportType: null,
        exportURL: null,
        filename: null,
        objects: [],
    }

    componentDidMount() {
        this.getAllObjectsPromise().then(([objects]) => {
            this.setState(
                {
                    objects,
                }
            );   
        });
    }

    onExport = (e) => {

        this.setState(
            {
                exportType: "." + e.currentTarget.value,
                filename: createTimeStamp() + "_backup." + e.currentTarget.value,
            }, () => {

                    if (this.state.exportType === ".json") {
                        this.getJson(this.state.objects).then(([file]) => {
                            this.setState(
                                {
                                    export: true,
                                    exportURL: window.URL.createObjectURL(file)
                                }
                            );
                        });
                    }

            }
        );

    }

    getAllObjectsPromise(locations) {
        return Promise.resolve([this.getAllObjects()]);
    }

    getAllObjects() {
  
        const locations = JSON.parse(localStorage.getItem('locations'));
        const objects = [];

        locations.forEach(location => {

            this.getObjectsFromLocation(location.location_id).then(objs => {    
                console.log("getAllObjects - objs: ", objs);
                objects.push(objs);
            });

        }, () => {
            console.log(objects);
        });

        return objects;
    }

    getObjectsFromLocationPromise(location_id) {
        return Promise.resolve([this.getObjectsFromLocation(location_id)]);
    }

    getObjectsFromLocation(location_id) {

        return fetch(config.api.invokeUrl + '/objects/location/' + location_id, {
            method: "GET",
            headers: config.api.headers,
        }).then(response => {
            return response.json();
        }).then(result => {
            return result.body.data;
        });

    }

    getJson() {
        return Promise.resolve([this.toJson()]);
    }

    // getCsv(jsonUrl) {
    //     return Promise.resolve([this.toCsv(jsonUrl)]);
    // }

    toJson = (objects) => {

        const backup = {
            subUsers: JSON.parse(localStorage.getItem('subUsers')),
            locations: JSON.parse(localStorage.getItem('locations')),
            // objects: this.state.objects,
            objects: JSON.parse(localStorage.getItem('objects')),
        };

        var file = new File(
            [JSON.stringify(backup)], this.state.filename, {
                type: 'application/' + (this.state.exportType).substring(1),
            }
        );

        return file;

    }

    // toCsv = () => {

    // }

    revertBtn = () => {
        this.setState(
            {
                export: false,
                exportType: null,
                exportURL: null,
            }
        );
    }
    

    render() {

        let $link = null;

        if (this.state.export) {
            $link = (
                <div className="fileDownload">
                    <a href={this.state.exportURL} onClick={this.revertBtn} download={this.state.filename}>
                        Ready for Download
                    </a>
                </div>
            );
        } else {
            $link = (
                <div className="btn-area">
                    <Button 
                        onClick={this.onExport} 
                        variant="outline-primary" 
                        name="exportType" 
                        value="json"
                    >
                        JSON format
                    </Button>
                </div>
            );
        }

        return (

            <div className="export-area">
                { $link }
            </div>

        )

    }

}

export default Export;