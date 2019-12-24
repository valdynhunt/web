import React from 'react'



class Data extends React.Component {
  
  constructor() {
    super()
    this.state = {isActive: false}
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
    if (this.state.isActive) {
      return (
        <div id="dataArea1">   
          <button type="button" class="btn btn-secondary" onClick={this.handleHide}>hide data</button>     
          <p>Data component is here!</p>         
                
        </div>
      )    
    } else {      
      return (
        <div id="dataArea2">
          <button type="button" class="btn btn-secondary" onClick={this.handleShow}>show data</button>     
        </div>      
      )    
    }  
  }
  
}
  
export default Data






