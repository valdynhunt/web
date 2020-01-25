import React from 'react'
import { Modal, Button, InputGroup, FormControl, Dropdown, DropdownButton } from 'react-bootstrap/'
import './UserList.css'

class UserList extends React.Component {

    state = {
        showAddModal: false,
        showDeleteModal: false,
        showUpdateModal: false,
    }

    onUpdateOpen = (e) => {
        console.log("Updating user's information...");
    }

    onDeleteOpen = (user_id) => {
        console.log("Removing Admin Privileges for user id: ", user_id);
    }

    onMouseHover = () => {
        this.props.handleHover(this.props.id);
    }

    onClose = () => {
        this.setState(
            {
                showAddModal: false,
                showDeleteModal: false,
                showUpdateModal: false,
            }
        );
    }

    onAddOpen = () => {
        this.setState(
            {
                showAddModal: true,
                showUpdateModal: false,
                showDeleteModal: false,
            }
        );
    }

    onUpdateOpen = () => {
        this.setState(
            {
                showAddModal: false,
                showUpdateModal: true,
                showDeleteModal: false,
            }
        );
    }

    onDeleteOpen = () => {
        this.setState(
            {
                showAddModal: false,
                showUpdateModal: false,
                showDeleteModal: true,
            }
        );
    }

    render() {

        const { user_id, first_name, last_name, username, email } = this.props.subUser;
        
        return (

            <ul className="users-list">
                <a href="#/">
                    <li onMouseOver={this.onMouseHover}>{first_name} {last_name}</li>
                </a>
               <li>
                    <DropdownButton
                        variant="outline-secondary"
                        title="Action"
                        id="input-group-dropdown-2"
                    >
                        <Dropdown.Item 
                            onClick={this.onUpdateOpen}
                        >
                            edit this user
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item 
                            disabled="true"
                            onClick={
                                (e) => { 
                                    if (window.confirm('Are you sure that you want to remove admin privileges for \'' + first_name + ' ' + last_name + '\'?')) this.onRemoveOpen(user_id) 
                                }
                            }
                            >
                            remove admin privileges
                        </Dropdown.Item>
                    </DropdownButton>
                </li>

                <Modal show={this.state.showUpdateModal} onHide={this.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><b>{username}</b></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="first_name">
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="enter first name"
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
                                    placeholder="enter last name"
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
                                    placeholder="enter email"
                                    aria-label="email"
                                    aria-describedby="basic-addon1"
                                    name="email"
                                    defaultValue={email}
                                    onChange={this.onChange}
                                />
                            </InputGroup>
                        </label>
                        <label htmlFor="username">
                            <InputGroup className="mb-3 wl-100">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="enter username"
                                    aria-label="username"
                                    aria-describedby="basic-addon1"
                                    name="username"
                                    defaultValue={username}
                                    onChange={this.onChange}
                                />
                            </InputGroup>
                        </label>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.onClose}>Close</Button>
                        <Button onClick={this.onUpdate} disabled={true}>Update</Button>
                    </Modal.Footer>
                </Modal>
            </ul>
        );
    };

}

export default UserList;