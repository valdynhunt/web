
import React from 'react'
import Obj from './Obj'


class Data extends React.Component {
  
  constructor() {
    super()
    this.state = {
      isActive: false,
      currentIndex: -1,
      currentObject: {
        object_id: 0,
        location_id: 0, 
        short_name: "", 
        long_name: "", 
        description: "", 
        object_type: "",
        "x_coordinate": 0,
        "y_coordinate": 0,
        "image_x": 0,
        "image_y": 0
   }
    }
  }

  handleUpdateObject = (index, raw) => {
    this.props.handleUpdateObject(index, raw);
    console.log("updated from Data.js! raw : ", raw);

  }

  handleDeleteObject = (object_id) => {
    this.props.handleDeleteObject(object_id);
    console.log("deleted from Data.js! id: ", object_id);
  }

  // handleFormChange = (index, updatedField) => {
  //   //console.log(index + ": updatedField in Data.js = ", updatedField);
  //   this.props.handleFormChange(index, updatedField);
  // }
  handleShowModal = (status) => {
    console.log("statussssssssssssssssssssssssssssssssssssssssss: ", status);
    this.props.handleShowModal(status);
  }



  handleShow = () => {
    this.setState({
      isActive: true
    });
  };

  handleHide = () => {
    this.setState({
      isActive: false
    });
  };

  handleCurrentIndex = (index) => {
    this.setState({
      currentIndex: index
    });
  };

  render() {

    var data = this.props.objects;
    var location = this.props.location;
    // console.log("data component: ", data);
    

    if (this.state.isActive) {
      return (
        <div id="dataArea1">
          <div className="top-button">
            <button type="button" className="btn btn-secondary" onClick={this.handleHide}>hide data</button>  
          </div>   
             
          {Object.keys(data).map(key => (
              <Obj
                  key={key}
                  id={key}
                  details={data[key]}
                  currentIndex={this.state.currentIndex}
                  currentObject={this.state.currentObject}
                  handleCurrentIndex={this.handleCurrentIndex}
                  location_id={location.location_id}
                  showModal={this.props.showModal}
                  handleShowModal={this.handleShowModal}
                  handleDeleteObject={this.handleDeleteObject}
                  handleUpdateObject={this.handleUpdateObject}
                  // handleFormChange={this.handleFormChange}
              />
          ))}         
                
        </div>
      )    
    } else {      
      return (
        <div id="dataArea2">
          <div className="top-button">
            <button type="button" className="btn btn-secondary" onClick={this.handleShow}>show data</button>     
          </div>
        </div>      
      )    
    }  
  }
  
}
  
export default Data
