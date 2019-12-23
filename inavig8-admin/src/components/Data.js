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
        <div className="data">   
          <button onClick={this.handleHide}>hide data</button>         
          <p>Data component is here!</p>         
                
        </div>
      )    
    } else {      
      return (
        <div>          
          <button onClick={this.handleShow}>show data</button>
        </div>      
      )    
    }  
  }
  
}
  
export default Data






