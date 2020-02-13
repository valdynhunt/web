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
        locations: [],
        backup: {
            locations: [],
            objects: [],
            addresses: [],
        },
    }

    onExport = (e) => {

        this.setState(
            {
                exportType: "." + e.currentTarget.value,
                filename: createTimeStamp() + "_backup." + e.currentTarget.value,
            }, () => {
                this.getLocationsArray().then(([locations]) => {
                    this.getObjectsArray(locations).then(([objects]) => {
                        this.setState(
                            {
                                backup: {
                                    locations,
                                    objects,
                                }
                            }, ()  => {

                                if (this.state.exportType === ".csv") {
                                    
                                    this.getCsv().then(([csvUrl]) => {

                                        var file = new File(
                                            [this.state.backup], this.state.filename, {
                                                type: 'application/' + (this.state.exportType).substring(1),
                                            }
                                        );

                                        var url = window.URL.createObjectURL(file);

                                        this.setState(
                                            {
                                                export: true,
                                                exportURL: url,
                                            }
                                        );
                                        
                                    });

                                } else {

                                    this.getJson().then(([jsonUrl]) => {
                                        this.setState(
                                            {
                                                export: true,
                                                exportURL: jsonUrl,
                                            }
                                        );
                                    });

                                }
                                                                                 
                            }
                        );
                    });
                });
            }
        );

    }

    getLocationsArray() {
        return Promise.resolve([this.getLocations()]);
    }

    getObjectsArray(locations) {
        return Promise.resolve([this.getObjects(locations)]);
    }

    getJson() {
        return Promise.resolve([this.toJson()]);
    }

    getCsv(jsonUrl) {
        return Promise.resolve([this.toCsv(jsonUrl)]);
    }

    getLocations = () => {
        const admin = JSON.parse(localStorage.getItem('admin'));

        (admin.locations).forEach(loc => {
            delete loc.modifiedOn;
            delete loc.createdBy;
            delete loc.modifiedBy;
            delete loc.createdOn;
        });

        return admin.locations;
    }

    getObjects = (locations) => {
        const headers = config.api.headers;
        var objects = [];

        locations.forEach(loc => {
            fetch(config.api.invokeUrl + '/objects/location/' + loc.location_id, {
                method: "GET",
                headers,
            }).then(response => {
                return response.json();
            }).then(result => {
                objects.push(result.body.data);
            });
        });

        return objects;

    }

    toJson = () => {
        const backup = JSON.stringify(this.state.backup.locations);

        var file = new File(
            [backup], this.state.filename, {
                type: 'application/' + (this.state.exportType).substring(1),
            }
        );

        return window.URL.createObjectURL(file);
    }

    // toCsv = () => {

    //     var backup = [];
    //     backup.push(JSON.stringify(this.state.backup.locations));

    //     let converter = require('json-2-csv');
    //     let options = {
    //         delimiter : {
    //             wrap  : '"',    
    //             field : ',',    
    //             eol   : '\n'    
    //         },
    //         prependHeader    : true,
    //         sortHeader       : false,
    //         excelBOM         : true,
    //         trimHeaderValues : true,
    //         trimFieldValues  : true,
    //         keys             : [ 'address_id', 'description', 'active', 'short_name', 'location_id', 'long_name', 'canvas_image', 'location_type_id' ],
    //     };

    //     let json2csvCallback = function (err, csv) {
    //         if (err) throw err;
    //         console.log(csv);
    //         return csv;
    //     }

    //     converter.json2csv(backup, json2csvCallback, options);

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
                    <Button onClick={this.onExport} variant="outline-primary" name="exportType" value="json">JSON format</Button>
                    {/* <Button onClick={this.onExport} variant="outline-primary" name="exportType" value="csv">CSV format</Button> */}
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