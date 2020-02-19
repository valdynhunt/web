import React from 'react'
import { Navbar, Nav, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'
//import { Form, FormControl, Button } from 'react-bootstrap'
import './Header0.css';

class Header extends React.Component {

    render() {
        // props.handleAccessible(true), props.handleAccessible(false)
        const admin = JSON.parse(localStorage.getItem('admin'));

        return (

            <div className="header0">

              <Navbar bg="primary" variant="dark" >
                  <Navbar.Brand href="/">
                      <img
                          alt="iNavig8 Logo"
                          src="/img/iNavig8_Logo-bootstrap.png" 
                          width="50"
                          height="40"
                          className="d-inline-block align-middle"
                      />{' '}
                      iNavig8
                  </Navbar.Brand>
                  <Nav className="mr-auto">
                     <Nav.Link href="/">back to Dashboard</Nav.Link>
                  </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}

                  <Navbar.Collapse className="justify-content-end">
                      <ButtonToolbar className="accessible">
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton value={1} onClick={this.props.handleAccessibleOn}>Elevators</ToggleButton>
                            <ToggleButton value={2} onClick={this.props.handleAccessibleOff}>Stairs</ToggleButton>
                        </ToggleButtonGroup>
                      </ButtonToolbar>

                      <Navbar.Text>
                          signed in as: { (admin) ? admin.username : '' }
                      </Navbar.Text>
                  </Navbar.Collapse>


                </Navbar>

            </div>
        )
    }
}
  

export default Header;
