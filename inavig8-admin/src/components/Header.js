import React from 'react';
import './Header.css';
//import Profile from './Profile';
import './Profile.css';
import Popup from 'reactjs-popup';

class Header extends React.Component {

    render() {

        const { username, password, email, first_name, last_name, role } = this.props.profile;
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        var today = new Date();
        var date = months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

        return (

            <header>
                <div className="header-upper">
                    <div className="username-area">
                        <h6>{email}</h6>
                        <Popup 
                            trigger={
                                <img src="./img/icons/dropdown-icon.png" alt="Profile" title="Profile" />
                            }
                            modal
                            closeOnDocumentClick
                            lockScrollcloseOnEscape
                            //repositionOnResize
                        >
                            {close => (
                                <div className="profile-modal">
                                    <a href="/#" className="profile-modal-close" onClick={close}>&times;</a>
                                    <h3>Profile</h3>
                                    <div className="layout-profile">
                                        <section className="profile-col-left">
                                            <label className="profile-bold" htmlFor="first_name">First Name:</label>
                                            <input type="text" className="profile-input" name="first_name" id="first_name" value={first_name} readOnly="readonly" />
                                            <label className="profile-bold" htmlFor="last_name">Last Name:</label>
                                            <input type="text" className="profile-input" name="last_name" id="last_name" value={last_name} readOnly="readonly" />
                                            <label className="profile-bold" htmlFor="email">Email:</label>
                                            <input type="email" className="profile-input" name="email" id="email" value={email} readOnly="readonly" />
                                            
                                            {/* <label className="profile-bold" htmlFor="first_name">First Name:&nbsp;
                                                <input type="text" className="profile-input" name="first_name" id="first_name" value={first_name} readOnly="readonly" />
                                            </label>
                                            <label className="profile-bold" htmlFor="last_name">Last Name:&nbsp;
                                                <input type="text" className="profile-input" name="last_name" id="last_name" value={last_name} readOnly="readonly" />
                                            </label>
                                            <label className="profile-bold" htmlFor="email">Email:&nbsp;
                                                <input type="email" className="profile-input" name="email" id="email" value={email} readOnly="readonly" />
                                            </label> */}
                                        </section>
                                        <section className="profile-col-right">
                                            <label className="profile-bold" htmlFor="username">Username:</label>
                                            <input type="text" className="profile-input" name="username" id="username" value={username} readOnly="readonly" />
                                            <label className="profile-bold" htmlFor="password">Password:</label>
                                            <input type="password" className="profile-input" name="password" id="password" value={password} readOnly="readonly" />
                                            <label className="profile-bold" htmlFor="role">Role:</label>
                                            <input type="text" className="profile-input" name="role" id="role" value={role} readOnly="readonly" />
                                            
                                            {/* <label className="profile-bold" htmlFor="username">Username:&nbsp;
                                                <input type="text" className="profile-input" name="username" id="username" value={username} readOnly="readonly" />
                                            </label>
                                            <label className="profile-bold" htmlFor="password">Password:&nbsp;
                                            <input type="password" className="profile-input" name="password" id="password" value={password} readOnly="readonly" />
                                            </label>
                                            <label className="profile-bold" htmlFor="role">Role:&nbsp;
                                            <input type="text" className="profile-input" name="role" id="role" value={role} readOnly="readonly" />
                                            </label> */}
                                        </section>
                                    </div>
                                    <div className="profile-buttons">
                                        <button
                                            className="profile-button"
                                            onClick={close}
                                        >
                                                close
                                        </button>
                                        <button
                                            className="profile-button"
                                        >
                                                save
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
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