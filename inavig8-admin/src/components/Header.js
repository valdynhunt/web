import React from 'react';
import './Header.css';
//import Profile from './Profile';
import './Profile.css';
import Popup from 'reactjs-popup';

class Header extends React.Component {

    render() {

        const { username, password, email, first_name, last_name, role } = this.props.profile;

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
                                    <a className="profile-modal-close" onClick={close}>&times;</a>
                                    <h3>Profile</h3>
                                    <div className="layout-profile">
                                        <section className="profile-col-left">
                                            <label className="profile-bold" htmlFor="first_name">First Name:&nbsp;
                                                <input type="text" name="first_name" id="first_name" value={first_name} readOnly="readonly" />
                                            </label>
                                            <label className="profile-bold" htmlFor="last_name">Last Name:&nbsp;
                                                <input type="text" name="last_name" id="last_name" value={last_name} readOnly="readonly" />
                                            </label>
                                            <label className="profile-bold" htmlFor="email">Email:&nbsp;
                                                <input type="email" name="email" id="email" value={email} readOnly="readonly" />
                                            </label>
                                        </section>
                                        <section className="profile-col-right">
                                            <label className="profile-bold" htmlFor="username">Username:&nbsp;
                                                <input type="text" name="username" id="username" value={username} readOnly="readonly" />
                                            </label>
                                            <label className="profile-bold" htmlFor="password">Password:&nbsp;
                                            <input type="password" name="password" id="password" value={password} readOnly="readonly" />
                                            </label>
                                            <label className="profile-bold" htmlFor="role">Role:&nbsp;
                                            <input type="text" name="role" id="role" value={role} readOnly="readonly" />
                                            </label>
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
                    <input type="button" className="button-date" value="Nov 17, 2019" readOnly="readonly" />
                </div>
            </header>

        );

    }

}

export default Header;