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
          <button onClick={this.handleHide}>data view toggle</button>         
          <p>Data component is here!</p>         
                
        </div>
      )    
    } else {      
      return (
        <div>          
          <button onClick={this.handleShow}>data view toggle</button>
        </div>      
      )    
    }  
  }
  
}
  
export default Data






