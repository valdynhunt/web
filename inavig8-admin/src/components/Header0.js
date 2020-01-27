import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


class Header extends React.Component {

    render() {

      const admin = JSON.parse(localStorage.getItem('admin'));

        return (
            <div className="header">
              <Navbar bg="light" variant="light" >

                  <Navbar.Brand href="/">
                      <img
                          alt="iNavig8 Logo"
                          src="/logo.png" 
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
                  <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
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
