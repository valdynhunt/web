import React from 'react'
import { Button, InputGroup } from 'react-bootstrap/'
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

        //TODO: ImagePreview: needs to show on LocationList.js
        //this.props.handleImagePreview(this.state.imagePreviewURL);

    }

    onSubmit = () => {

        if (this.state.uploadImage) {
            //console.log("import.js: uploadImage: ", this.state.uploadImage);
            this.props.handleImportImage(this.state.uploadImage);
        } else {
            //TODO: disable upload button until an image is loaded?
            //do something...alert?
        }
        
    }
    
    render() {

        return (
            <div>
                <InputGroup className="mb-3 wl-100">
                    <input className="btnImport btnImport-secondary" type="file" accept="image/*" onChange={this.onImport}/>
                    <InputGroup.Append>
                        <Button 
                            variant="outline-secondary" 
                            type="submit"
                            onClick={this.onSubmit}
                            disabled={ (this.state.uploadImage) ? false : true }
                        >
                            upload
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    };
}

export default Import;


// class Import extends React.Component {
//     constructor(property){
//         super(property);

//         this.state = {
//             file: '',
//             imagePreviewURL: ''
//         }

//         this.onImport = this.onImport.bind(this);
//     }
//     onImport(e){
//         e.preventDefault();

//         let read = new FileReader();
//         let file = e.target.files[0];
//         console.log("file: ", file);
//         read.onloadend = () => {
//             this.setState({
//                 file: file,
//                 imagePreviewURL: read.result
//             });
//         }

//         console.log("read: ", read);

//         let location_image_data = read.readAsDataURL(file);//Returns the complete data of blob as a Data URL, essentially a Base64-encoded string of the file data.
//         console.log("location_image_data: ", location_image_data);
//         let body = {
//             location_image_name: file.name,
//             location_image_data  
//        }

//         // fetch(config.api.invokeUrl + '/location/image', {
//         //     method: "POST",
//         //     body,
            
//         // }).then(response => {
//         //     return response.json();
//         // });

//     }
    
// // base 64 binary
//     render() {

//         return (
//             <div className="ImportBTN">
//                 <input name="btn" type="file" onChange={this.onImport}></input>
//                 <br></br>
//                 <img id="img" src={this.state.imagePreviewURL} alt=""></img> 
//             </div>
//         );
//     };
// }

// export default Import;