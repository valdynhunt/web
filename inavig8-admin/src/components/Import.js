import React from 'react'
import { Button, InputGroup, Dropdown} from 'react-bootstrap/'
import './Import.css'

class Import extends React.Component {

    state = {    
        uploadImage: {
            location_image_data: {},
            location_image_name: '',
            location_id: null,
        },
        imagePreviewURL: '',
        
    }

    onImport = (e) => {

        const read = new FileReader();
        const image = e.target.files[0];
        let ext = (image.name).split(".");
        const location_image_name = this.props.details.long_name + "." + ext[ext.length-1];
        const uploadImage = {
            location_image_name,
            location_image_data: null,
            location_id: this.props.details.location_id,
        }

        console.log("readDataAsUrl: ", uploadImage.location_image_data);

        read.onload = (r) => {

            uploadImage.location_image_data = r.target.result;

            this.setState(
                {
                    uploadImage
                }
            );

        }

        read.readAsDataURL(image);

        //alert("This will cause the location objects to be deleted");
        
        //TODO: ImagePreview: needs to show on LocationList.js
        //this.props.handleImagePreview(this.state.imagePreviewURL);
        
    }

    onSubmit = () => {
        if (this.state.uploadImage) {
            //console.log("import.js: uploadImage: ", this.state.uploadImage);
            this.props.handleImportImage(this.state.uploadImage);
            
            //warning(deleting all objects)

        } else {
            //TODO: disable upload button until an image is loaded?
            //do something...alert?
            alert("Image Failed To Upload. Try Again.");
        }
    }
    
    render() {

        return (
            <div>
                <InputGroup className="mb-3 wl-100">
                    <input className="btnImport btnImport-secondary" type="file" accept="image/*" onChange={this.onImport}/>
                    <InputGroup.Append>
                    <Dropdown>
                            <Dropdown.Toggle variant="success">
                                Upload
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item disabled={true}>By clicking upload, you will delete all current objects in this location</Dropdown.Item> 
                                <Dropdown.Item href="#/action-1">
                                    <Button 
                                        variant="outline-secondary" 
                                        type="submit"
                                        onClick={this.onSubmit}
                                        disabled={ (this.state.uploadImage) ? false : true }
                                    >
                                        upload
                                    </Button>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    };
}

export default Import;