import React from 'react'
import UserList from './UserList'
import './Users.css'

class Users extends React.Component {

    state = {
        isHover: false,
        showUser: false,
        showDetails: false,
        index: -1,
        //users: [ localStorage.getItem('admin') ],
    }

    handleHover = (index) => {
        this.setState(
            {
                isHover: true,
                showUser: true,
                showDetails: true,
                index
            }
        );
    }

    render() {

        let $userDetails = null;
        if (this.state.showUser) {
            $userDetails = (
                <div>
                    <ul className="user-detail">
                        <li>First Name:</li>
                        <li>{this.props.subUsers[this.state.index].first_name}</li>
                    </ul>
                    <ul className="user-detail">
                        <li>Last Name:</li>
                        <li>{this.props.subUsers[this.state.index].last_name}</li>
                    </ul>
                    <ul className="user-detail">
                        <li>Email:</li>
                        <li>{this.props.subUsers[this.state.index].email}</li>
                    </ul>
                    <ul className="user-detail">
                        <li>Username:</li>
                        <li>{this.props.subUsers[this.state.index].username}</li>
                    </ul>
                </div>
            );
        } else {
            $userDetails = (
                <div>
                    <p className="center">hover over the User for details</p>
                </div>
            );
        }

        return (

            <main className="users-container">
                <section className="users-list-area">
                    <h4>Users List</h4>
                    <div>
                        {Object.keys(this.props.subUsers).map(key => (
                            <UserList
                                key={key}
                                id={key}
                                subUser={this.props.subUsers[key]} 
                                hover={this.state.isHover}
                                handleHover={this.handleHover}
                                handleCreateUser={this.handleCreateUser}
                                handleUpdateUser={this.handleUpdateUser}
                                handleDeleteUser={this.handleDeleteUser}
                            />
                        ))}
                    </div>
                </section>

                <section className="user-details">
                    <h4>User Details</h4>
                    {
                        $userDetails
                    }
                </section>

            </main>

        )

    }

}

export default Users;