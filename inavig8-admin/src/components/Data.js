
import React from 'react'
import Obj from './Obj'


class Data extends React.Component {
  
  constructor() {
    super()
    this.state = {isActive: false}
  }

  handleUpdateObject = (raw) => {
    this.props.handleUpdateObject(raw);
    console.log("updated...kidding from Data.js! raw : ", raw);

  }

  handleDeleteObject = (object_id) => {
    this.props.handleDeleteObject(object_id);
    console.log("deleted...kidding from Data.js! id: ", object_id);

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

  render() {

    var data = this.props.objects;
    var location = this.props.location;
    console.log("data component: ", data);

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
                  location_id={location.location_id}
                  handleDeleteObject={this.handleDeleteObject}
                  handleUpdateObject={this.handleUpdateObject}
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
