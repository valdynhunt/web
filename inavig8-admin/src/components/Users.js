import React from 'react';
import './Users.css';

class Users extends React.Component {

    render() {

        return (

            <main className="users-container">
                <section className="users-list-area">
                    <h4>Users List</h4>
                    <ul className="users-list">
                        <li>&#187; Loremipsum Dolorsit</li>
                        <li>&#187; Loremipsum Dolorsit</li>
                        <li>&#187; Loremipsum Dolorsit</li>
                        <li>&#187; Loremipsum Dolorsit</li>
                        <li>&#187; Loremipsum Dolorsit</li>
                        <li>&#187; Loremipsum Dolorsit</li>
                        <li>&#187; Loremipsum Dolorsit</li>
                        <li>&#187; Loremipsum Dolorsit</li>
                    </ul>
                </section>
                <section className="user-details">
                    <h4>User Details</h4>
                    <label htmlFor="username">
                        Username:</label>
                        <input type="text" id="username" name="username" value="Lorem Ipsum" readOnly="readonly" />
                    <label htmlFor="password">
                        Password:</label>
                        <input type="button" className="button" value="reset" />
                    <label htmlFor="email">
                        Email:</label>
                        <input type="text" id="email" name="email" value="loremipsum@dolor.com" readOnly="readonly" />
                    <label htmlFor="first_name">
                        First Name:</label>
                        <input type="text" id="first_name" name="first_name" value="Lorem" readOnly="readonly" />
                    <label htmlFor="last_name">
                        Last Name:</label>
                        <input type="text" id="last_name" name="last_name" value="Ipsum" readOnly="readonly" />
                </section>
            </main>

        )

    }

}

export default Users;