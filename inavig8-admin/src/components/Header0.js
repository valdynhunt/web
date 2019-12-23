import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';



class Header extends React.Component {
  
  constructor() {
    super()
    this.state = {}
  }

  render() {


    
    return (
      <div className="header">
        <Navbar bg="light" variant="light" >

          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.png" 
              width="50"
              height="40"
              className="d-inline-block align-middle"
            />{' '}
            iNavig8
          </Navbar.Brand>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>

        </Navbar>
      </div>
    )
  }
}
  

export default Header;
