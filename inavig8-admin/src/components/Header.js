import React from 'react'
import './Header.css'
import './Profile.css'
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap/'


class Header extends React.Component {

    state = {
        showModal: false,
    }

    onClose = () => {
        this.setState(
            {
            showModal: false
            }
        );
    }

    onOpen = () => {
        this.setState(
            {
            showModal: true
            }
        );
    }

    render() {

        // const { username, email, first_name, last_name, role } = this.props.profile;
        const { username, email, first_name, last_name, role } = JSON.parse(localStorage.getItem('admin'));
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        var today = new Date();
        var date = months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

        return (

            <header>
                <div className="header-upper">
                    <div className="username-area" onClick={this.onOpen}>
                        <h6>{email}</h6>
                        <img src="./img/icons/dropdown-icon.png" alt="Profile" title="Profile" />
                    </div>

                    <Modal show={this.state.showModal} onHide={this.onClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Admin User: {username}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label htmlFor="first_name">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        //placeholder="enter first name"
                                        aria-label="first_name"
                                        aria-describedby="basic-addon1"
                                        name="first_name"
                                        defaultValue={first_name}
                                        onChange={this.onChange}
                                    />
                                </InputGroup>
                            </label>
                            <label htmlFor="last_name">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        //placeholder="enter last name"
                                        aria-label="last_name"
                                        aria-describedby="basic-addon1"
                                        name="last_name"
                                        defaultValue={last_name}
                                        onChange={this.onChange}
                                    />
                                </InputGroup>
                            </label>
                            <label htmlFor="email">
                                <InputGroup className="mb-3 wl-100">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        //placeholder="enter email"
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
                                        name="email"
                                        defaultValue={email}
                                        onChange={this.onChange}
                                        bsPrefix="input-field-size"
                                    />
                                </InputGroup>
                            </label>
                            <label htmlFor="role">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Role</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        //placeholder="enter role"
                                        aria-label="role"
                                        aria-describedby="basic-addon1"
                                        name="role"
                                        defaultValue={role}
                                        onChange={this.onChange}
                                    />
                                </InputGroup>
                            </label>
                            {/* <hr />
                            <Button variant="danger" onClick={() => this.onDelete(object_id)}>Delete</Button> */}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.onClose}>Close</Button>
                            {/* <Button onClick={this.onUpdate}>Update</Button> */}
                        </Modal.Footer>
                    </Modal>

                </div>
                <div className="header-lower">
                    {/* <h6>Hello, Jason</h6> */}
                    <input type="button" className="button-date" value={date} readOnly="readonly" />
                </div>
            </header>

        );

    }

}

export default Header;