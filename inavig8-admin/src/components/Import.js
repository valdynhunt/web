import React from 'react';
//import config from '../config.json';
//import Button from 'react-bootstrap/Button';

class Import extends React.Component {
    constructor(property){
        super(property);

        this.state = {
            file: '',
            imagePreviewURL: ''
        }

        this.onImport = this.onImport.bind(this);
    }
    onImport(e){
        e.preventDefault();

        let read = new FileReader();
        let file = e.target.files[0];
        console.log(file);
        read.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewURL: read.result
            });
        }

        console.log(read);

        let location_image_data = read.readAsDataURL(file);//Returns the complete data of blob as a Data URL, essentially a Base64-encoded string of the file data.
        
        let body = {
            location_image_name: file.name,
            location_image_data  
       }

        // fetch(config.api.invokeUrl + '/location/image', {
        //     method: "POST",
        //     body,
            
        // }).then(response => {
        //     return response.json();
        // });

    }
    
// base 64 binary
    render() {

        return (
            <div className="ImportBTN">
                <input name="btn" type="file" onChange={this.onImport}></input>
                <br></br>
                <img id="img" src={this.state.imagePreviewURL} alt=""></img> 
            </div>
        );
    };
}

export default Import;
