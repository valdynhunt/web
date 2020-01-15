import React from 'react';
import Button from 'react-bootstrap/Button';

class Import extends React.Component {
    // onClick = () =>{
    //     //console.log(e.target.files[0]);
    //     console.log(this.state);
    //     //this.setState({image: e.target.files[0]});
    // }
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
        read.readAsDataURL(file);
    }

    render() {

        return (
            <div className="ImportBTN">
                <input name="btn" type="file" onChange={this.onImport}></input>
                {/* <br></br>
                <Button type="file" onClick={this.onClick}>Import</Button>
                <br></br>
                <img id="img" src={this.state.imagePreviewURL}></img> */}
            </div>
        );
    };
}

export default Import;